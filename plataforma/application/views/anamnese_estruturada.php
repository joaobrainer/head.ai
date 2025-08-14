<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="pt-br">
<?php $this->load->view('header'); ?>
<style>
    .buttons-container {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        margin-top: 50px;
        width: 100%;
        position: relative;
    }

    .button {
        padding: 0.6rem 3rem;
        border-radius: 30px;
        font-size: 1.2rem;
        font-weight: bold;
        border: none;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .button.back {
        background-color: #B0B0B0;
        color: #FFFFFF;
        font-size: 1.7rem;
        position: absolute;
        left: 5%;
        text-decoration: none;
    }

    .button.back:hover {
        background-color: #909090;
    }

    .button.primary {
        background-color: #1B2D59;
        color: #FFFFFF;
        font-size: 1.7rem;
        padding: 0.6rem 1.8rem;
    }

    .button.primary:hover {
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
            flex-direction: column;
            align-items: center;
            gap: 15px;
            margin-top: 1.2rem;
        }

        .button.back {
            position: relative;
            left: auto;
            width: 80%;
            text-align: center;
        }

        .button.primary {
            width: 80%;
        }
    }
</style>
<body>
    <div class="container py-4" id="questionnaire"></div>
    <div class="side-graphics">
        <img class="imagens-estaticas" style="height: 155px; width: 77px; margin-right: 10px;" src="<?= base_url('assets/images/background/14.png')  ?>" alt="">
        <img class="imagens-estaticas" style="height: 77px; width: 77px; margin-right: 10px;" src="<?= base_url('assets/images/background/19.png')  ?>" alt="">
        <img class="imagens-estaticas" style="height: 165px; width: 77px;" src="<?= base_url('assets/images/background/15.png')  ?>" alt="">
        <img class="imagens-estaticas" style="height: 170px; width: 77px;" src="<?= base_url('assets/images/background/8.png')  ?>" alt="">
    </div>
    <div class="buttons-container">
        <button class="button back" id="backBtn">Voltar</button>
        <button class="button primary" id="submitBtn">Classificar</button>
    </div>
    <div class="container pb-5">
        <div id="logContainer" class="mt-4" style="display:none;">
            <h4 class="fw-semibold mb-2">Log de Perguntas e Respostas:</h4>
            <pre id="log" class="bg-light p-3 rounded"></pre>
        </div>
    </div>
</body>

<?php $this->load->view('footer'); ?>

<script>
    window.ANAMNESE_LANG = typeof getLang === 'function' ? getLang() : 'en';
</script>
<script src="<?= base_url('assets/js/anamnese_estruturada.js') ?>"></script>

</html>

