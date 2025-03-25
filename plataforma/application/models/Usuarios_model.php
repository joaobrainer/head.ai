<?php
defined('BASEPATH') or exit('No direct script access allowed');


class Usuarios_model extends CI_Model {

	function __construct() {
		parent::__construct();
	}

	public function realizaLogin($email) { 

		$this->db->select('*');
		$this->db->where('email', $email);
		$this->db->where('status', 1);
		$query = $this->db->get('usuarios')->row();

		return $query;
	}

	public function cadastraUsuario($dados) { 

		$this->db->select('*');
		$this->db->where('email', $dados['email']);
		$query = $this->db->get('usuarios')->row();

		if ($query) {
			$this->db->set('senha', $dados['senha']);
			$this->db->where('email', $dados['email']);
			$this->db->update('usuarios');

			return $query->idusuarios;
		}else{
			$this->db->insert('usuarios', $dados);	

			return $this->db->insert_id();
		}		
	}

	public function verificaLogin($dados) { 

		$this->db->select('*');
		$this->db->where('email', $dados['email']);
		$this->db->where('senha', md5($dados['senha']));
		$this->db->where('status', 1);
		$query = $this->db->get('usuarios')->row();

		return $query;
	}

	public function verificaExisteEmail($email) {

		$this->db->select('email');
		$this->db->where("email", $email);
		$existe = $this->db->get("usuarios")->row();

		if ($existe) {

			$bignum = rand(999999999, 9999999999999);

			$hash = $email . $bignum;

			$bignum2 = hexdec(substr(sha1($hash), 0, 15));

			$this->db->set('hash_esqueciasenha', $bignum2);
			$this->db->where('email', $email);
			$this->db->update("usuarios");

			$query = array (
				'hash_esqueciasenha' => $bignum2,
			);

			return $query;
		}

		return null;
	}

	public function alterarSenhaRecuperada($senha, $hashrecupera) {

		$this->db->select('email');
		$this->db->where("hash_esqueciasenha", $hashrecupera);
		$existe = $this->db->get("usuarios")->row_array();

		if ($existe) {
			$this->db->set('hash_esqueciasenha', null);
			$this->db->set('senha', $senha);
			$this->db->where('email', $existe['email']);
			$this->db->update("usuarios");

			return true;
		} else {

			return false;
		}
	}

}
