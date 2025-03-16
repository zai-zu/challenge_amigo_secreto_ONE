let limiteAmigosSorteados = 1;
let listaAmigos = [];
let limiteAmigos = 15;


// Función para agregar un amigo
function agregarAmigo ()  {
    // Obtener el valor del input
    let inputAmigo = document.getElementById('amigo').value;

    // Validar que el nombre no esté vacío
    if (inputAmigo.trim() === '') {
        alert('Debes introducir un nombre');
        return;
    }

    // Verificar si el amigo ya existe en la lista
    for (let amigoExistente of listaAmigos) {
        if (amigoExistente === inputAmigo) {
            alert("Este amigo ya ha sido añadido");
            return;
        }
    }   
    
    // Agregar el nombre al array
    listaAmigos.push(inputAmigo);

    // Limpiar el input
    document.getElementById('amigo').value = '';

    // Actualizar la lista en el HTML
    actualizarListadeAmigos();
}

// Función para actualizar la lista en el HTML
function actualizarListadeAmigos() {
    let listaAmigosHTML = document.getElementById('listaAmigos');
    let contenido = "";

    for (let amigo of listaAmigos) {
        contenido += `<li>${amigo}</li>`;
    }
    listaAmigosHTML.innerHTML = contenido;
}

actualizarListadeAmigos();

//Función para sortear amigo en lista
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    document.getElementById("listaAmigos").innerHTML = "";

    let mostrarAmigoSorteado = document.getElementById("resultado");
    mostrarAmigoSorteado.innerHTML = amigoSorteado;

}