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
        }

        .body {
            color: #1B2D59;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: 100%;
        }

        .header-icons {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 2rem;
        }

        .buttons-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            margin-top: 50px;
            width: 100%;
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
        }

        .button:hover {
            background-color: #0F1C3A;
        }

        .side-graphics {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 10px;
            margin-right: 20px;
            height: 100%;
        }

        @media (max-width: 768px) {
            .buttons-container {
                margin-top: 1.2rem;
            }

            .side-graphics {
                display: none;
            }

            .header-icons {
                margin-top: 1rem;
            }
        }
    </style>

    <div class="body">
        <div class="header-icons">
            <img class="imagens-estaticas" style="height: 80px; width: 80px;" src="<?= base_url('assets/images/background/24.png')  ?>" alt="">
            <img class="imagens-estaticas" style="height: 80px; width: 80px;" src="<?= base_url('assets/images/background/23.png')  ?>" alt="">
            <img class="imagens-estaticas" style="height: 80px; width: 80px;" src="<?= base_url('assets/images/background/22.png')  ?>" alt="">
        </div>

        <div class="buttons-container">
            <a href="<?= base_url('casoclinico') ?>" class="button">Inserir caso clínico</a>
            <a href="<?= base_url('anamnese-estruturada') ?>" class="button">Anamnese Estruturada</a>
        </div>

        <div class="side-graphics">
            <img class="imagens-estaticas" style="height: 155px; width: 77px; margin-right: 10px;" src="<?= base_url('assets/images/background/14.png')  ?>" alt="">
            <img class="imagens-estaticas" style="height: 77px; width: 77px; margin-right: 10px;" src="<?= base_url('assets/images/background/19.png')  ?>" alt="">
            <img class="imagens-estaticas" style="height: 165px; width: 77px;" src="<?= base_url('assets/images/background/15.png')  ?>" alt="">
            <img class="imagens-estaticas" style="height: 170px; width: 77px;" src="<?= base_url('assets/images/background/8.png')  ?>" alt="">
        </div>
    </div>
</body>
</html>

