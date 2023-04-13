var contador=3;

function anade() {

  var lista = document.getElementById("lista");
  var elemento = document.createElement("li");
  var nuevoElemento = "<li>Elemento "+(++contador)+"</li>";
  lista.innerHTML = lista.innerHTML + nuevoElemento;
}