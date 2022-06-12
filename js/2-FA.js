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
  
  var dados = $("#recebe-cod").serialize();
  document.getElementById("legenda").innerHTML = "";
  $.ajax({
    dataType: "json",
    type: "POST",
    url: "../php/confirma-codigo.php",
    data: dados,
    success: function (retorno){
      if(retorno == "Success"){
        location.href = "../php/confidencial.php";
      }else{
        document.getElementById("legenda").innerHTML = "<div id='legenda'> CODIGO INVALIDO </div>"
      }
    }
  });
  
}