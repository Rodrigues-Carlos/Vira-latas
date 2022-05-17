function acessar() {
  var dados = $("#form").serialize();

  $.ajax({
    type: "POST",
    data: dados,
    url: "../php/acessar.php",
    success: function(retorno){
      window.location.href = "../paginas/Enviar token.html";
    },
    error: function(){
      alert("Ocorreu um erro");
    }
  });
  
}
