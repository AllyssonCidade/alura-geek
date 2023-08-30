import { produtosApi } from "./ProdutosApi.js";
import constroiCard from "./mostrarProdutos.js";

async function buscarProduto(evento) {
    evento.preventDefault();
    const dadosDaPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await produtosApi.buscaProduto(dadosDaPesquisa);
    const lista = document.querySelector("[data-lista]");

    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.nome,elemento.url,elemento.price,elemento.id,elemento.alt,elemento.descricao, elemento.section)));
}
const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");
botaoDePesquisa.addEventListener("click", evento => buscarProduto(evento));