<?php 
    $config['protocol'] = 'smtp'; // Pode ser 'mail', 'sendmail', ou 'smtp'
    $config['smtp_host'] = 'smtp.titan.email'; // Servidor SMTP
    $config['smtp_user'] = 'noreply@neuromnese.com'; // E-mail
    $config['smtp_pass'] = 'Mnese@12310'; // Senha
    $config['smtp_port'] = 465; // Porta SMTP (normalmente 587 para TLS ou 465 para SSL)
    $config['smtp_crypto'] = 'ssl'; // Pode ser 'tls' ou 'ssl'
    $config['mailtype'] = 'html'; // Formato do e-mail: 'text' ou 'html'
    $config['charset'] = 'utf-8'; // Charset padrão
    $config['wordwrap'] = TRUE; // Quebra automática de linha
    $config['newline'] = "\r\n"; // Para SMTP geralmente "\r\n"
?>
