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
        text-align: center;
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

    .title {
        font-size: 2.3rem;
        font-weight: bold;
        margin-bottom: 20px;
        margin-top: 2rem;
    }

    .loading-indicator {
        font-size: 6rem;
        margin: 20px 0;
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
    #chatgpt-response{
        width: 50%;
    }

    .text-area {
        width: 50%;
        height: 250px;
        background: rgba(255, 255, 255, 0.7);
        border: 1px solid #ccc;
        border-radius: 10px;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
        padding: 10px;
        font-size: 1rem;
        resize: none;
        outline: none;
    }

    #response-content{
        text-align: left;
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

        .text-area {
            width: 90%;
        }

        .title {
            font-size: 1.8rem;

        }
        #chatgpt-response{
            width: 90%;
        }

        .header-icons {
            margin-top: 1rem;
        }
    }
</style>

<body>
    <div class="body">
        <div>
            <div class="header-icons">
                <img class="imagens-estaticas" style="height: 80px; width: 80px;" src="<?= base_url('assets/images/background/24.png')  ?>" alt="">
                <img class="imagens-estaticas" style="height: 80px; width: 80px;" src="<?= base_url('assets/images/background/23.png')  ?>" alt="">
                <img class="imagens-estaticas" style="height: 80px; width: 80px;" src="<?= base_url('assets/images/background/22.png')  ?>" alt="">
            </div>
            <div class="title" id="title">Insira o caso clínico abaixo</div>
        </div>
        <textarea class="text-area" id="inputText" placeholder="Digite aqui..."></textarea>
        <div id="div-spinner" style="display: none;">
            <div id="spinner" style="display: flex; align-items: center; justify-content: center; min-height: 380px;">
                <div class="spinner-border text-primary" role="status">
                </div>
                <p id="spinner-text" style="margin-left: 10px; margin-top: 1rem">Classificando caso clínico...</p>
            </div>
        </div>
        <div id="chatgpt-response" style="display: none; margin: 20px auto; padding: 20px; background-color: #fff; border: 1px solid #ccc; border-radius: 10px; overflow-y: auto; max-height: 320px; height: 310px;">
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
        <button class="button back">Voltar</button>
        <button class="button primary" onclick="processText()" id="classificar">Classificar</button>
        <button class="button primary" id="tentar-novamente" style="display: none;">Tentar novamente</button>

    </div>
</body>

<?php $this->load->view('footer'); ?>

<script>
    document.addEventListener('DOMContentLoaded', function () {
        const lang = getLang();
        if (lang === 'en') {
            document.getElementById('title').textContent = 'Insert the clinical case below';
            document.getElementById('inputText').placeholder = 'Type here...';
            document.getElementById('classificar').textContent = 'Classify';
            document.getElementById('tentar-novamente').textContent = 'Try again';
            document.querySelector('.button.back').textContent = 'Back';
            document.getElementById('spinner-text').textContent = 'Classifying clinical case...';
        }
    });

    function processText() {
        var textArea = document.getElementById("inputText");
        var spinner = document.getElementById("div-spinner");
        var title = document.getElementById("title");

        if (textArea.value.trim() === "") {
            if (getLang() === 'en') {
                alert("Please insert a clinical case before classifying.");
            } else {
                alert("Por favor, insira um caso clínico antes de classificar.");
            }
        } else {
            textArea.style.display = "none";
            spinner.style.display = "block";
            title.style.display = "none";
            $('#classificar').hide();

            $.ajax({
                type: "POST",
                url: "<?= base_url('casoclinico/classificar') ?>",
                data: {
                    text: textArea.value,
                    lang: getLang()
                },
                success: function(response) {
                    spinner.style.display = "none";
                    // textArea.style.display = "block";
                    // title.style.display = "block";
                    // $('#classificar').show();

                    $('#chatgpt-response').show();
                    console.log(response);
                    if (response != "Nenhuma resposta encontrada." && response != "No response found.") {
                        let treatedResponse = response;
                        
                        treatedResponse = treatedResponse.replace(/【[^】]*】/g, '');
                        
                        treatedResponse = treatedResponse.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                        
                        treatedResponse = treatedResponse.replace(/(\d+\.)/g, '<br><br>$1');

                        $('#response-content').html(treatedResponse);
                    } else {
                        if (getLang() === 'en') {
                            $('#response-content').html('Unable to classify the clinical case. Please try again.');
                        } else {
                            $('#response-content').html('Não foi possível classificar o caso clínico. Tente novamente.');
                        }
                    }

                    $('#tentar-novamente').show();

                }
            });

        }
    }

    $('#tentar-novamente').click(function() {
        $('#chatgpt-response').hide();
        $('#tentar-novamente').hide();
        $('#inputText').val('');
        $('#inputText').show();
        $('#title').show();
        $('#classificar').show();
    });

    $('.back').click(function() {
        window.location.href = "<?= base_url('') ?>";
    });
</script>

</html>
