/*function validando(){
    let value = document.getElementById("codigo").value;

    let regexEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    
    if (!regexEmail.test(value)) {
      // campo inválido, retorna false para o formulário não ser submetido
      alert('Código incorreto');
      return false;
    }

    return true;
}*/

function confirm() {
  document.getElementById("legenda").innerHTML = "";
  var dados = $("#recebe-cod").serialize();

  $.ajax({
    dataType: "json",
    type: "POST",
    url: "../php/confirma-codigo.php",
    data: dados,
    success: function(retorno){
      if(retorno == "Success"){
        location.href = "../paginas/Doacoes.html";
      } else if(retorno == "Codigo invalido"){
        document.getElementById("legenda").innerHTML = "<div class = 'legenda'> CODIGO INVALIDO</div>";
      }
    }
  });
  
}