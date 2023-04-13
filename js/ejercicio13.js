function muestraOculta(id) {
    var elemento = document.getElementById('contenidos_'+id);
    var enlace = document.getElementById('B_'+id);

    if(elemento.style.display == "" || elemento.style.display == "block") {
             elemento.style.display = "none";
    
    // enlace.innerHTML = 'Mostrar contenidos';
     enlace.value = 'Mostrar contenido';
    }
    else {
      elemento.style.display = "block";
      enlace.value = 'Ocultar contenidos';
    }
}