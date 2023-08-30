import { produtosApi } from "./ProdutosApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(nome, url, price, id, alt) {
    const produto = document.createElement("li");
    produto.className = "produtos__card";
    produto.innerHTML = `<img src="${url}" alt=${alt}" class="card__imagem">
    <h3 class="card__titulo">${nome}</h3>
    <p class="card__valor">R$ ${price}</p>
    <p class="card__id" class="card__id">${id}</p>
    <a href="#"><span class="card__verProduto">Ver Produto</span></a>`

    return produto;
}
async function criaSection(){
    const listaApi = await produtosApi.listaProdutos();
    const listaSection = listaApi.produto;

    console.log(listaSection)
}

criaSection();

async function listaProduto() {
    try {
        const listaApi = await produtosApi.listaProdutos();
        listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.nome, elemento.url, elemento.price, elemento.id, elemento.alt, elemento.descricao, elemento.section)))
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo"> Não foi possívem carregar os produtos, contate o desenvolvedor</h2>`
    }
}



listaProduto()