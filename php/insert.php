<?php
    include "database.php";

    $name = $_POST["nome"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $password = $_POST["passwordHash"];
    $cpf = $_POST["cpf"];

    $data = $conn -> query("INSERT INTO DB_ViraLata.TB_Users
        (user_name, user_email, user_phone, , user_password, user_cpf)
        VALUES ('$name', '$email', '$phone', '$password', '$cpf')");

    if ($data) {
        echo json_encode("Data successfuly");
    } else {
        echo json_encode("Data not inserted");
    }
?>
