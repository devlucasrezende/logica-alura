function comprar() {
  let tipo = document.getElementById("tipo-ingresso");
  let qtdSelecionada = parseInt(document.getElementById("qtd").value);

  //console.log(tipo);

  //console.log(`tipo ${tipo} - qtd ${qtdSelecionada}`);

  if (parseInt(qtdSelecionada) === 0 || qtdSelecionada === "") {
    alert("A quantidade selecionada não pode ser zero");
  }

  let qtdPista;
  let qtdSuperior;
  let qtdInferior;
  const lists = document.querySelectorAll("ul li");
  for (let i = 0; i <= lists.length - 1; i++) {
    qtdPista = document.getElementById("qtd-pista").innerHTML;
    qtdSuperior = document.getElementById("qtd-superior").innerHTML;
    qtdInferior = document.getElementById("qtd-inferior").innerHTML;
  }

  if (tipo.value === "inferior") {
    comprarInferior(qtdSelecionada);
  } else if (tipo.value === "superior") {
    comprarSuperior(qtdSelecionada);
  } else if (tipo.value === "pista") {
    comprarPista(qtdSelecionada);
  }

  function comprarPista(qtd) {
    if (qtd > qtdPista) {
      alert("Quantidade não disponível");
    } else {
      alert(
        `A compra de ${qtd} ingresso(s) para o tipo ${tipo.value} foi efetuada com sucesso!`
      );
      document.getElementById("qtd-pista").textContent = `${qtdPista - qtd}`;
    }
  }

  function comprarSuperior(qtd) {
    if (qtd > qtdSuperior) {
      alert("Quantidade não disponível");
    } else {
      alert(
        `A compra de ${qtd} ingresso(s) para o tipo ${tipo.value} foi efetuada com sucesso!`
      );
      document.getElementById("qtd-superior").textContent = `${
        qtdSuperior - qtd
      }`;
    }
  }

  function comprarInferior(qtd) {
    if (qtd > qtdInferior) {
      alert("Quantidade não disponível");
    } else {
      alert(
        `A compra de ${qtd} ingresso(s) para o tipo ${tipo.value} foi efetuada com sucesso!`
      );
      document.getElementById("qtd-inferior").textContent = `${
        qtdInferior - qtd
      }`;
    }
  }
}
