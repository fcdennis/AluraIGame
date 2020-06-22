let imagemCenario;
let imagemPersonagem;
let cenario;
let somDoJogo;
let personagem;

function preload(){
  imagemCenario = loadImage('cenario/floresta.png');
  imagemPersonagem = loadImage('personagens/correndo.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  frameRate(30);
  personagem = new Personagem(imagemPersonagem);
  somDoJogo.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
  personagem.anima();
}