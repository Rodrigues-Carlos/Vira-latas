

var array_bichos = [['../../img/BOB.jpg', 'BOB', 'Bairro da banuina', false, 0], ['../../img/Bolha.jpg', 'Bolha', 'Bairro Rio verde',false, 1],
['../../img/Maia.jpg', 'Maia', 'Bairro Rio verde',false, 2], ['../../img/Mel.jpg', 'Mel', 'Bairro Rio verde',false, 3], ['../../img/Nestor.jpg', 'Nestor', 'Bairro Rio verde',false, 4],
['../../img/Sebastião.jpg', 'Sebastião', 'Bairro Rio verde',false, 5], ['../../img/Vilma.jpg', 'Vilma', 'Bairro da banuina',false, 6], ['../../img/Laila.jpg', 'Laila', 'Bairro da banuina',false, 7]];

var carrinho = [];

window.onload = function(){
    montaCards();
    user();
}

function user (){
    document.getElementById("barra-menu").innerHTML += "";
    
        var barra = "";

        barra += '<img src="../img/Vira-Latas logo.png" class="Logo">';
        barra += '<div class="topo" id="barra">';
        barra += '<div class="menu" id="menu-h">';
        barra += '<li><a href="">Quero adotar</a></li>';
        barra += '<li><a href="">Doação</a></li>';
        barra += '<li><a href="../paginas/Sobre.html">Sobre</a></li>';
        barra += '<li><a href="">Contato</a></li>';
        barra += '<li id="user"><a href="../Index.html">Sair</a></li>';
        barra += '</div>';
        barra += '</div>';
        




        document.getElementById("barra-menu").innerHTML += barra;


    
    
}

function montaCards(){

    document.getElementById("bichos").innerHTML = "";

    for(var i=0; i< array_bichos.length; i++)
    {
        var conteudo = "";

        conteudo += '<div class="card-bicho">';
        conteudo += '<div class="card-img">';
        conteudo += '<img class="imagem"  src="img/' + array_bichos[i][0] + '" />';
        conteudo += '</div>';
        conteudo += '<div class="card-nome">' + array_bichos[i][1] + '</div>';
        conteudo += '<div class="card-endereco">' + array_bichos[i][2] + '</div>';
        if(array_bichos[i][3] == false){
            conteudo += '<div class="adocao" onclick="inscrever(' + array_bichos[i][4] + ')"> SOLICITAR </div>';
        }else{
            conteudo += '<div class="adocao2"> INSCRITO </div>';
        }
        
        conteudo += '</div>';
        
    




        document.getElementById("bichos").innerHTML += conteudo;


    }
    
}

function inscrever(id){

    array_bichos[id][3] = true;

    carrinho.push(array_bichos[id]);

    window.localStorage.setItem("Lista", JSON.stringify(carrinho));

    montaCards();
    
}
