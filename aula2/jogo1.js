let usuario = parseInt(prompt("1-pedra, 2-papel, 3-tesoura"), 10);
let computador = parseInt(Math.random()*3+1, 10);
let resultado = 'perdeu';
entrou = false; 
switch (usuario){
    case 1:
        if(computador === 2){
            entrou = 1;
        }
    break;
    case 2:
        if(computador === 3){
            entrou = 1;
        }   
    break;
    case 3:
        if(computador === 1){
            entrou = 1;
        }
    break;
    default:
        alert("Opção inválida!")
    break;
}
if (!entrou){
    resultado = "ganhou"
}
if (usuario === computador){
    resultado = "empate";
}
alert("Computador: " + computador + "\nVocê: " + usuario + "\nresultado: "+ resultado);