let amigos = [];
let listaSorteio;
let listaAmigos;
let nomeAmigo;
let eachAmigo;
function adicionar() {
  listaAmigos = document.getElementById("lista-amigos");
  nomeAmigo = document.getElementById("nome-amigo");
  if (nomeAmigo.value === "") {
    alert("Insira o nome do amigo!");
    return;
  }

  if (amigos.includes(nomeAmigo.value)) {
    alert("Nome já adicionado");
    return;
  }
  listaAmigos.textContent += `${nomeAmigo.value}, `;
  amigos.push(nomeAmigo.value);
  if (listaAmigos.textContent !== "") {
    eachAmigo = listaAmigos.textContent.split(",").toString();
  }
  nomeAmigo.value = "";
}

function reiniciar() {
  listaAmigos.textContent = "";
  listaSorteio.textContent = "";
}

function sortear() {
  if (amigos.length == 0) {
    alert("Primeiro insira o nome dos amigos!");
  } else if (amigos.length == 2) {
    alert("Insira pelo menos 3 pessoas");
    return;
  }
  embaralha(amigos);
  listaSorteio = document.getElementById("lista-sorteio");
  for (let i = 0; i < amigos.length; i++) {
    if (i == amigos.length - 1) {
      listaSorteio.innerHTML += `${amigos[i]} -> ${amigos[0]} <br>`;
    } else {
      listaSorteio.innerHTML += `${amigos[i]} -> ${amigos[i + 1]} <br>`;
    }
  }
  amigos = [];
}

function embaralha(lista) {
  for (let indice = lista.length; indice; indice--) {
    const indiceAleatorio = Math.floor(Math.random() * indice);

    [lista[indice - 1], lista[indiceAleatorio]] = [
      lista[indiceAleatorio],
      lista[indice - 1],
    ];
  }
}
