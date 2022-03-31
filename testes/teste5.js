felinos.forEach(function(felino) {
    // Elementos
    const item = document.createElement('div');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');

    // Textos
    const h2Text = document.createTextNode(felino.titulo);
    const pText = document.createTextNode(felino.descricao);

    // Comandos
    img.setAttribute('src', felino.imagem);
    h2.appendChild(h2Text);
    p.appendChild(pText);
    item.appendChild(img);
    item.appendChild(h2);
    item.appendChild(p);
    item.classList.add("item");

    // Appendar
    document.querySelector('.main').appendChild(item);
});