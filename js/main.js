Fancybox.bind("[data-fancybox]", {
    
});

let imgs = document.querySelectorAll('#galeria img');

imgs.forEach(img => img.addEventListener('mouseenter', descripcionImagen));
imgs.forEach(img => img.addEventListener('mouseover', descripcionImagenOff));


function descripcionImagen() {
    let divImg = this.parentNode.parentNode;

    var descripcionImagen = document.createElement('p');
    var textoP = document.createTextNode(this.title);
    descripcionImagen.appendChild(textoP);
    descripcionImagen.classList.add('pTemporal');

    divImg.appendChild(descripcionImagen);
}

function descripcionImagenOff() {
    let p = document.querySelector('.pTemporal');
    console.log(p);
    p.remove();
}