const listaSelecaoPok = document.querySelectorAll('.pokemon');
const cardPok = document.querySelectorAll('.cartao-pokemon');
listaSelecaoPok.forEach(pokemon => {
    // Trabalhar com evento click na listagem fr pokémons
    pokemon.addEventListener('click', () => {
        //Remove a classe aberto da div cartao-pokemon 
        const cartaoPokAberto = document.querySelector('.aberto');
        cartaoPokAberto.classList.remove('aberto');

        //Ao clicar no pokemon da listagem pega o id dele para saber qual cartao mostrar
        const idPokSelecionado = pokemon.attributes.id.value; //pegar o valor do id do pokemon clicado

        const idCartaoPokParaAbrir = 'cartao-' + idPokSelecionado;
        const cartaoPokParaAbrir = document.getElementById(idCartaoPokParaAbrir);
        cartaoPokParaAbrir.classList.add('aberto');

        //Remove a class ativo na li da listagem
        const cartaoPokAtivo = document.querySelector('.ativo');
        cartaoPokAtivo.classList.remove('ativo');

        //Add a class ativo na li da listagem
        const idPokSelecionadoLista = document.getElementById(idPokSelecionado);
        idPokSelecionadoLista.classList.add('ativo');    
    })
})