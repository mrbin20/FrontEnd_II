let dados = [
{
    titulo:  'O tigre',
    imagem: './imagens/tiger.jpg',
    paragrafo: 'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.'
},
{
    titulo:  'O leão',
    imagem: './imagens/leon.jpg',
    paragrafo: 'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero     gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.'
},
{
    titulo:  'O leopardo',
    imagem: './imagens/leopardo.jpg',
    paragrafo: 'O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra (melanista).'
},
{
    titulo:  'A pantera negra',
    imagem: './imagens/pantera-negra.jpg',
    paragrafo: 'A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.'
},
{
    titulo:  'O jaguar',
    imagem: './imagens/jaguar.jpg',
    paragrafo: 'O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do     gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também     é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera     leo).'
},
{
    titulo:  'O guepardo',
    imagem: './imagens/chita.jpg',
    paragrafo: 'O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único     representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre     mais rápido     do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.'
},
];

// Criar a iteração:

dados.forEach((dado) => {
    //iteração

    const section = document.querySelector('main');
    // div
    const divItem = document.createElement('div');
    divItem.classList.add('item');
    section.appendChild(divItem);
    // imagem
    const img = document.createElement('img');
    img.setAttribute('src', dado.imagem );
    divItem.appendChild(img);
    // h2
    const h2 = document.createElement('h2');
    h2.innerHTML = dado.titulo;
    divItem.appendChild(h2);
    // p
    const p = document.createElement('p');
    p.innerHTML = dado.paragrafo;
    divItem.appendChild(p);

});