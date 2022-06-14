/*function validando(){
    let valueSENHA = document.getElementById("senhaID").value;

    let regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

   if(!regexSenha.test(valueSENHA)) {
        alert("SENHA Invalida");
        return false;
    }
    
    return true;
}
*/

function recuperar(){
    var dado = $("#form-email").serialize();

    $.ajax({
        type: "POST",
        url: "../php/pegaemail.php",
        data: dado,
        async: false,
        success: function(retorno){
            location.href = "../paginas/Confirmacao.html";
        }
        });

        $.ajax({
            type: "POST",
            url: "../php/recupsenha.php",
            async: false,
            data: dado,
            });

}