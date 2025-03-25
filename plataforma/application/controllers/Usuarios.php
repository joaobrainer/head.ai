<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Usuarios extends CI_Controller {

	function __construct() {

		parent::__construct();
		$this->load->helper('cookie');
		$this->load->helper('string');
		$this->load->helper('url');
		$this->load->model('usuarios_model');
	}

    public function realizaLogin() {

        $email = $this->input->post('email');
        $this->session->set_userdata('email', $email);

        $usuario = $this->usuarios_model->realizaLogin($email);

        if ($usuario) {

           redirect('login');
        } else {

           redirect('cadastro');
        }
    }

    public function loadCadastro() { 

        if ($this->session->userdata('email')) {

            $dados['titulo'] = "HEAD.AI - Cadastro";

            $this->session->set_userdata([
                'logged_in' => false,
            ]);

		    $this->load->view('login/cadastro', $dados);
        }else{
            redirect('');
        }        
    }

    public function cadastraUsuario() { 

        $dados = array(
            'email' => $this->session->userdata('email'),
            'senha' => md5($this->input->post('senha')),
            'status' => 1
        );

        $usuario = $this->usuarios_model->cadastraUsuario($dados);

        if ($usuario) {
            redirect('home');
        } else {

            $this->session->set_flashdata('danger', 'Erro ao cadastrar usuário');

            redirect('cadastro');
        }
    }

    public function loadRealizaLogin() { 

        $dados['titulo'] = "HEAD.AI - Login";

        $this->load->view('login/verificalogin', $dados);
    }

    public function verificaLogin() { 

        $dados = array(
            'email' => $this->input->post('email'),
            'senha' => $this->input->post('senha')
        );

        $usuario = $this->usuarios_model->verificaLogin($dados);

        if ($usuario) {
            $this->session->set_userdata('usuario', $usuario);

            $this->session->set_userdata([
                'logged_in' => true,
            ]);

            redirect('home');
        } else {
            $this->session->set_flashdata('danger', 'Usuário ou senha incorretos');

            redirect('login');
        }
    }

    public function esqueciSenha() { 

        $email = $this->input->get('email') ? $this->input->get('email') : null;

        $hashesqueci = $this->usuarios_model->verificaExisteEmail($email);

        $dados['hashesqueci'] = $hashesqueci['hash_esqueciasenha'];

        if ($hashesqueci) {

            $this->load->library('email');
            $this->email->set_mailtype("html");
            $this->email->from("noreply@neuromnese.com", "HEAD.AI");        
            $this->email->subject('Recuperação de Senha');
            $this->email->to($email);
            $message = '
                <html>
                    <head>
                        <title>Recuperação de Senha</title>
                    </head>
                    <body>
                        <p>Olá</p>
                        <p>Clique <a href="' . base_url('recuperasenha/' . $dados['hashesqueci']) . '" 
                            style="color: #247BD6; text-decoration: none; font-weight: bold;">
                                aqui
                            </a> para redefinir sua senha:
                        </p>
                        <p>Se você não solicitou a recuperação de senha, por favor ignore este e-mail.</p>
                        <br>
                        <p>Atenciosamente,</p>
                        <p><strong>Equipe Mnese</strong></p>
                    </body>
                </html>
            ';
            $this->email->message($message);

            if ($this->email->send()) {
                $this->session->set_flashdata('success', 'E-mail de recuperação de senha enviado com sucesso.');
            } else {
                $this->session->set_flashdata('danger', 'Erro ao enviar e-mail de recuperação de senha.');
            }
        } else {
            $this->session->set_flashdata('danger', 'E-mail não encontrado.');
        }

        redirect('login');

    }

    public function loadRecuperaSenha($hashesqueci) { 

        $dados['titulo'] = "HEAD.AI - Recuperar Senha";

        $this->session->set_userdata([
            'logged_in' => false,
        ]);

		$dados['hashesqueci'] = $hashesqueci;

		$this->load->view('login/recuperasenha', $dados);
    }

    public function alteraRecuperacaoSenha() { 

        $senha = md5($this->input->post("senha"));
		$hashrecupera = $this->input->post("hashrecupera");

		$senhaalterada = $this->usuarios_model->alterarSenhaRecuperada($senha, $hashrecupera);

		if ($senhaalterada) {

			$this->session->set_flashdata("success", "Senha alterada com sucesso. Faça login novamente!");
			redirect('login');
		} else {

			$this->session->set_flashdata("danger", "Houve um erro ao alterar a sua senha. Solicite um novo link.");
			redirect('login');
		}

    }

}