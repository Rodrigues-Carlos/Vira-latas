<?php

    $nome = $_POST["nome"];
    $email = $_POST["email"];
    $tel = $_POST["tel"];;
    $senha = $_POST["senhaHash"];;
    $cpf = $_POST["cpf"];;

    $conexao = mysqli_connect("localhost","root","na@@2013","DB_ViraLata");


    mysqli_query($conexao,"INSERT INTO DB_ViraLata.TB_Users(user_name, user_email, user_phone, user_password, user_cpf)
    VALUES ('$nome', '$email', '$tel', '$senha', '$cpf')");
?>