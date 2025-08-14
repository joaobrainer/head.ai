<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="pt-br">
<?php $this->load->view('header'); ?>
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
        justify-content: space-between;
        text-align: left;
    }

    .header-icons {
        display: flex;
        justify-content: center;
        gap: 15px;
        margin-top: 2rem;
    }

    .header-icons img {
        margin-right: 10px;
    }

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

    textarea {
        width: 50%;
        resize: none;
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

        .side-graphics {
            display: none;
        }

        .header-icons {
            margin-top: 1rem;
        }
    }

    @media (max-width: 576px) {
        textarea {
            width: 100%;
        }

        .btn-group.flex-wrap {
            width: 100% !important;
        }
    }
</style>
<body>
    <div class="body">
        <div class="header-icons">
            <img class="imagens-estaticas" style="height: 80px; width: 80px;" src="<?= base_url('assets/images/background/24.png')  ?>" alt="">
            <img class="imagens-estaticas" style="height: 80px; width: 80px;" src="<?= base_url('assets/images/background/23.png')  ?>" alt="">
            <img class="imagens-estaticas" style="height: 80px; width: 80px;" src="<?= base_url('assets/images/background/22.png')  ?>" alt="">
        </div>
        <div class="container py-4" id="questionnaire"></div>
        <div id="div-spinner" style="display: none;">
            <div id="spinner" style="display: flex; align-items: center; justify-content: center; min-height: 380px;">
                <div class="spinner-border text-primary" role="status"></div>
                <p id="spinner-text" style="margin-left: 10px; margin-top: 1rem">Classificando anamnese...</p>
            </div>
        </div>
        <div id="anamnese-response" style="display: none; margin: 20px auto; padding: 20px; background-color: #fff; border: 1px solid #ccc; border-radius: 10px; overflow-y: auto; max-height: 320px; height: 310px;">
            <div id="response-content"></div>
        </div>
        <div class="side-graphics">
            <img class="imagens-estaticas" style="height: 155px; width: 77px; margin-right: 10px;" src="<?= base_url('assets/images/background/14.png')  ?>" alt="">
            <img class="imagens-estaticas" style="height: 77px; width: 77px; margin-right: 10px;" src="<?= base_url('assets/images/background/19.png')  ?>" alt="">
            <img class="imagens-estaticas" style="height: 165px; width: 77px;" src="<?= base_url('assets/images/background/15.png')  ?>" alt="">
            <img class="imagens-estaticas" style="height: 170px; width: 77px;" src="<?= base_url('assets/images/background/8.png')  ?>" alt="">
        </div>
    </div>
    <div class="buttons-container">
        <a href="<?= base_url('menu') ?>" class="button back" id="backBtn">Voltar</a>
        <button class="button primary" id="submitBtn">Classificar</button>
        <button class="button primary" id="retryBtn" style="display: none;">Tentar novamente</button>
    </div>
</body>

<?php $this->load->view('footer'); ?>

<script>
    window.ANAMNESE_LANG = typeof getLang === 'function' ? getLang() : 'en';
    window.ANAMNESE_CLASSIFY_URL = "<?= base_url('casoclinico/classificar') ?>";
</script>
<script src="<?= base_url('assets/js/anamnese_estruturada.js') ?>"></script>

</html>

