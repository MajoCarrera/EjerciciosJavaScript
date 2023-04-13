function valida(campo){
    var bRet = false;
    if (campo.value == "")
    document.getElementById("e").innerHTML='faltan datos'
    else 	if (!campo.value.match(/^[A-Z]{3,4}[0-9]{6}[A-Z]{3}[0-9]{2}$/))
    document.getElementById("i").innerHTML='No tiene formato rfc'
        else
            bRet = true;
    return bRet;
}
