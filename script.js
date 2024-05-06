var img = [ 
    './assets/batman.png',
    './assets/star-wars.png',
    './assets/x-men.png',
    './assets/calculadora-imc.png',
    './assets/landing.png',
    './assets/mario.png',
    './assets/card-profile.png',
    './assets/portfolio.png',
];

var texts = [ 
    'Projeto Batman feito em HTML e CSS, juntamente com responsividade e efeitos insanos!',
    'Projeto complexo sobre Star-Wars feito em HTML, CSS e JAVASCRIPT, utilizando também API!',
    'Projeto X-Men feito em HTML, CSS e JAVASCRIPT, feito sob um evento gratuito na internet comandado pelos irmãos do Dev em Dobro.',
    'Calculadora IMC feita usando apenas HTML, CSS e JAVASCRIPT, indicando e alertando a você as suas condições de saúde.',
    'Este é um projeto chamado Landing Page, muito utilizado no mercado para transmitir interesses à outras pessoas e coisas relacionadas.',
    'Segue aqui um jogo básico do Super Mário, feito com HTML, CSS e Javascript, muito daora!',
    'Card perfil, feito em HTML e CSS para exibir suas habilidades, serviços e expor seus interesses profissionais.',
    'Portfolio pessoal, feito com HTML5, CSS3 e JAVASCRIPT, com vários efeitos e incríveis layouts!'
];

var currentImage = 0;

function change(){
    var projectCard = document.getElementById("projectCard")
    var projectImage = projectCard.querySelector(".project-image")
    var projectText = projectCard.querySelector(".project-text")

    projectCard.classList.add('jump-animation');
    projectImage.classList.add('jump-animation');
    projectText.classList.add('jump-animation');

    projectImage.src = img[currentImage];
    projectText.textContent = texts[currentImage];
    
    currentImage = (currentImage + 1) % img.length;

    setTimeout(function() {
        projectCard.classList.remove('jump-animation');
        projectImage.classList.remove('jump-animation');
        projectText.classList.remove('jump-animation');
    }, 200);

}

