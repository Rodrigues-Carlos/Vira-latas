<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    require 'PHPMailer-master/src/Exception.php';
    require 'PHPMailer-master/src/PHPMailer.php';
    require 'PHPMailer-master/src/SMTP.php';

    $mail = new PHPMailer();
    $recebeEmail = $_POST['emailID'];
    // Configuração
    $mail->IsSMTP();
    $mail->Mailer = "smtp";
    $mail->IsSMTP(); 
	$mail->CharSet = 'UTF-8';   
	$mail->SMTPDebug = 0;
	$mail->SMTPAuth = true;     
	$mail->SMTPSecure = 'ssl'; 
    $mail->Host = 'smtp.gmail.com'; 
	$mail->Port = 465;

    // Detalhes do envio de E-mail
	$mail->Username = '<usuario-email-remetente>'; 
	$mail->Password = '<senha-email-remetente>';
	$mail->SetFrom('<email-remetente>', '<remetente>');
    $mail->addAddress('$recebeEmail','');
	$mail->Subject = "<titulo>";
	$mail->msgHTML("<mensagem>");

    $mail->send();

?>