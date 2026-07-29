<?php
defined('BASEPATH') or exit('No direct script access allowed');
class Home extends CI_Controller {

	function __construct() {

		parent::__construct();
		$this->load->helper('cookie');
		$this->load->helper('string');
		$this->load->helper('url');
	}

        public function index() {

                $dados['titulo'] = "HEAD.AI";

                $this->load->view('home', $dados);
        }

       public function menu() {

               $dados['titulo'] = "HEAD.AI - Menu";

               $this->load->view('menu', $dados);
       }

       public function loadAnamneseEstruturada() {

               $dados['titulo'] = "HEAD.AI - Anamnese Estruturada";

               $this->load->view('anamnese_estruturada', $dados);
       }

        public function loadCasoClinico() {

		$dados['titulo'] = "HEAD.AI - Caso Clínico";

		// Exemplo de dados do caso clínico:
		// Cefaleia atribuída a aneurisma sacular não roto
		// Paciente do sexo feminino, 45 anos, professora, comparece à emergência queixando-se de cefaleia intensa e persistente há 5 dias.

		// História da Doença Atual:
		// A paciente relata início súbito de cefaleia holocraniana, descrita como "a pior dor da vida", com intensidade 9/10, associada a fotofobia e náuseas, mas sem vômitos. Negava trauma craniano recente, febre ou infecções. Refere que a dor não melhora com analgésicos comuns (paracetamol e dipirona). Relata ainda que, nos últimos 2 meses, apresentou episódios recorrentes de cefaleia leve a moderada, que atribuía ao estresse no trabalho.

		// História Pregressa:
		// Hipertensão arterial sistêmica controlada com losartana. Nega tabagismo, etilismo ou uso de drogas ilícitas. Sem história prévia de cefaleias crônicas ou enxaquecas.

		// Exame Físico:

		// Geral: consciente, orientada, hidratada, em regular estado geral.

		// Neurológico: pupilas isocóricas e fotoreagentes, sem déficits motores ou sensitivos. Reflexos normais. Sinal de meningite negativo (rigidez de nuca ausente).

		// Outros sistemas: sem alterações relevantes.

		// Exames Complementares:

		// Tomografia computadorizada (TC) de crânio sem contraste: sem sinais de hemorragia subaracnoidea ou lesões expansivas.

		// Angiografia por ressonância magnética (ARM): identificado aneurisma sacular de 7 mm na artéria cerebral média direita, sem sinais de ruptura.

		// Punção lombar: líquido cefalorraquidiano (LCR) claro, com pressão de abertura normal, sem hemácias ou xantocromia.


                $this->load->view('casoclinico/home', $dados);
        }


       public function loadAbout() {

               $dados['titulo'] = "HEAD.AI - About";

               $this->load->view('about', $dados);
       }


