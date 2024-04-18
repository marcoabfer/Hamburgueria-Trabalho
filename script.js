
let show = true; //Criar uma variável e definir como verdadeira
const menuContent = document.querySelector('.content'); //Está variável é para se referir a nossa classe content do HTML
const menuToggle = menuContent.querySelector('.menu-toggle'); //Está variável é para se referir a nossa classe menu-toggle do HTML

menuToggle.addEventListener('click', () => { //Dizermos que a ação ocorrerá quando o usuário cliclar no menu-toggle, ou seja, quando clicar nos três risquinhos abre o menu, aparecendo os itens, estamos fazendo isso através da arrow function

    menuContent.classList.toggle('on', show); //Adicionar uma classe ao menuContent, chamada on, e colocamos um boolean true, dizendo que isso vai acontecer
    show = !show; //passar a variável show como false, para que quando o usuário clique novamente feche o menu
})

function salvar() { // Esta linha define uma função chamada salvar. Esta função será chamada quando o botão "Adicionar" for clicado.

    //Obtendo os valores dos campos de entrada com os IDs "Lanche" e "nome" e armazenando-os nas variáveis lanche e nome, respectivamente.
    var lanche = document.getElementById("Lanche").value;
    var nome = document.getElementById("nome").value;

    // Verificando se os campos não estão vazios, caso estejam vazios aparecerá um alerta informando que não foi preenchido
    if (lanche === "" || nome === "") {
        window.alert("Por favor, preencha todos os campos.");
        return;
    }

    // Estamos obtendo a referência à tabela pelo ID "table-body" e inserindo uma nova linha nessa tabela.
    var table = document.getElementById("table-body");
    var newRow = table.insertRow();

    // Adicionando células à nova linha
    var celula1 = newRow.insertCell(0);
    var celula2 = newRow.insertCell(1);

    //Aqui, estamos preenchendo as células com os valores dos campos de entrada lanche e nome. Além disso, estamos adicionando um botão "Remover" à terceira célula, que, quando clicado, chamará a função removerLinha para remover a linha desejada
    celula1.innerHTML = lanche;
    celula2.innerHTML = nome;

    // Limpar campos de entrada após adicionar à tabela, para podermos adicionar novos itens
    document.getElementById("Lanche").value = "";
    document.getElementById("nome").value = "";
}

