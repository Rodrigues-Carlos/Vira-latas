<?php
session_start();
include "conexaoBD.php";


$email = $_POST["email"];
$senha = $_POST["senhaHash"];
$sql_code = mysqli_query($conexao, "SELECT * FROM DB_ViraLata.TB_Users WHERE user_email='$email' AND user_password='$senha'");



if(mysqli_num_rows($sql_code)<=0){
  echo json_encode("Login Ou senha incorreto");
 
}
else{
  $_SESSION['email'] = $email;
  $_SESSION['session_id'] = session_id();
  $_SESSION['session_name'] = session_name();
  $_SESSION['data_criacao'] = time();
  $_SESSION['data_exp'] = $_SESSION['data_criacao'] + 3600;
  
  echo json_encode("Success");
  

  
  
}

  

   

?>