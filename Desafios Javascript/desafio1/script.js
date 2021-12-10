window.onload=function(){
    let frutas=[
        {descricao:'Morango', preco:3.85},
        {descricao:'Abacaxi', preco:5.25},
        {descricao:'Banana', preco:3.75},
        {descricao:'Maçã', preco:2.75},
        {descricao:'Amora', preco:1.50},
    ];

    const listaProdutos = document.querySelector('#produtos');

    (
        ()=>{
            for(let pro of frutas){
                const filhoLi=document.createElement('li');
                for(let listaP in pro){
                  if(listaP == 'preco'){
                  listaProdutos.appendChild(filhoLi).setAttribute('data-preco', 
                  pro[listaP]);
                } else {
                listaProdutos.appendChild(filhoLi).textContent=`${pro[listaP]}`;
                }
                            
            }
        } 
        }
    )();

    let carrinho=[];
    const cestaDoCliente = document.querySelector('#cestaDoCliente');
    const totalCompra = document.querySelector('#mostraTotalCompra');
    let selecionarItem = document.querySelectorAll('#produtos>li');
    let total = 0;

    selecionarItem.forEach(function(item){
        item.addEventListener('click', function(){
            if(carrinho.indexOf(item.textContent)!=-1){
                alert('Este item já tem na sua cesta');
            } else {
                total += Number(item.dataset.preco);
                carrinho.push(item.textContent);
                
                let itemCesta = document.createElement('li');
                cestaDoCliente.appendChild(itemCesta).textContent=item.textContent;
                totalCompra.value = total.toLocaleString('pt-BR', 
                {style: 'currency', currency:'BRL'});
            }
            console.log(item.textContent);
        })
    })
}