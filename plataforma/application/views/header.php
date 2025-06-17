<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="HeadAI">

	<title><?php print($titulo); ?></title>

	<link rel="stylesheet" type="text/css" href="<?= base_url('assets/css/bootstrap/bootstrap.min.css') ?>">

        <link rel="stylesheet" type="text/css" href="<?= base_url('assets/css/style.css') ?>">

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">

        <script>
            function getLang() {
                return localStorage.getItem('lang') || 'en';
            }

            function toggleLang() {
                const lang = getLang() === 'en' ? 'pt' : 'en';
                localStorage.setItem('lang', lang);
                location.reload();
            }

            document.documentElement.lang = getLang() === 'en' ? 'en' : 'pt-br';

            document.addEventListener('DOMContentLoaded', function () {
                const btn = document.createElement('button');
                btn.id = 'lang-toggle';
                btn.style.position = 'fixed';
                btn.style.top = '10px';
                btn.style.right = '10px';
                btn.style.zIndex = '9999';
                btn.className = 'btn btn-secondary';
                btn.style.padding = '2px 4px';
                const basePath = '<?= base_url('assets/images/languages/'); ?>';
                const img = document.createElement('img');
                img.width = 24;
                img.src = basePath + (getLang() === 'en' ? 'br.svg' : 'us.svg');
                img.alt = 'Toggle language';
                btn.appendChild(img);
                btn.onclick = toggleLang;
                document.body.appendChild(btn);
            });
        </script>


</head>
