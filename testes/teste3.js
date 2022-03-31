let numeros = document.querySelectorAll('#numeros li');

for(let i = 0;i < numeros.length; i++) {
    // <li>1</li>
    console.log(numeros[i].innerText);
}