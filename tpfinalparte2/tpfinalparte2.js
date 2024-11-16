// let obj(nombre) = new (mismonombre?);


let objPantallas;
let imgFondo;
let imgJuego;
let imgEscalera;

let imgChimuelo = [];

let imgActual = 0;
let imgPuerta;


let imgOveja = [];
let imgActualOv =0;

let imgPisos = [];
let imgSonidos = [];


let fuenteTitulo;
let segundaFuente;
let fuenteBoton;

let musicaBot;
let fondoSonido;


function preload() {
  imgFondo = loadImage("data/fondo.png");
  imgJuego = loadImage("data/fondoJuego.png");
  imgPuerta = loadImage("data/puerta.png");

  musicaBot = loadSound("data/boton.mp3");
  fondoSonido = loadSound("data/sonfondo.mp3");

  imgChimuelo[0] = loadImage("data/chimuelo0.png");
  imgChimuelo[1] = loadImage("data/chimuelo1.png");
  imgOveja[0] = loadImage("data/oveja0.png");
  imgOveja[1] = loadImage("data/oveja1.png");

  imgPisos[0] = loadImage("data/piso0.png");
  imgPisos[1] = loadImage("data/piso1.png");
  imgPisos[2] = loadImage("data/piso2.png");

  imgEscalera= loadImage("data/escalera0.png");
  imgSonidos[0] = loadImage("data/sonido0.png");
  imgSonidos[1] = loadImage("data/sonido1.png");


  fuenteTitulo= loadFont("data/fuenteTitulo.otf");
  segundaFuente= loadFont("data/segundaFuente.ttf");
  fuenteBoton= loadFont("data/fuenteBoton.ttf");
  
}


function setup() {
  createCanvas(640, 480);

  objPantallas = new Pantallas(); // controla las pantallas deljuego
  //no se por que aparecen errores en inspeccionar que tienen que ver con la pantalla, pero bueno funciona *insertar meme por que esta funcionandoo?*
}


function draw() {

  objPantallas.dibujar();
  
}

function mousePressed() {

  objPantallas.logicaPantallas();
}
