<?php
   include "geracod.php";

   $recebeCod = $_POST["codigo"];

   if($recebeCod == $token){
       echo json_encode("Success");
   } else{
       echo json_encode("Codigo invalido");
   }

?>