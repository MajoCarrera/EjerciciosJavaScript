function info(cadena) {

    var resultado = "La cadena \""+cadena+"\" ";
  
    // Comprobar mayúsculas y minúsculas
    if(cadena == cadena.toUpperCase())
       resultado += " está formada sólo por mayúsculas";
    else if(cadena == cadena.toLowerCase())
            resultado += " está formada sólo por minúsculas";
        else
             resultado += " está formada por mayúsculas y minúsculas";
  return resultado;
  }
  
  alert(info("OVNI = OBJETO VOLADOR NO IDENTIFICADO"));
  alert(info("En un lugar de la mancha..."));
  alert(info("aprendiendo javascript..."));