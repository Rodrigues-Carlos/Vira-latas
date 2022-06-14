<?php
    include "conexaoBD.php";
    include "acessar.php";

    $select_user = mysqli_query($conexao, "SELECT user_name FROM db_viralata.TB_Users WHERE user_email='$email'");
   
?>
