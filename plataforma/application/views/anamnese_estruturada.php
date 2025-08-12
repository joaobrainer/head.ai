<?php
defined('BASEPATH') or exit('No direct script access allowed');
$lang = $this->input->get('lang') === 'en' ? 'en' : 'pt-br';
?>
<!DOCTYPE html>
<html lang="<?= $lang ?>">
<?php $this->load->view('header'); ?>
<body>
    <div class="container py-4" id="questionnaire"></div>
    <div class="container pb-5">
        <button id="submitBtn" class="btn btn-primary">
            <?= $lang === 'en' ? 'Classify' : 'Classificar' ?>
        </button>
        <div id="logContainer" class="mt-4" style="display:none;">
            <h4 class="fw-semibold mb-2">
                <?= $lang === 'en' ? 'Question and Answer Log:' : 'Log de Perguntas e Respostas:' ?>
            </h4>
            <pre id="log" class="bg-light p-3 rounded"></pre>
        </div>
    </div>
</body>

<?php $this->load->view('footer'); ?>

<script>
    window.ANAMNESE_LANG = '<?= $lang ?>';
</script>
<script src="<?= base_url('assets/js/anamnese_estruturada.js') ?>"></script>

</html>

