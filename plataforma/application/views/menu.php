<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="pt-br">
<?php $this->load->view('header'); ?>
<body>
    <div class="container d-flex flex-column justify-content-center align-items-center" style="height:100vh;">
        <a href="<?= base_url('casoclinico') ?>" class="btn btn-primary mb-3">Inserir caso clínico</a>
        <a href="<?= base_url('anamnese-estruturada') ?>" class="btn btn-secondary">Anamnese Estruturada</a>
    </div>
</body>
</html>

