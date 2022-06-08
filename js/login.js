function acessar() {
  var hash = CryptoJS.SHA256($("#senha").val());
  $("#senhaHash").val(hash);
  var dados = $("#form").serialize();
  document.getElementById("teste").innerHTML = "";

  $.ajax({
    dataType: "json",
    type: "POST",
    url: "../php/acessar.php",
    data: dados, hash,
    async: true,
    success: function (retorno){
      if(retorno == "Success"){
        location.href = "../paginas/2-FA.html";

      }else{
        document.getElementById("teste").innerHTML = "<div id='teste' class='teste'>Incorrect email or password.</div>";
      }
    }
  });

  $.ajax({
    type: "POST",
    url: "../php/envia-email.php",
    data: dados, hash,
    async: true
    });



 



  
  
}
