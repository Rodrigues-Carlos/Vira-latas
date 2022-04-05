var array_bichos = [['BOB.jpg', 'BOB', 'Bairro da banuina', false, 0], ['Bolha.jpg', 'Bolha', 'Bairro Rio verde',false, 1],
['Maia.jpg', 'Maia', 'Bairro Rio verde',false, 2], ['Mel.jpg', 'Mel', 'Bairro Rio verde',false, 3], ['Nestor.jpg', 'Nestor', 'Bairro Rio verde',false, 4],
['Sebastião.jpg', 'Sebastião', 'Bairro Rio verde',false, 5], ['Vilma.jpg', 'Vilma', 'Bairro da banuina',false, 6], ['Laila.jpg', 'Laila', 'Bairro da banuina',false, 7]];

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
