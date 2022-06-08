<?php

include 'geracod.php';
require 'geracod.php';
    $codigo = $_POST["codigo"];

    if($codigo == $token ){
        header('Location:../paginas/Sobre.html');
    }
    else{
        echo("Codigo invalido");
    }

?>