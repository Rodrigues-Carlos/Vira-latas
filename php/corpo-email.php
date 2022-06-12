<?php
 include "geracod.php";
 include "conexaoBD.php";
 include "select.php";


    
 $body = '
 <tr>
   <p>
     <font size="5" face="Arial">
     Olá, usúario!! 
   </p>
 </tr>
 <tr>
 <h2>
   <p>
     <font size="5" face="Arial" font color=\"#000000\">
     Seu código de verificação é:
   </p>
   </h2>
   <p>
    <h2>
     <font size="5" face="Arial" font color=\"#44f005\">
     [NUMBERS]
     </h2>
   </p>
   </tr>
   <tr>
   <p>
     <font size="3" face="Arial">
     Agradecemos,
    </tr>
    <tr>
    </p>
    Equipe de Suporte Vira-Latas site.
   </p>
 </tr>
   ';
    
   $body = str_replace( '[NUMBERS]', $token, $body);
    
 

    

?>
