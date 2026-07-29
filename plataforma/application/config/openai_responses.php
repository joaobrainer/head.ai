<?php
defined('BASEPATH') or exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| Configurações da Responses API da OpenAI
| -------------------------------------------------------------------------
| A Assistants API foi descontinuada em 26/08/2025 e será desligada em
| 26/08/2026. A substituta é a Responses API, onde não existem mais os
| objetos Assistant/Thread/Run: as instruções, o modelo e as ferramentas
| (file_search e code_interpreter) são enviados em cada requisição - e é
| isso que este arquivo guarda.
|
| A chave da API continua em application/config/openai.php, que está no
| .gitignore.
*/

$config['openai_responses_url'] = 'https://api.openai.com/v1/responses';

// Modelo usado pelo Assistant antigo (asst_tX6oaxzV9MLjopGSs33AJcvv).
$config['openai_model'] = 'gpt-4o-2024-08-06';

// Vector store com a Classificação Internacional das Cefaleias (File search).
$config['openai_vector_store_ids'] = array('vs_67de0563f13081918a19416ad287466b');

// Número máximo de trechos retornados pelo file_search.
// NULL mantém o padrão da API.
$config['openai_file_search_max_results'] = NULL;

// O Assistant tinha o Code interpreter ligado, embora o run antigo
// sobrescrevesse as ferramentas com file_search apenas. Deixe FALSE para
// reproduzir exatamente o comportamento anterior (só a busca nos arquivos).
$config['openai_enable_code_interpreter'] = TRUE;

// 'file_search' obriga o modelo a consultar a classificação antes de
// responder, como fazia o tool_choice do run do Assistant. Também aceita
// 'auto' (o modelo decide), 'required' (alguma ferramenta) e 'none'.
$config['openai_tool_choice'] = 'file_search';

// Mesmos valores da configuração do Assistant.
$config['openai_temperature'] = 0.20;
$config['openai_top_p'] = 0.30;

// FALSE = a OpenAI não armazena a resposta (o caso clínico do paciente vai
// no prompt). Mude para TRUE se quiser acompanhar as respostas no painel.
$config['openai_store'] = FALSE;

// Tempos máximos, em segundos, da chamada HTTP à API.
$config['openai_timeout'] = 180;
$config['openai_connect_timeout'] = 15;

/*
| -------------------------------------------------------------------------
| Instruções de sistema
| -------------------------------------------------------------------------
| Conteúdo que ficava no campo "System instructions" do Assistant. Agora é
| enviado no parâmetro "instructions" de cada requisição.
*/

$config['openai_instructions'] = <<<'INSTRUCTIONS'
Você é um sistema avançado de classificação de cefaleias.
Utilize as informações de conhecimento dos arquivos em anexo para as respostas.
Você deve classificar de forma refinada a cefaleia reportada no caso clínico inserido, considerando a descrição de alterações e/ou sinais e/ou sintomas neurológicos, resultados de exames complementares e intervalo de duração da cefaleia (tempo). Na ausência de descritores suficientes para a correspondência com alguma cefaleia, você pode perguntar ao usuário as informações clínicas faltantes. Você deve posicionar as três cefaleias mais prováveis EXCLUSIVAMENTE de acordo com a quantidade de equivalentes e correspondência lógica aos sinais e/ou sintomas, critérios diagnósticos, resultados de exames complementares e tempo de duração da cefaleia. Você não deve falar sobre condutas médicas ou outras recomendações clínicas. Fale apenas quais são as classificações mais prováveis de cefaleia.
INSTRUCTIONS;

/*
| -------------------------------------------------------------------------
| Idioma da resposta
| -------------------------------------------------------------------------
| Anexado às instruções conforme o "lang" enviado pela tela (en/pt).
*/

$config['openai_language_en'] = 'Please answer in English.';
$config['openai_language_pt'] = 'Responda em português.';
