function validaFechaMenor(campo) {
  var bRet = false;
  var dHoy = new Date();
  var dCapt = null;

  if (campo == "")
    alert("Faltan datos");
  else {
    dCapt = validaFecha(campo);
    if (dCapt != null && dCapt < dHoy)
      bRet = true;
    else
      alert("La fecha debe ser menor a la fecha actual");
  }
  return bRet;
}

function convfecha(camp) {
  var fechaC = "";
  var fech = camp.valueAsDate

  year = fech.getFullYear();
  month = fech.getMonth();
  day = fech.getDate();
  month = month + 1;
  day = day + 1;

  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }

  fechaC = day + '/' + month + '/' + year;

  validaFechaMenor(fechaC);
}


function validaFecha(valor) {
  var dConvertida = null;
  var sAnio = "";
  var sMes = "";
  var sDia = "";
  var nAnio = 0, nMes = 0, nDia = 0;

  if (valor.match(/^\d{2}\/\d{2}\/\d{4}$/)) {
    nDia = parseInt(valor.substring(0, 2), 10);
    nMes = parseInt(valor.substring(3, 5), 10);
    nAnio = parseInt(valor.substring(6, 10), 10);

    if (nDia < 1 || nDia > 31)
      alert("El día no es válido")
    else {
      if (nMes < 1 || nMes > 12)
        alert("El mes no es válido");
      else {
        if ((nMes == 1 || nMes == 3 || nMes == 5 || nMes == 7 ||
          nMes == 8 || nMes == 10 || nMes == 12) && nDia > 31)
          alert("El mes tiene máximo 31 días");
        else if ((nMes == 4 || nMes == 6 || nMes == 9 ||
          nMes == 11) && nDia > 30)
          alert("El mes tiene máximo 30 días");
        else if ((nMes == 2) && ((nDia > 29) || (nAnio % 4 != 0 && nDia > 28)))
          alert("Febrero tiene 28 días o 29 en bisiesto");
        else {
          dConvertida = new Date();
          dConvertida.setFullYear(nAnio, nMes - 1, nDia);
        }//fin validaci�n día-mes
      }//mes válido
    }//día válido
    creasigno(nDia, nMes);
  }//formato válido

  else {
    alert("No tiene formato de fecha");
  }
  return dConvertida;
}

function creasigno(nDia, nMes) {

  var newDiv = document.createElement("div");
  var newContent2 = document.createElement("br");

  if ((nDia > 20) && (nMes == 3) || (nDia <= 20) && (nMes == 4)) {
    var newContent = document.createTextNode("SIGNO ARIES");
    var newContent3 = document.createTextNode("Numeros de la suerte: 22, 54, 94, 97, 33");
    newDiv.style = "border: 3px solid #999999; background-color:#ffffff; width: 200px ;height:300px ";
  }
  else if ((nDia > 20) && (nMes == 4) || (nDia <= 20) && (nMes == 5)) {
    var newContent = document.createTextNode("SIGNO TAURO");
    var newContent3 = document.createTextNode("Numeros de la suerte: 51, 65, 74, 63, 5");
    newDiv.style = "border: 3px solid #999999; background-color:#e9a9b4; width: 200px ;height:300px ";
  }
  else if ((nDia > 20) && (nMes == 5) || (nDia <= 20) && (nMes == 6)) {
    var newContent = document.createTextNode("SIGNO GEMINIS");
    var newContent3 = document.createTextNode("Numeros de la suerte: 53, 49, 44, 40, 86");
    newDiv.style = "border: 3px solid #999999; background-color:#368736; width: 200px ;height:300px ";
  }
  else if ((nDia > 20) && (nMes == 6) || (nDia <= 22) && (nMes == 7)) {
    var newContent = document.createTextNode("SIGNO CANCER");
    var newContent3 = document.createTextNode("Numeros de la suerte: 29, 38, 23, 98, 41");
    newDiv.style = "border: 3px solid #999999; background-color:#d1b932; width: 200px ;height:300px ";
  }
  else if ((nDia > 22) && (nMes == 7) || (nDia <= 23) && (nMes == 8)) {
    var newContent = document.createTextNode("SIGNO LEO");
    var newContent3 = document.createTextNode("Numeros de la suerte: 87, 50, 64, 93, 36");
    newDiv.style = "border: 3px solid #999999; background-color:#dfae54; width: 200px ;height:300px ";
  }
  else if ((nDia > 23) && (nMes == 8) || (nDia <= 22) && (nMes == 9)) {
    var newContent = document.createTextNode("SIGNO VIRGO");
    var newContent3 = document.createTextNode("Numeros de la suerte: 47, 16, 62, 25, 75");
    newDiv.style = "border: 3px solid #999999; background-color:#3434f1; width: 200px ;height:300px ";
  }
  else if ((nDia > 22) && (nMes == 9) || (nDia <= 22) && (nMes == 10)) {
    var newContent = document.createTextNode("SIGNO LIBRA");
    var newContent3 = document.createTextNode("Numeros de la suerte: 24, 45, 57, 26, 15");
    newDiv.style = "border: 3px solid #999999; background-color:#8b8bff; width: 200px ;height:300px ";
  }
  else if ((nDia > 22) && (nMes == 10) || (nDia <= 22) && (nMes == 11)) {
    var newContent = document.createTextNode("SIGNO ESCORPIO");
    var newContent3 = document.createTextNode("Numeros de la suerte: 78, 59, 46, 42, 73");
    newDiv.style = "border: 3px solid #999999; background-color:#d84242; width: 200px ;height:300px ";
  }
  else if ((nDia > 22) && (nMes == 11) || (nDia <= 21) && (nMes == 12)) {
    var newContent = document.createTextNode("SIGNO SAGITARIO");
    var newContent3 = document.createTextNode("Numeros de la suerte: 2, 99, 96, 34, 90, 7");
    newDiv.style = "border: 3px solid #999999; background-color:#f7f759; width: 200px ;height:300px ";
  }
  else if ((nDia > 21) && (nMes == 12) || (nDia <= 21) && (nMes == 1)) {
    var newContent = document.createTextNode("SIGNO CAPRICORNIO");
    var newContent3 = document.createTextNode("Numeros de la suerte: 68, 92, 11, 91, 8");
    newDiv.style = "border: 3px solid #999999; background-color:#29292923; width: 200px ;height:300px ";
  }
  else if ((nDia > 21) && (nMes == 1) || (nDia <= 21) && (nMes == 2)) {
    var newContent = document.createTextNode("SIGNO ACUARIO");
    var newContent3 = document.createTextNode("Numeros de la suerte: 89, 70, 56, 66, 21");
    newDiv.style = "border: 3px solid #999999; background-color:#9292d8; width: 200px ;height:300px ";
  }
  else if ((nDia > 22) && (nMes == 21) || (nDia <= 23) && (nMes == 3)) {
    var newContent = document.createTextNode("SIGNO PICIS");
    var newContent3 = document.createTextNode("Numeros de la suerte: 19, 95, 18, 77, 2");
    newDiv.style = "border: 3px solid #999999; background-color:#c48590; width: 200px ;height:300px ";
  }


  //var newContent = document.createTextNode("SIGNO");
  var sc = newContent;
  newDiv.appendChild(newContent); //añade texto al div creado.
  newDiv.appendChild(newContent2);
  newDiv.appendChild(newContent3);

  // añade el elemento creado y su contenido al DOM
  var currentDiv = document.getElementById("div");
  document.body.insertBefore(newDiv, currentDiv);
  //        newDiv.style="border: 3px solid #999999; background-color:#54b51e; width: 200px ;height:300px ";
  debugger
}