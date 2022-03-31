// let a = parseInt("22"); 
// let b = parseInt(prompt("Introduza idade")); 
// let c = parseInt('22'+'150'); 
// let d = parseInt(b+150); 
// let e = parseInt(22+parseInt("150")); 
// let f = parseInt(22.55); 
// let g = parseInt(19.79); 
// let h = parseFloat(19.79); 

// console.log(a); 
// console.log(b); 
// console.log(c); 
// console.log(d); 
// console.log(e); 
// console.log(f);
// console.log(g);
// console.log(h);

// console.log(parseFloat(22.34)); 
// console.log(parseFloat(22.3456284));

// let idade = parseInt(prompt("Introduza sua idade")); 
// if(idade>=18){ 
// console.log("É maior de idade"); 
// }else{ 
// console.log("É menor de idade"); 
// } 
// alert("idade digitada: " +idade);

// var isNaN = function(value) {
//     var n = Number(value);
//     return n !== n;
// };

// isNaN(NaN);       // true
// isNaN(undefined); // true
// isNaN({});        // true

// isNaN(true);      // false
// isNaN(null);      // false
// isNaN(37);        // false

// // strings
// isNaN("37");      // false: "37" is converted to the number 37 which is not NaN
// isNaN("37.37");   // false: "37.37" is converted to the number 37.37 which is not NaN
// isNaN("");        // false: the empty string is converted to 0 which is not NaN
// isNaN(" ");       // false: a string with spaces is converted to 0 which is not NaN

// // dates
// isNaN(new Date());                // false
// isNaN(new Date().toString());     // true

// // Esse é um falso positivo e é a razão para isNaN não seja totalmente confiável.
// isNaN("blabla")   // true: "blabla" é convertido para número.
//                   // A análise desse número falha e retorna NaN como resultado.
// Number.isNaN("blabla"); // e.g. este teria sido true com isNaN


// let aleatorioSimples = Math.random();
// alert('Aleatório Simples = '+aleatorioSimples);

// let aleatorioEscalado = Math.random()*(100-1)+1;
// a = parseInt(aleatorioEscalado);
// alert('Aleatório Escalado = '+a);

// let num = Math.round(20.49);
// alert(num);

// let aleatorio = Math.random()*(100-1)+1;
// alert(Math.round(aleatorio));

// let numUm = Math.max(10, 20);
// let numDois = Math.max(10, 20, 30.58);
// let numTres = Math.max(10, 20, 30.58, "No");

// console.log(numUm, numDois,numTres);

// let carro = {
//     nome: "Fox",
//     ano: "2011",
//     cor: "vermelha"
// }

// for(let propriedade in carro) {
//     console.log(propriedade+': '+carro[propriedade])
// }

// let series = ["Friends", "Game of thrones", "Breaking bad"];

// for(let valor of series) {
//     console.log(valor)
// }

let titulo = document.querySelector('.titulo');
console.log(titulo);