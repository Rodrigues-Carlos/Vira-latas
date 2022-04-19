<?php

    session_start();

    $_SESSION['user'] = $_POST['emailID'];
    $_SESSION['password'] = $_POST['senhaID'];
    $_SESSION['session_id'] = session_id();
    $_SESSION['data_criacao'] = time();
    $_SESSION['data_exp'] = $_SESSION['data_criacao'] + 10;

    if(time() > $_SESSION['data_exp']) {
        echo "Tempo expirado";
        header("Location.index.html");
        setcookie(session_name(), "", 0, "/");
        session_destroy();
        
    }
    else{
        header("Location.index.html");
    }


?>