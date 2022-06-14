var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signup')
var btnColor = document.querySelector('.btnColor')
var email = document.querySelector("#email");
var senha = document.querySelector("#senha");
var entrar = document.querySelector("#entrarbtn");
var cadastrar = document.querySelector("#cadastrarbtn");
var nome = document.getElementById("nome");
var telefone = document.getElementById("telefone");
var cpf = document.getElementById("cpf");
var emailc = document.getElementById("emailc");
var senhac = document.getElementById("senhac");

document.querySelector('#btnSignin')
    .addEventListener('click', () => {
        formSignin.style.left = "25px"
        formSignup.style.left = "450px"
        btnColor.style.left = "0px"
    })

document.querySelector('#btnSignup')
    .addEventListener('click', () => {
        formSignin.style.left = "-450px"
        formSignup.style.left = "25px"
        btnColor.style.left = "110px"
    })

function login() {
    let userdata = {
        email: email.value,
        senha: senha.value
    }

    fetch("http://10.87.207.15:3000/login", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata)
    })
        .then(resp => {

            return resp.json();
        })
        .then(data => {
            console.log(data)
            if (data.status !== undefined) {
                alert(data.status);
            } else {
                localStorage.setItem("data", JSON.stringify(data));

                window.location.href = "../Tela-Home";
            }
        })
}

function cadastrar() {
    let userdata = {
        email: emailc.value,
        senha: senhac.value,
        cpf: cpf.value,
        telefone: telefone.value,
        nome_completo: nome.value,
        data_nascimento: null,
    }

    const cadastro = (body) => {
        fetch("http://10.87.207.15:3000/func", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(resp => {
            return resp;
        })
        .then(data  => {
            console.log(data.status);
            if(data.status == 200) {
               //login certo
               data.json().then( result => {
                window.location.href = "../Tela-Home";
                console.log(result);
               })
            }else if(data.status == 400) {
                //email ja cadastrado
                alert('email ja existente')
            }
        });
    }
}