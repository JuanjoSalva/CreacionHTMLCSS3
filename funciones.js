function mostrar(id) {
    let midiv = document.getElementById(id);
    midiv.animationduration = "2s";
    if (midiv.style.display == 'none'){
        midiv.style.display = 'block';
        midiv.style.left="0%";
        /*div.style.left="0px";*/
    }else{
        midiv.style.display = 'none';
        midiv.style.left="-100%";
    }
}

function cerrar(id) {
    let midiv = document.getElementById(id);
    midiv.style.display = 'none';
    midiv.style.left="-100%";
}

(function(){
    let  elementos = document.getElementsByClassName("actividad");
    for (i = 0; i < elementos.length; i++) {
        let elem1 = document.forms[0];


        var nuevo_parrafo = document.createElement('p').appendChild(document.createTextNode('Nuevo párrafo.'));

        var segundo_p = elem1;

        document.getElementById('padre').insertBefore(nuevo_parrafo,segundo_p);

      }
})();