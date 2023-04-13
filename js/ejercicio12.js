function muestra() {
    var elemento = document.getElementById("adicional");
    elemento.className = "visible";
  
    var enlace = document.getElementById("enlace");
    enlace.className = "visible";
  
    var enlace1 = document.getElementById("enlace1");
    enlace.className = "oculto";
  
  }
  
  function oculta() {
    var elemento = document.getElementById("adicional");
    elemento.className = "oculto";
  
    var enlace = document.getElementById("enlace");
    enlace.className = "oculto";
  
    var enlace1 = document.getElementById("enlace1");
    enlace.className = "visible";
  
  }