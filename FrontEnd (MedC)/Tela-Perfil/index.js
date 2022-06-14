'use strict'

let photo = document.getElementById('imgPhoto');
let file = document.getElementById('flImage');
var entrar = document.querySelector("#sairbtn");
var irphome = document.querySelector("#imghome");
var irpestoque = document.querySelector("#imgestoque");

photo.addEventListener('click', () => {
    file.click();
});

file.addEventListener('change', () => {

    if (file.files.length <= 0) {
        return;
    }

    let reader = new FileReader();

    reader.onload = () => {
        photo.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
});

function sair() {
    window.location.href = "../Tela-Login"
}

function irparahome() {
    window.location.href = "../Tela-Home"
}

function irparaestoque() {
    window.location.href = "../Tela-Estoque"
}