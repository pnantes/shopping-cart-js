//função para criar o card produto
    //produto
        //nome 
        //preço
//criar os elementos (tags)
    //li etc
//adicionar as informações dentro dos elementos
    //nome - foto etc
//montar o card
//retornar a soma e o botão

const productsCart = [
    {
        id: 1,
        name: "Uva Crimson",
        price: 44.99
    },
    {
        id: 2,
        name: "Vinho Canção",
        price: 17.98
    },
    {
        id: 3,
        name: "Água de coco",
        price: 8.99
    },
    {
        id: 4,
        name: "Mamão",
        price: 9.98
    },
    {
        id: 5,
        name: "Água tônica",
        price: 17.98
    }
]

function somaProducts(arrProdutos){
    let total = 0.0
    
    for(let i = 0; i < arrProdutos.length; i++){
        total += arrProdutos[i].price
    }
    return total
}


function carrinhoCompras(){
    const total = somaProducts(productsCart);

    //CRIAR ELEMENTOS HTML
    const tagMain       = document.createElement("main");
    const tagUl         = document.createElement("ul");
    const tagSection    = document.createElement("section");
    const tagButton     = document.createElement("button");

    const tagLi         = document.createElement("li");
    const tagItem       = document.createElement("p");
    const tagValor      = document.createElement("p");
    const tagTotal       = document.createElement("p");
    const tagPreco      = document.createElement("p");

    tagItem.innerText   = `Item`
    tagValor.innerText   = `Valor`

    tagTotal.innerHTML   = `Total`
    tagPreco.innerHTML   = `R$ ${total}`
    tagButton.innerText = `Finalizar compra`


    for(let i = 0; i < productsCart.length; i++){

    //INFORMAÇÕES DO PRODUTO
    const nome  = productsCart[i].name
    const preco = productsCart[i].price

    const tagLi         = document.createElement("li");
    const tagNome       = document.createElement("p");
    const tagPreco      = document.createElement("p");
    tagLi.appendChild(tagNome)
    tagLi.appendChild(tagPreco)
    tagUl.appendChild(tagLi)
    
    //ADICIONAR INFORMAÇÕES NAS TAGS CRIADAS
    tagNome.innerHTML   = `<strong>${nome}</strong>`
    tagPreco.innerHTML   = `R$ ${preco}`

    }

    //MONTAR TEMPLATE CARRINHO
    tagLi.appendChild(tagItem)
    tagLi.appendChild(tagValor)

    tagLi.appendChild(tagTotal)
    tagLi.appendChild(tagPreco)
    tagUl.appendChild(tagLi)

    tagSection.appendChild(tagButton)
    
    tagMain.appendChild(tagUl)
    tagMain.appendChild(tagSection)
    
    const body = document.querySelector('body');
    body.appendChild(tagMain)  

}
carrinhoCompras()



