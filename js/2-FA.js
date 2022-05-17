function validando(){
    let value = document.getElementById("codigo").value;

    let regexEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    
    if (!regexEmail.test(value)) {
      // campo inválido, retorna false para o formulário não ser submetido
      alert('Código incorreto');
      return false;
    }

    return true;
}