       public function classificar() {

               $lang = $this->input->post('lang', true) ?: 'en';

               if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                       $text = $this->input->post('text', true);
                       $response = $this->processRequestGpt($text, $lang);
                       echo $response;
               } else {
                       echo $lang === 'en' ? 'Method not supported.' : 'Método não suportado.';
               }
       }

	/**
	 * Envia o caso clínico para a Responses API da OpenAI.
	 *
	 * Substitui a Assistants API (threads/runs/messages), descontinuada em
	 * 26/08/2025 e com desligamento previsto para 26/08/2026. Em vez de criar
	 * uma thread, enfileirar um run e ficar consultando o status, a Responses
	 * API resolve tudo - inclusive a busca na classificação pelo file_search -
	 * em uma única requisição síncrona.
	 */
	public function processRequestGpt($prompt, $lang = 'en') {

		$this->load->config('openai');
		$this->load->config('openai_responses');

		$openai_key = $this->config->item('openai_api_key');

		if (!$openai_key) {
			log_message('error', 'OpenAI: chave da API não configurada em application/config/openai.php.');
			return $this->errorMessage($lang);
		}

		$response = $this->createOpenAiResponse($openai_key, $this->buildResponsePayload($prompt, $lang));

		if (!$response) {
			return $this->errorMessage($lang);
		}

		$text = $this->extractOutputText($response);

		return $text !== '' ? $text : $this->errorMessage($lang);
	}

	/**
	 * Texto que as telas comparam para exibir o aviso de falha - precisa
	 * bater exatamente com casoclinico/home.php e anamnese_estruturada.js.
	 */
	private function errorMessage($lang) {

		return $lang === 'en' ? 'No response found.' : 'Nenhuma resposta encontrada.';
	}

	/**
	 * Monta o corpo da requisição de POST /v1/responses.
	 */
	private function buildResponsePayload($prompt, $lang) {

		$file_search = [
			'type' => 'file_search',
			'vector_store_ids' => (array) $this->config->item('openai_vector_store_ids')
		];

		$max_results = $this->config->item('openai_file_search_max_results');
		if ($max_results) {
			$file_search['max_num_results'] = (int) $max_results;
		}

		$tools = [$file_search];

		if ($this->config->item('openai_enable_code_interpreter')) {
			// Na Responses API o code_interpreter exige um container.
			$tools[] = [
				'type' => 'code_interpreter',
				'container' => ['type' => 'auto']
			];
		}

		$payload = [
			'model' => $this->config->item('openai_model') ?: 'gpt-4o-2024-08-06',
			// Equivale ao campo "System instructions" do Assistant.
			'instructions' => $this->buildInstructions($lang),
			'input' => [
				[
					'role' => 'user',
					'content' => $prompt
				]
			],
			'tools' => $tools,
			'tool_choice' => $this->buildToolChoice(),
			// Na Responses API o response_format virou text.format.
			'text' => ['format' => ['type' => 'text']],
			'store' => (bool) $this->config->item('openai_store')
		];

		$temperature = $this->config->item('openai_temperature');
		if (is_numeric($temperature)) {
			$payload['temperature'] = (float) $temperature;
		}

		$top_p = $this->config->item('openai_top_p');
		if (is_numeric($top_p)) {
			$payload['top_p'] = (float) $top_p;
		}

		return $payload;
	}

	/**
	 * Modos genéricos ('auto', 'required', 'none') vão como string; o nome de
	 * uma ferramenta - 'file_search', que é o padrão e obriga a consulta à
	 * classificação - vai como objeto.
	 */
	private function buildToolChoice() {

		$tool_choice = $this->config->item('openai_tool_choice') ?: 'file_search';

		return in_array($tool_choice, ['auto', 'required', 'none'], true)
			? $tool_choice
			: ['type' => $tool_choice];
	}

	/**
	 * Instruções de sistema + idioma pedido pela tela.
	 */
	private function buildInstructions($lang) {

		$instructions = (string) $this->config->item('openai_instructions');

		$language = $lang === 'en'
			? $this->config->item('openai_language_en')
			: $this->config->item('openai_language_pt');

		if ($language) {
			$instructions .= "\n\n" . $language;
		}

		return $instructions;
	}

	/**
	 * Executa a chamada HTTP e devolve a resposta decodificada, ou null.
	 */
	private function createOpenAiResponse($openai_key, array $payload) {

		$url = $this->config->item('openai_responses_url') ?: 'https://api.openai.com/v1/responses';
		$headers = [
			'Authorization: Bearer ' . $openai_key,
			'Content-Type: application/json'
		];

		$ch = curl_init($url);
		curl_setopt_array($ch, [
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_POST => true,
			CURLOPT_HTTPHEADER => $headers,
			CURLOPT_POSTFIELDS => json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
			CURLOPT_CONNECTTIMEOUT => (int) ($this->config->item('openai_connect_timeout') ?: 15),
			CURLOPT_TIMEOUT => (int) ($this->config->item('openai_timeout') ?: 180)
		]);

		$body = curl_exec($ch);
		$error = curl_error($ch);
		$http_code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
		curl_close($ch);

		if ($body === false) {
			log_message('error', 'OpenAI Responses API: falha na requisição - ' . $error);
			return null;
		}

		$decoded = json_decode($body, true);

		if (!is_array($decoded)) {
			log_message('error', 'OpenAI Responses API: resposta não é um JSON válido (HTTP ' . $http_code . ').');
			return null;
		}

		if ($http_code < 200 || $http_code > 299 || isset($decoded['error'])) {
			$message = $decoded['error']['message'] ?? 'erro não identificado';
			log_message('error', 'OpenAI Responses API: HTTP ' . $http_code . ' - ' . $message);
			return null;
		}

		return $decoded;
	}

	/**
	 * Extrai o texto do array "output".
	 *
	 * O output traz um item por ação do modelo: as chamadas de ferramenta
	 * (file_search_call, code_interpreter_call) e a mensagem final (message).
	 * Só interessa o texto dos itens do tipo message; os demais são ignorados.
	 */
	private function extractOutputText(array $response) {

		$text = '';

		if (!empty($response['output']) && is_array($response['output'])) {
			foreach ($response['output'] as $item) {
				if (!isset($item['type']) || $item['type'] !== 'message' || empty($item['content'])) {
					continue;
				}

				foreach ($item['content'] as $content) {
					if (isset($content['type'], $content['text']) && $content['type'] === 'output_text') {
						$text .= $content['text'];
					}
				}
			}
		}

		$text = trim($text);

		if ($text === '') {
			$status = $response['status'] ?? 'desconhecido';
			$reason = $response['incomplete_details']['reason'] ?? '';
			log_message('error', 'OpenAI Responses API: nenhum texto retornado (status: ' . $status . ($reason ? ', motivo: ' . $reason : '') . ').');
		}

		return $text;
	}
}

