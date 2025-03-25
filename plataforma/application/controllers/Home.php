<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Home extends CI_Controller
{

	function __construct()
	{

		parent::__construct();
		$this->load->helper('cookie');
		$this->load->helper('string');
		$this->load->helper('url');
	}

	public function index()
	{

		$dados['titulo'] = "HEAD.AI";

		$this->load->view('home', $dados);
	}

	public function loadCasoClinico()
	{

		$dados['titulo'] = "HEAD.AI - Caso Clínico";

		$this->load->view('casoclinico/home', $dados);
	}



	public function classificar() {

		if ($_SERVER['REQUEST_METHOD'] === 'POST') {
			$text = $this->input->post('text', true);
			$response = $this->processRequestGpt($text);
			echo $response;
		} else {
			echo 'Método não suportado.';
		}

	}

	public function processRequestGpt($prompt) {

		$api_key = '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';
		$assistant_id = 'asst_tX6oaxzV9MLjopGSs33AJcvv';

		$thread_id = $this->createThread($api_key);
		// $this->debugThread($api_key, $thread_id);

		if (!$thread_id) {
			echo "Nenhuma resposta encontrada.";
			return;
		}

		$this->addMessageToThread($api_key, $thread_id, $prompt);
		// $this->debugThreadMessages($api_key, $thread_id);

		$run_id = $this->runAssistant($api_key, $assistant_id, $thread_id);
		// $this->debugRun($api_key, $thread_id, $run_id);

		if (!$run_id) {
			echo "Nenhuma resposta encontrada.";
			return;
		}

		$status = $this->waitForRunCompletion($api_key, $thread_id, $run_id);

		$response = $this->getAssistantResponse($api_key, $thread_id);

		echo $response;
	}

	private function createThread($api_key) {

		$url = 'https://api.openai.com/v1/threads';
		$headers = [
			'Authorization: Bearer ' . $api_key,
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

	private function addMessageToThread($api_key, $thread_id, $message) {

		$url = "https://api.openai.com/v1/threads/{$thread_id}/messages";
		$headers = [
			'Authorization: Bearer ' . $api_key,
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



	private function runAssistant($api_key, $assistant_id, $thread_id) {

		$url = "https://api.openai.com/v1/threads/{$thread_id}/runs";
		$headers = [
			'Authorization: Bearer ' . $api_key,
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


	private function waitForRunCompletion($api_key, $thread_id, $run_id) {

		$url = "https://api.openai.com/v1/threads/{$thread_id}/runs/{$run_id}";
		$headers = [
			'Authorization: Bearer ' . $api_key,
			'OpenAI-Beta: assistants=v2'
		];

		$status = 'queued';
		$maxAttempts = 30;
		$attempts = 0;

		while ($status === 'queued' || $status === 'in_progress') {
			if ($attempts >= $maxAttempts) {
				return "Nenhuma resposta encontrada.";
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

		return $status !== 'completed' ? "Nenhuma resposta encontrada." : null;
	}

	private function getAssistantResponse($api_key, $thread_id) {

		$url = "https://api.openai.com/v1/threads/{$thread_id}/messages";
		$headers = [
			'Authorization: Bearer ' . $api_key,
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
			return "Nenhuma resposta encontrada.";
		}

		foreach ($response['data'] as $message) {
			if ($message['role'] === 'assistant' && isset($message['content'][0]['text']['value'])) {
				return $message['content'][0]['text']['value'];
			}
		}

		return 'Nenhuma resposta encontrada.';
	}
}
