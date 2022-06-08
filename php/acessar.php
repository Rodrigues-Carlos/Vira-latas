<?php
include "conexaoBD.php";


$email = $_POST["email"];
$senha = $_POST["senhaHash"];
$sql_code = mysqli_query($conexao, "SELECT * FROM DB_ViraLata.TB_Users WHERE user_email='$email' AND user_password='$senha'");



if(mysqli_num_rows($sql_code)<=0){
  echo json_encode("Login Ou senha incorreto");

}
else{
  echo json_encode("Success");
}

  

   

?>