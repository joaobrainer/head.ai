<?php
defined('BASEPATH') or exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html lang="pt-br">

<?php $this->load->view('header'); ?>

<style>
	body {
		margin: 0;
		font-family: 'Montserrat', sans-serif;
		background-color: #ffffff;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	.container {
		display: flex;
		flex-direction: row;
		width: 100%;
		max-width: 100%;
		padding: 0;
	}

	.left-section {
		background-color: #203162;
		color: white;
		width: 38%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0.5rem 3.5rem;
		min-height: 100vh;
	}

	.left-section h1 {
		font-size: 5rem;
		color: #abd7ff;
		font-weight: 600;
	}

	.left-section p {
		font-size: 1.3rem;
		line-height: 1.4;
		margin-bottom: 1rem;
		font-weight: 550;
	}

	.cta-button {
		padding: 0.5rem 2rem;
		background-color: #FFC610;
		color: #FFFFFF;
		font-weight: bold;
		border: none;
		border-radius: 30px;
		font-size: 1.7rem;
		cursor: pointer;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		transition: background 0.3s ease;
		width: 50%
	}

	.cta-button:hover {
		background-color: #e5ae0a;
	}

	.right-section {
		flex: 1;
		display: flex;
		background-color: #ffffff;
		padding: 2rem;
		flex-direction: column;
	}

	.shape {
		width: 80px;
		height: 80px;
		margin: 10px;
	}

	.floating {
		animation: float 4s ease-in-out infinite;
	}

	.rotating {
		animation: rotate 6s linear infinite;
	}


	@keyframes float {

		0%,
		100% {
			transform: translateY(0);
		}

		50% {
			transform: translateY(-10px);
		}
	}

	@keyframes rotate {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}

	@media (max-width: 768px) {
		.container {
			flex-direction: column;
		}

		.left-section{
			width: 100%;
		}

		
		.right-section {
			display: none;
		}

		.left-section {
			text-align: center;
			padding: 1rem;
		}

		.cta-button {
			margin-top: 5rem;
			align-self: center;
			width: 100%;
		}
	}
</style>

<body>
	<div class="container">
		<section class="left-section">
			<div>
				<h1>head.ai</h1>
			</div>
			<div>
				<p>Classificação Internacional das Cefaleias baseada em processamento de linguagem natural</p>
				<div class="text-center">
                                       <a href="<?= base_url('menu') ?>" class="cta-button">Iniciar</a>
                                </div>
                        </div>

		</section>
		<section class="right-section">
			<div class="row">
				<div class="col-md-5" style="display: flex; flex-direction: column; align-items: flex-end; padding-right: 30px;">
					<div>
						<img class="imagens-estaticas" style="width: 78px; height: 116px;" src="<?= base_url('assets/images/background/1.png')  ?>" alt="">
						<img class="imagens-estaticas" style="width: 99px; height: 99px;" src="<?= base_url('assets/images/background/2.png')  ?>" alt="">

					</div>

					<div>
						<img class="imagens-estaticas mt-4" style="width: 78px; height: 78px; margin-right: 20px;" src="<?= base_url('assets/images/background/5.png')  ?>" alt="">
						<img class="imagens-estaticas mt-4" style="width: 78px; height: 78px;" src="<?= base_url('assets/images/background/6.png')  ?>" alt="">

					</div>
				</div>
				<div class="col-md-3" style="padding-right: 0px; padding-left: 0px;">
					<div style="display: inline-grid;">
						<img class="imagens-estaticas" style="width: 82px; height: 74px;" src="<?= base_url('assets/images/background/3.png')  ?>" alt="">

						<img class="imagens-estaticas" style="width: 89px; height: 79px; margin-top:30px;" src="<?= base_url('assets/images/background/7.png')  ?>" alt="">
					</div>

					<img class="imagens-estaticas height-ajustado width-ajustado" src="<?= base_url('assets/images/background/8.png')  ?>" alt="">

				</div>

				<div class="col-md-4" style="display: flex; flex-direction: column; padding-right: 0px; padding-left: 0px;">
					<img class="imagens-estaticas" style="width: 140px; height: 99px;" src="<?= base_url('assets/images/background/4.png')  ?>" alt="">

					<img class="imagens-estaticas mt-4" style="width: 138px; height: 76px;" src="<?= base_url('assets/images/background/9.png')  ?>" alt="">
				</div>

			</div>

			<div class="row mt-4">
				<div class="col-md-5" style="display: flex; flex-direction: column; align-items: flex-end; padding-right: 35px;">
					<div>
						<img class="imagens-estaticas" style="height: 77px; width: 83.5px; margin-right: 10px;" src="<?= base_url('assets/images/background/10.png')  ?>" alt="">
						<img class="imagens-estaticas" style="height: 77px; width: 77px;" src="<?= base_url('assets/images/background/11.png')  ?>" alt="">

					</div>

					<div class="mt-3">
						<img class="imagens-estaticas" style="height: 77px; width: 82.5px; margin-right: 10px;" src="<?= base_url('assets/images/background/12.png')  ?>" alt="">
						<img class="imagens-estaticas" style="height: 77px; width: 77px;" src="<?= base_url('assets/images/background/13.png')  ?>" alt="">
					</div>
				</div>
				<div class="col-md-3" style="padding-right: 0px; padding-left: 0px;">
					<img class="imagens-estaticas" style="height: 155px; width: 77px; margin-right: 10px;" src="<?= base_url('assets/images/background/14.png')  ?>" alt="">

					<img class="imagens-estaticas" style="height: 155px; width: 77px;" src="<?= base_url('assets/images/background/15.png')  ?>" alt="">
				</div>

				<div class="col-md-4" style="display: flex; flex-direction: column; padding-right: 0px; padding-left: 0px; ">

					<img class="imagens-estaticas" style="width: 130px; height: 130px;" src="<?= base_url('assets/images/background/16.png')  ?>" alt="">
				</div>
			</div>

			<div class="row mt-4">
				<div class="col-md-5" style="display: flex;flex-direction: row;justify-content: flex-end;padding-right: 35px;">
					<img class="imagens-estaticas" style="height: 77px; width: 77px; margin-right: 18px;" src="<?= base_url('assets/images/background/17.png')  ?>" alt="">
					<img class="imagens-estaticas" style="height: 77px; width: 77px;" src="<?= base_url('assets/images/background/18.png')  ?>" alt="">
				</div>
				<div class="col-md-3" style="padding-right: 0px; padding-left: 0px;">
					<img class="imagens-estaticas" style="height: 77px; width: 77px; margin-right: 10px;" src="<?= base_url('assets/images/background/19.png')  ?>" alt="">

					<img class="imagens-estaticas" style="height: 77px; width: 77px;" src="<?= base_url('assets/images/background/21.png')  ?>" alt="">
				</div>

				<div class="col-md-4" style="display: flex; flex-direction: column; padding-right: 0px; padding-left: 0px; margin-top: -35px;">
					<img class="imagens-estaticas" style="height: 130px; width: 130px;" src="<?= base_url('assets/images/background/20.png')  ?>" alt="">
				</div>
			</div>
		</section>
	</div>
</body>

<?php $this->load->view('footer'); ?>

<script>
    document.addEventListener('DOMContentLoaded', function () {
        const lang = getLang();
        if (lang === 'en') {
            document.querySelector('.left-section p').textContent = 'International Classification of Headache Disorders based on natural language processing';
            document.querySelector('.cta-button').textContent = 'Start';
        }
    });
</script>

</html>
