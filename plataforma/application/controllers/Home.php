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



       public function classificar() {

               $lang = $this->input->post('lang', true) ?: 'pt';

               if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                       $text = $this->input->post('text', true);
                       $response = $this->processRequestGpt($text, $lang);
                       echo $response;
               } else {
                       echo $lang === 'en' ? 'Method not supported.' : 'Método não suportado.';
               }
       }

       public function processRequestGpt($prompt, $lang = 'pt') {

               $assistant_id = 'asst_tX6oaxzV9MLjopGSs33AJcvv';

		$this->load->config('openai');
		$this->openai_key = $this->config->item('openai_api_key');

               $thread_id = $this->createThread($this->openai_key);
		// $this->debugThread($this->openai_key, $thread_id);

               if (!$thread_id) {
                       echo $lang === 'en' ? 'No response found.' : 'Nenhuma resposta encontrada.';
                       return;
               }

               $promptText = ($lang === 'en') ? 'Please answer in English: ' . $prompt : $prompt;
               $this->addMessageToThread($this->openai_key, $thread_id, $promptText);
		// $this->debugThreadMessages($this->openai_key, $thread_id);

               $run_id = $this->runAssistant($this->openai_key, $assistant_id, $thread_id);
		// $this->debugRun($this->openai_key, $thread_id, $run_id);

               if (!$run_id) {
                       echo $lang === 'en' ? 'No response found.' : 'Nenhuma resposta encontrada.';
                       return;
               }

               $status = $this->waitForRunCompletion($this->openai_key, $thread_id, $run_id, $lang);

               $response = $this->getAssistantResponse($this->openai_key, $thread_id, $lang);

               echo $response;
       }

	private function createThread($openai_key) {

		$url = 'https://api.openai.com/v1/threads';
		$headers = [
			'Authorization: Bearer ' . $openai_key,
			'Content-Type: application/json',
			'OpenAI-Beta: assistants=v2'
		];

		$payload = [
			'tool_resources' => [
				'file_search' => [
					'vector_store_ids' => ['vs_67de0563f13081918a19416ad287466b']
				]
			]
		];

		$ch = curl_init($url);
		curl_setopt_array($ch, [
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_POST => true,
			CURLOPT_HTTPHEADER => $headers,
			CURLOPT_POSTFIELDS => json_encode($payload)
		]);
		$response = json_decode(curl_exec($ch), true);
		curl_close($ch);

		return $response['id'] ?? null;
	}

	private function addMessageToThread($openai_key, $thread_id, $message) {

		$url = "https://api.openai.com/v1/threads/{$thread_id}/messages";
		$headers = [
			'Authorization: Bearer ' . $openai_key,
			'Content-Type: application/json',
			'OpenAI-Beta: assistants=v2'
		];

		$payload = [
			'role' => 'user',
			'content' => $message
		];

		$ch = curl_init($url);
		curl_setopt_array($ch, [
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_POST => true,
			CURLOPT_HTTPHEADER => $headers,
			CURLOPT_POSTFIELDS => json_encode($payload)
		]);
		$response = curl_exec($ch);
		$error = curl_error($ch);
		curl_close($ch);

		if (!$response) {
			// echo "❌ Erro ao adicionar mensagem à thread: $error";
			return null;
		}

		$decoded = json_decode($response, true);

		if (!isset($decoded['id'])) {
			// echo "<h3>❌ Resposta inválida da API ao adicionar mensagem:</h3><pre>";
			return null;
			// echo "</pre>";
		}

		return $decoded;
	}



	private function runAssistant($openai_key, $assistant_id, $thread_id) {

		$url = "https://api.openai.com/v1/threads/{$thread_id}/runs";
		$headers = [
			'Authorization: Bearer ' . $openai_key,
			'Content-Type: application/json',
			'OpenAI-Beta: assistants=v2'
		];

		$payload = [
			'assistant_id' => $assistant_id,
			'tools' => [
				[
					'type' => 'file_search'
				]
			],
			'tool_resources' => [
				'file_search' => [
					'vector_store_ids' => ['vs_67de0563f13081918a19416ad287466b']
				]
			],
			'tool_choice' => [
				'type' => 'file_search'
			]
		];

		$ch = curl_init($url);
		curl_setopt_array($ch, [
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_POST => true,
			CURLOPT_HTTPHEADER => $headers,
			CURLOPT_POSTFIELDS => json_encode($payload)
		]);
		$response = json_decode(curl_exec($ch), true);
		curl_close($ch);

		return $response['id'] ?? null;
	}


       private function waitForRunCompletion($openai_key, $thread_id, $run_id, $lang) {

		$url = "https://api.openai.com/v1/threads/{$thread_id}/runs/{$run_id}";
		$headers = [
			'Authorization: Bearer ' . $openai_key,
			'OpenAI-Beta: assistants=v2'
		];

		$status = 'queued';
		$maxAttempts = 30;
		$attempts = 0;

		while ($status === 'queued' || $status === 'in_progress') {
                       if ($attempts >= $maxAttempts) {
                               return $lang === 'en' ? 'No response found.' : 'Nenhuma resposta encontrada.';
                       }

			sleep(3);
			$ch = curl_init($url);
			curl_setopt_array($ch, [
				CURLOPT_RETURNTRANSFER => true,
				CURLOPT_HTTPHEADER => $headers
			]);
			$response = json_decode(curl_exec($ch), true);
			curl_close($ch);

			if (isset($response['status'])) {
				$status = $response['status'];
			}

			$attempts++;
		}

               return $status !== 'completed' ? ($lang === 'en' ? 'No response found.' : 'Nenhuma resposta encontrada.') : null;
       }

       private function getAssistantResponse($openai_key, $thread_id, $lang) {

		$url = "https://api.openai.com/v1/threads/{$thread_id}/messages";
		$headers = [
			'Authorization: Bearer ' . $openai_key,
			'OpenAI-Beta: assistants=v2'
		];

		$ch = curl_init($url);
		curl_setopt_array($ch, [
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_HTTPHEADER => $headers
		]);
		$response = json_decode(curl_exec($ch), true);
		curl_close($ch);

               if (!isset($response['data']) || empty($response['data'])) {
                       return $lang === 'en' ? 'No response found.' : 'Nenhuma resposta encontrada.';
               }

		foreach ($response['data'] as $message) {
			if ($message['role'] === 'assistant' && isset($message['content'][0]['text']['value'])) {
				return $message['content'][0]['text']['value'];
			}
		}

               return $lang === 'en' ? 'No response found.' : 'Nenhuma resposta encontrada.';
       }
}

