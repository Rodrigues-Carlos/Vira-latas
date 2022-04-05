function validando(){
    let value = document.getElementById("emailID").value;
    let valueSENHA = document.getElementById("senhaID").value;

    let regexEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (!regexEmail.test(value)) {
      // campo inválido, retorna false para o formulário não ser submetido
      alert('Email Inválido');
      return false;
    }

    else if(!regexSenha.test(valueSENHA)) {
        alert("SENHA Invalida");
        return false;
    }

    return true;

}
