function iniCopos(num, anc, alto, veloc) {
    var i, x, y;
    for (i = 0; i < num; i++) {
        x = parseInt(Math.random() * anc);
        y = parseInt(Math.random() * alto);
        dibujaCopo(i, x, y);
    }


    window.copos = new Array(num);
    window.coposAlto = alto;
    window.coposAncho = anc;
    window.coposVeloc = veloc;
}
function dibujaCopo(num, x, y) {
    var tama = Math.round(Math.random()) + 3;
    document.write('<div id="c' + num + '" style="position:absolute;width:1px;');
    document.write('height:1px; z-index:0; left:' + x + 'px; top:' + y + '"px; ');
    document.write(' background-color: #FFFFFF">');
    document.write('<font size="' + tama + '" color = "#FFFFFF" >*</font>');
    document.write('</div>');
}
function iniNevada() {
    for (i = 0; i < window.copos.length; i++)
        if (document.all)
            window.copos[i] = document.all["c" + i]
        else
            window.copos[i] = document.getElementById("c" + i);
    setTimeout("nevar()", 1);
}
function nevar() {
    var x, y;
    for (i = 0; i < copos.length; i++) {
        y = parseInt(window.copos[i].style.top);
        x = parseInt(window.copos[i].style.left);
        if (Math.random() > 0.5)
            y += parseInt(Math.random() + 1);
        y += parseInt(Math.random() + 2);
        window.copos[i].style.top = y;
        if (y > document.body.scrollTop + coposAlto) {
            window.copos[i].style.top = document.body.scrollTop -
                Math.round(Math.random() * 10);
            window.copos[i].style.left =
                parseInt(Math.random() * coposAncho - 1);
        }
    }
    setTimeout("nevar()", coposVeloc);
}