<?php
session_start();
include "corpo-email2.php";
include "pegaemail.php";

$_SESSION['email'] = $email;
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';
$mail = new PHPMailer(true);
try{
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
 $mail->Username = 'viralatasite'; 
 $mail->Password = 'ensxkcxbuqqygcfb';
 $mail->SetFrom('viralatasite@gmail.com', 'Vira latas');
 $mail->addAddress($email,'');
 $mail->Subject = "Recuperar senha ";
 $mail->msgHTML($body);
 
 $mail->send();
}catch (Exception $e) {

 # Caso ocorra algum problema o script cairá aqui
 echo "O e-mail não pode ser enviado: {$mail->ErrorInfo}";
}





?>