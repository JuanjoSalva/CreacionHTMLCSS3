function mostrar(id) {
    let div = document.getElementById(id);
    div.animationduration = "2s";
    if (div.style.display == 'none'){
        div.style.display = 'block';
    }else{
        div.style.display = 'none';
    }
}

function cerrar(id) {
    let div = document.getElementById(id);
    div.style.display = 'none';
}