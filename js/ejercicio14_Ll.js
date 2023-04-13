function modifica(tipo) {
    lista = document.getElementById("lista");
    switch(tipo){
    case 'D':    //Agrega elemento mediante DOM
                var elemento = document.createElement("li");
                var texto = document.createTextNode("Nuevo DOM");
                elemento.appendChild(texto);
                lista.appendChild(elemento);
                break;
    case 'H': //Agrega elemento mediante HTML
                 var nuevoElemento = "<li>Nuevo HTML</li>";
                lista.innerHTML = lista.innerHTML + nuevoElemento;
                break;
    default:  //Elimina elemento
                alert("Elimina");
                elemento_li = document.getElementsByTagName("li");
                lista.removeChild(elemento_li[ elemento_li.length-1]);
      }
    }