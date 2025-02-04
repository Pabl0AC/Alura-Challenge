let amigos = [];  // Array para los nombres

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim(); 
    if (nombreAmigo === "") {
        alert("Inserte nombre válido");
        return;
    }

    amigos.push(nombreAmigo);  // Añadir nombre al array

    actualizarLista();

    inputAmigo.value = "";  // Borrar campo de entrada
    inputAmigo.focus();  // Colocar cursor en el campo de entrada
}

function actualizarLista() {
    const listaAmigosUl = document.getElementById("listaAmigos");
    listaAmigosUl.innerHTML = "";

    amigos.forEach(amigo => {  // Llenar lista de amigos en HTML
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigosUl.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega amigos para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultadoUl = document.getElementById("resultado");
    resultadoUl.innerHTML = `<li>${amigoSorteado}</li>`;
}

document.addEventListener("DOMContentLoaded", () => {  
    document.getElementById("btnAgregar").addEventListener("click", agregarAmigo);    //  se ejecuta la función agregarAmigo    
    document.getElementById("btnSorteo").addEventListener("click", sortearAmigo);      // se ejecuta la función sortearAmigo 
});
