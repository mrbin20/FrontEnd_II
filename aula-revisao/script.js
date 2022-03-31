//Uma função
function nomeDaFuncao() {
    console.log('O bloco foi executado');
}

// uma função tipo arrow function
let arrowFunc = () =>    {
    console.log('O bloco foi executado');
}

// let arrowFunc2 = () => 1;

// Chamar uma função
nomeDaFuncao


// Loops

const usuarios = [
    {
        nome:   'Andre',
        turma:  12
    },
    {
        nome:   'Ricardo',
        turma:  13
    }
];

usuarios.forEach(function (usuario) {
    console.log(
        'Colocar o nome do usuário em uma div',
        usuario.nome
    );
    console.log(
        'Colocar o nome da turma em uma div, abaixo da div do usuário',
        usuario.turma);
})