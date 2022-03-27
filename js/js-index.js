var array_bichos = [['BOB.jpg', 'BOB', 'R. tonno - 430', false, 0], ['Bolha.jpg', 'Bolha', 'Rua padre durval',false, 1],
['Maia.jpg', 'Maia', 'Rua das dores',false, 2], ['Mel.jpg', 'Mel', 'Rua imaculado',false, 3], ['Nestor.jpg', 'Nestor', 'Bairro das cove',false, 4],
['Sebastiao.jpeg', 'Sebastião', 'Bairro Rio verde',false, 5], ['Vilma.jpg', 'Vilma', 'bairro do cu',false, 6], ['Laila.jpg', 'Laia', 'Rua dolores',false, 7]];

var carrinho = [];

window.onload = function(){
    montaCards();
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
        conteudo += '</div>';
        




        document.getElementById("bichos").innerHTML += conteudo;


    }
}
