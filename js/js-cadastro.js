/*function validando(){
    let value = document.getElementById("emailID").value;
    let valueCPF = document.getElementById("CPF").value;
    let valueTel = document.getElementById("telID").value;
    let valueSENHA = document.getElementById("senhaID").value;

    let regexEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let regexCPF = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/g;
    let regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let regexTel = /^\(?[1-9]{2}\)? ?(?:[2-8]|?9[1-9])[0-9]{3}\-?[0-9]{4}$/;

    
    if (!regexEmail.test(value)) {
      // campo inválido, retorna false para o formulário não ser submetido
      alert('Email Inválido');
      return false;
    }
    else if(!regexCPF.test(valueCPF)) {
        alert('CPF Invalido');
        return false;
    }
    else if(!regexSenha.test(valueSENHA)) {
        alert("Insira uma senha com letras maiúsculas e minúsculas, números e carácter especial.");
        return false;
    }
    else if(!regexTel.test(valueTel)) {
        alert("TELEFONE Invalido");
        return false;
    }
    return true;



  

}*/

    



function register() {
  var hash = CryptoJS.SHA256($("#senha").val());
  $("#senhaHash").val(hash);
  const dados = {
    nome: $('#nome').val(),
    cpf: $('#cpf').val(),
    tel: $('#tel').val(),
    email: $('#email').val(),
    senhaHash: $('#senhaHash').val()
  };
  
  const encryptedData = encrypt(JSON.stringify(dados))
    $.ajax({
      dataType: "JSON",
      type: "POST",
      url: "../php/insert.php",
      data:{
        message: encryptedData,
      },
      success: function(retorno) {
        if(retorno == "Success"){
          window.location.href = "../paginas/Confirmacao.html";
        }else{
          window.location.href = "../paginas/Confirmacao.html";
        }
          

      }

    });
    
  }
