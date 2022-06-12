<?php
   
    session_start();
    $cod = $_POST["codigo"];
    if($cod == $_SESSION['code']){
        echo json_encode("Success");
        
    }else if($cod != $_SESSION['code'] || $cod == "" ){
        echo json_encode("Code invalid");
    }
  


   

    

?>