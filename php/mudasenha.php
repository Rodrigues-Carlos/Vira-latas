<?php
    session_start();
    include "conexaoBD.php";
    include "pegaemail.php";
    require "pegaemail.php";
    
    $senha1 = $_POST["senha"];
    $senha2 = $_POST["senhaID"];
    $senha3 = $_POST["senhaHash"];
    $pegaemail = $usuario;
    if($senha1 == $senha2){
        
        $sql_code = mysqli_query($conexao, "UPDATE db_viralata.TB_Users SET user_password='$senha3' WHERE user_email='$usuario'");
         $sqlerro= mysqli_error($conexao);
        echo json_encode("Success");
        echo ($sqlerro);
     
        
    }else{
        echo json_encode("Invalid Password");
        echo($email);
    }


?>