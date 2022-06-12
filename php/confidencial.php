<?php
    session_start();
    if( $_SESSION['data_criacao']> ($_SESSION['data_exp'])){
        echo json_encode("Session expired");
        header("Location: ../paginas/Telalogin.html");
        exit;
    
    }

    
?>
<!DOCTYPE html>
<html lang="pr-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/estilo-conf.css">

    <title>Vira-Latas</title>
    <script src="../js/js-confidencial.js"></script>

</head>

<body class="body">
    <div class="topo" id="barra-menu">
       
    </div>

    <div class="area-banner">
        <div class="area-img">
                <img class="imagem" src="../img/Banner viralatas.png">
        </div>
    </div>

    <div class="area-botoes">
        <button class="botao"> ADOTAR</button>
        <Button class="botao"> DOAR</Button>
    </div>

    <div class="titulo-bicho">
        <h2> Animais para adoção</h2>
    </div>

    <div class="area-bichos" id="bichos">    
    </div>

    <div class="area-contato">
        <li>Contatos</li>
        <br>
        <li>Email: Viralatas@gmail.com</li>
        <br>
        <li>Telefone/PIX: 4002 - 8922</li>
        <br>
        <li> R. de Asfalto, 1322 - Bairro da Banuina, Curitiba - PR </li>
    </div>

    

</body>

</html>
