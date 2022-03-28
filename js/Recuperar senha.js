function validando(){
    let valueSENHA = document.getElementById("senhaID").value;

    let regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

   if(!regexSenha.test(valueSENHA)) {
        alert("SENHA Invalida");
        return false;
    }
    
    return true;

}