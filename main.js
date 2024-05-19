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
    toogleDos.style.display = "block";
    cuerpo.style.overflow = " ";
    cuerpo.style.overflow = "visible";
});