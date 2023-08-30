import { produtosApi } from "./ProdutosApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
    evento.preventDefault();
    const url = document.querySelector("[data-url]").value;
    const nome = document.querySelector("[data-nome]").value;
    const price = document.querySelector("[data-price]").value;
    const id = document.querySelector("[data-id]").value;
    const alt = document.querySelector("[data-alt]").value;
    const descricao = document.querySelector("[data-descricao]").value;
    const section = document.querySelector("[data-section]").value;
    try {
        await produtosApi.criaProduto(nome, url, price, id, alt, descricao, section);
        alert("Produto cadastrado com sucesso");
    } catch (e) {
        alert(e)
    }
}

formulario.addEventListener("submit", evento => criarProduto(evento));