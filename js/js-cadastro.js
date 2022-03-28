function validando(){
    let value = document.getElementById("emailID").value;
    let valueCPF = document.getElementById("CPF").value;
    let valueTel = document.getElementById("telID").value;
    let valueSENHA = document.getElementById("senhaID").value;

    let regexEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let regexCPF = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/g;
    let regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let regexTel = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/

    
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
        alert("SENHA Invalida");
        return false;
    }
    else if(!regexTel.test(valueTel)) {
        alert("TELEFONE Invalido");
        return false;
    }
    return true;


}