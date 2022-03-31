let input = prompt('Selecione uma das opções: [1] Pedra | [2] Papel | [3] Tesoura');
let usuario = parseInt(input, 10)
let computador = parseInt(Math.random() * 3 + 1, 10)

console.log('Usuário:', usuario)
console.log('Computador:', computador)

let possiveisResultados = {
    'empate': {
        1: "Empate 🎲",
        2: "Xiii empatou 🎲",
        3: "Hmmmm empatou 🎲",
    }
}

let resultado = "Erro ou sem resultado definido";

if(usuario === 1) {
    if(computador === 1) {
        resultado = possiveisResultados['empate'][parseInt(Math.random() * 3 + 1, 10)];
    }
    if(computador === 2) {
        resultado = "Perdeu 😔";
    }
    if(computador === 3) {
        resultado = "Vitória 😘";
    }
}

if(usuario === 2) {
    if(computador === 1) {
        resultado = "Vitória 😘";
    }
    if(computador === 2) {
        resultado = "Empate 🎲";
    }
    if(computador === 3) {
        resultado = "Perdeu 😔";
    }
}

if(usuario === 3) {
    if(computador === 1) {
        resultado = "Perdeu 😔";
    }
    if(computador === 2) {
        resultado = "Vitória 😘";
    }
    if(computador === 3) {
        resultado = "Empate 🎲";
    }
}

alert(resultado);




let dataAtual = new Date()

alert();

if(dataAtual.getSeconds() > new Date().getSeconds()) {
    // resultado
}