function mudar(){

    var hash = CryptoJS.SHA256($("#senha").val());
    $("#senhaHash").val(hash);
    var dado = $("#form-email2").serialize();
    $.ajax({
        dataType: "JSON",
        type: "POST",
        url: "../php/mudasenha.php",
        data: dado, hash,
        success: function(retorno){
            if(retorno == "Invalid Password"){
                document.getElementById("teste").innerHTML = "<div id='teste' class='teste'>Senha incorreta.</div>";
            }else if(retorno == "Success"){
                document.getElementById("teste").innerHTML = "<div id='teste' class='teste'>Senha alterada.</div>";
            }else{
                document.getElementById("teste").innerHTML = "<div id='teste' class='teste'>div>";
            }
        }
    })
}