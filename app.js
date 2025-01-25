// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresIngresados = [];


//funcion para agregar nombre de amigo al array
function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value.trim();
    //verifica que el input este vacio, agrega nombre al array, limpia el input y actualiza la lista
    if (nombreDeAmigo.trim() === "") {
        alert("Por favor, inserte un nombre");
        return;
    }

    if (nombresIngresados.includes(nombreDeAmigo)) {
        alert("Este nombre ya esta en la lista");
        return;

    }   nombresIngresados.push(nombreDeAmigo);
        actualizarListaDeNombres();
        document.getElementById('amigo').value = "";
    } 
    
    console.log(nombresIngresados);

//funcion para actualizar la lista en la pagina y agregarlos al array
function actualizarListaDeNombres() {
    let listaDeNombres = document.getElementById('listaAmigos');
    listaDeNombres.innerHTML = "";
    //crea elementos li. agrega elementos al array
    for (let amigos = 0; amigos < nombresIngresados.length; amigos++) {
        let listaElementosPagina = document.createElement('li');
        listaElementosPagina.textContent = nombresIngresados[amigos];
        listaDeNombres.appendChild(listaElementosPagina);
    }

}

//funcion para seleccionar amigo de la lista
function sortearAmigo() {
    if (nombresIngresados.length === 0) {
        alert("No hay nombres que sortear");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombresIngresados.length);
    let amigoSorteado = nombresIngresados[indiceAleatorio];
    document.getElementById('resultado').innerHTML = `El amigo secreto es: ${amigoSorteado}`;
}