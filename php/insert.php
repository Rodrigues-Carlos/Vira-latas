<?php
    session_start();
    include "conexaoBD.php";
    include "cripto.php";

    $message = decrypt($_POST["message"]);
   

    $nome = $message["nome"];
    $email = $message["email"];
    $tel = $message["tel"];;
    $senha = $message["senhaHash"];;
    $cpf = $message["cpf"];;

    mysqli_query($conexao,"INSERT INTO DB_ViraLata.TB_Users(user_name, user_email, user_phone, user_password, user_cpf)
    VALUES ('$nome', '$email', '$tel', '$senha', '$cpf')");
    echo json_encode("Success");
?>
