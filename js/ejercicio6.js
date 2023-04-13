var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
    'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H',
    'L', 'C', 'K', 'E', 'T'];

var numero = prompt("Introduce tu número de tu Indentificaci\u00f3n (sin la letra)");// \u00f3 para la ó acentuada en UNICODE
var letra = prompt("Introduce la letra de tu Indentificaci\u00f3n (en may\u00fasculas)"); // \u00fa para la ú acentuada en UNICODE
letra = letra.toUpperCase();

if (numero < 0 || numero > 99999999)
    alert("El número proporcionado no es válido");

else {
    var letraCalculada = letras[numero % 23];
    if (letraCalculada != letra)
        alert("La letra o el n\u00famero proporcionados no son correctos");
    else
        alert("El n\u00famero de tu Indentificaci\u00f3n y su letra son correctos");
}