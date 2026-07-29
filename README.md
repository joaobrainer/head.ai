# head.ai
# Classificação Internacional das Cefaleias baseada em processamento de linguagem natural
# International Classification of Headache Disorders based on natural language processing

## Integração com a OpenAI

A classificação de cefaleias (`Home::processRequestGpt`) usa a **Responses
API** da OpenAI com as ferramentas `file_search` (sobre o vector store da
classificação) e `code_interpreter`. A Assistants API, usada até então, foi
descontinuada em 26/08/2025 e será desligada em 26/08/2026.

Configuração em `plataforma/application/config/`:

| Arquivo | Conteúdo | Versionado |
| --- | --- | --- |
| `openai.php` | apenas `openai_api_key` | não (está no `.gitignore`) |
| `openai_responses.php` | modelo, vector store, parâmetros e instruções de sistema | sim |

Em um servidor novo, crie `plataforma/application/config/openai.php` com a
chave da API:

```php
<?php
defined('BASEPATH') or exit('No direct script access allowed');

$config['openai_api_key'] = 'sk-...';
```

As instruções que ficavam no campo *System instructions* do Assistant agora
estão em `openai_responses.php` (`openai_instructions`), junto do idioma da
resposta (`openai_language_en` / `_pt`). Falhas de chamada à API são
registradas em `plataforma/application/logs/`.
