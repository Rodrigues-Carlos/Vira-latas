<?php
$email = $_POST['email'];
session_start();
$_SESSION['session_id'] = session_id();
$_SESSION['session_name'] = session_name();
$_SESSION['data_criacao'] = time();
$_SESSION['data_exp'] = $_SESSION['data_criacao'] + 3600;

$_SESSION['email'] = $email;
$pegaemail = $_SESSION['email'];
?>