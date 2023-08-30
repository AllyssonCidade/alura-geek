//  GET  //
async function listaProdutos (){
    const conexao = await fetch ('http://localhost:3000/produto');
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

//  POST  //
async function criaProduto(nome, url, price, id, alt, descricao, section){
    const conexao = await fetch ('http://localhost:3000/produto', {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            url: url,
            price: price,
            id: id,
            alt: alt,
            descricao: descricao,
            section: section
        })
    });
    if (!conexao.ok){
        throw new Error("Não foi possível cadastrar o Item");
    }

     const conexaoConvertida = await conexao.json();
     return conexaoConvertida;
}


async function buscaProduto(termoBusca){
    const conexao = await fetch(`http://localhost:3000/produto?q=${termoBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}


//DELETE
async function deletaProduto(nome, url, price, id, alt, descricao, section){
    const conexao = await fetch (`http://localhost:3000/produto/${id}?${nome}`,{
        method: "DELETE",
})

     const conexaoConvertida = await conexao.json();
     return conexaoConvertida;
}

export const produtosApi= {
    listaProdutos,
    criaProduto,
    buscaProduto,
    deletaProduto
}