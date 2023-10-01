let totalGeral = 0;
function adicionar() {
  let qtd = document.getElementById("quantidade").value;
  let produto = document.getElementById("produto").value;
  var valorTotal = document.getElementById("valor-total");
  console.log(typeof qtd);
  if (parseInt(qtd) === 0 || qtd === "") {
    alert("A quantidade não pode ser zero!");
    return;
  }

  let nomeProduto = produto.split("-")[0];
  let valorUnitario = produto.split("R$")[1];
  let subTotal = valorUnitario * qtd;

  let listaProduto = document.getElementById("lista-produtos");

  listaProduto.innerHTML =
    listaProduto.innerHTML +
    `<section class="carrinho_produtos_produto">
     <span class="texto-azul">${qtd}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
     </section>`;
  totalGeral += subTotal;
  valorTotal.textContent = `R$${totalGeral}`;
  document.getElementById("quantidade").value = 0;
}

function limpar() {
  if (totalGeral === 0) {
    alert("Não há nada no carrinho! Vamos começar a comprar?");
  }
  totalGeral = 0;
  let listaProduto = document.getElementById("lista-produtos");
  listaProduto.innerHTML = "";
  var valorTotal = document.getElementById("valor-total");
  valorTotal.innerHTML = `R$${totalGeral}`;
}
