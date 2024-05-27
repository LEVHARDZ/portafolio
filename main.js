const toogleUno = document.querySelector('.toggleOne');
const toogleDos = document.querySelector('.toggleTwo');
const upto = document.querySelector('.upTo');
const sideBar = document.querySelector('.slide--menu');
const cuerpo = document.querySelector('body');
const nav = document.querySelector('.navegacion--ul');



toogleDos.addEventListener('click', () => {
    sideBar.style.transform = "translateX(0)";
    toogleDos.style.display = "none";
    upto.style.display = "none";
    toogleUno.style.display = "block";
    cuerpo.style.overflow = "hidden";
});

toogleUno.addEventListener('click', () => {
    sideBar.style.transform = "translateX(-100%)";
    toogleUno.style.display = "none";
    upto.style.display = "block";
    toogleDos.style.display = "block";
    cuerpo.style.overflow = " ";
    cuerpo.style.overflow = "visible";
});

nav.addEventListener('click', () => {
    sideBar.style.transform = "translateX(-100%)";
    toogleUno.style.display = "none";
    upto.style.display = "block";
    cuerpo.style.overflow = " ";
    toogleDos.style.display = "block";
    cuerpo.style.overflow = "visible";
});

/* Eliminando parte del DOM */

function moverNavSegunAncho() {

    let sizeWindow = window.innerWidth;
    const navegador = document.querySelector("nav");
    const header = document.querySelector("header");

    if (sizeWindow > 768) {
        if (!header.contains(navegador)) {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(navegador);
            header.appendChild(fragment);
            nav.removeAttribute('id');
            
        }
    } else {
        // Si quieres que el <nav> vuelva a su lugar original, debes tener una referencia al contenedor original
        const contenedorOriginal = document.querySelector("#contenedor-original");

        if (contenedorOriginal && !contenedorOriginal.contains(navegador)) {
            var fragment = document.createDocumentFragment();
            fragment.appendChild(navegador);
            contenedorOriginal.appendChild(fragment);
        }
    }
}

// Ejecuta la función inicialmente
moverNavSegunAncho();

// Ejecuta la función cada vez que la ventana cambie de tamaño
window.addEventListener('resize', moverNavSegunAncho);
