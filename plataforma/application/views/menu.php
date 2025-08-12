<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="pt-br">
<?php $this->load->view('header'); ?>
<body>
    <style>
        body {
            height: 100vh;
            background-color: #FDFBF5;
            font-family: 'Montserrat', sans-serif;
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #1B2D59;
            text-align: center;
        }

        .button {
            padding: 0.6rem 3rem;
            border-radius: 30px;
            font-size: 1.7rem;
            font-weight: bold;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            background-color: #1B2D59;
            color: #FFFFFF;
            text-decoration: none;
            margin-bottom: 20px;
        }

        .button:hover {
            background-color: #0F1C3A;
        }
    </style>

    <a href="<?= base_url('casoclinico') ?>" class="button">Inserir caso clínico</a>
    <a href="<?= base_url('anamnese-estruturada') ?>" class="button">Anamnese Estruturada</a>
</body>
</html>

