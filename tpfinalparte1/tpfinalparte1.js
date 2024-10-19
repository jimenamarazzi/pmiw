//Comision3
//Jimena aylen marazzi y Maria Elena Molina
//Link a video: https://youtu.be/fq2U1riC_Qk


//fuentes
let miFuente;
let otraFuente

//arreglos
let opciones=[];
let preguntas=[];
let titulos=[];
let textos=[];
let imgs=[];

//con que pantalla iniciamos
let pantallaActual = 2;
let posXboton1 = 360;
let posXboton2 = 480;

//Constantes(en mayuscula para diferenciar de variables)
let POSYBOTON = 380;
let ANCHOBOTON = 113;
let ALTOBOTON = 52;
let REDONDEO = 50;


//Colores
let ROJO;
let BLANCO;

//posicion titulos
let POSXTITULO = 10;
let POSYTITULO = 50;
let ANCHOTITULO = 600;

//posicion descripcion
let POSXDESC = 100;
let POSYDESC = 90;
let ANCHODESC = 510;

//posicion preguntas
let POSXPREG = 200;
let POSYPREG = 230;
let ANCHOPREG = 410;

//opciones

let POSXOPC = 200;
let POSYOPC = 290;
let ANCHOOPC =410;
//fuentes


//sonidos
let musicaBot;
let fondoSonido;


function preload() {
  //cargar sonido
  musicaBot = loadSound("data/boton.mp3");
  fondoSonido = loadSound("data/sonfondo.mp3");
  //cargar fuentes
  miFuente = loadFont("data/miFuente.otf");
  otraFuente = loadFont("data/otraFuente.ttf");
}


function setup() {

  createCanvas(640, 480);

  ROJO = color(185, 17, 17);
  BLANCO = color(255, 255, 255, 70);


  //cargar los textos:
  textos[1] = "\n\nCressida Cowen - escritora Britanica\n\nJimena Aylen Marazzi - Molina Maria Elena\n\n3\n\nDavid Bedoian";
  textos[2] = "Es una encantadora película que sigue la historia de Hipo, un joven vikingo que vive en una isla donde los dragones son considerados enemigos. A medida que intenta demostrar su valentía, se encuentra con un dragón herido llamado Chimuelo. A través de su amistad con él, Hipo descubre que los dragones no son lo que parecen y se embarca en una aventura \nque cambiará su vida y la de su comunidad. \nLa película explora temas como la aceptación, \nla valentía y la conexión entre diferentes \nespecies, todo en un mundo lleno de \nacción y emoción.";
  textos[3] = "Derribaste accidentalmente a un temido dragón \nFuria Nocturna, al encontrarlo viste que lo habías \nherido levemente. ";
  textos[4] = "Luego de asesinarlo, le entregas el cuerpo del dragón \na tu padre. Logrando así, que el por fin esté orgulloso \nde vos y te nombre jefe de la aldea!";
  textos[5] = "Sin que nadie lo espere, los dragones organizan una venganza por la muerte de uno de los últimos de su especie.\nEs por esto mismo que al hacerse de noche, \ntodos los dragones atacan la aldea.\nAlgunos logran escapar, pero la aldea \nqueda destruida a causa del fuego.";
  textos[6] = "Bautizaste al dragón como “Chimuelo” y descubriste que no puede volar porque tiene la cola lastimada. \nA raíz de esto decidís hacerle una prótesis y \nayudarlo a volar. Con el tiempo te enseña \nque los dragones no son las criaturas \npeligrosas que los vikingos creen.";
  textos[7] = "A pesar de tu creciente amistad con Chimuelo , seguís entrenando en la academia de tu aldea para \nluchar contra dragones.\nGracias a Chimuelo aprendiste un \nmontón de cosas sobre los \ndragones y su comportamiento.";
  textos[8] = "Ese fue tu primer asesinato en una batalla \ncontra los dragones. \nTodo el pueblo se sorprende \nde tu habilidad y te piden consejos.\nTe piden a gritos que abras\ntu propia escuela...";
  textos[9] = "La gente de la aldea esta en lista de espera. \nTe vienen a visitar de todas las aldeas y \npiden por favor participar de \nalguna de tus clases. \nTu familia esta orgullosa de vos y \nrecibis un premio al mejor entrenador";
  textos[10] = "Tu padre descubre la verdad sobre Chimuelo y tus aventuras. Enfurecido, captura a Chimuelo para usarlo y \nencontrar el nido de los dragones.\nEl va a liderar una gran batalla, pero\n lo que no sabe es que hay un dragón \ngigantesco que controla a \ntodos los dragones.";
  textos[11] = "En consecuencia de esto, vos y tu dragón \nsobrevivieron y tienen una vida feliz.\nPero en las noches no podes dormir porque \nte recorre el pensamiento de todos los \nmuertos en la batalla de la que huíste...\nNo tenés con quien hablar sobre eso \nya que todos tus conocidos, amigos \ny familiares, murieron dentro de \nesa misma batalla..";
  textos[12] = "Decidiste enfrentarte junto a Chimuelo a la Dragon Madre.\nTras la victoria, los vikingos comprenden que los dragones pueden ser amigos, y la aldea de Berk \ninicia una nueva era de paz, donde \nhumanos y dragones conviven \narmoniosamente.";

  //cargar los titulos
  titulos[1] = "Creditos";
  titulos[2] = "¿Como entrenar a tu dragon?";
  titulos[3] = "Te encontraste con una criatura misteriosa";
  titulos[4] = "Decidiste asesinarlo";
  titulos[5] = "La fiesta tuvo una gran sorpresa";
  titulos [6] = "Amistad inesperada";
  titulos [7] = "Decidiste ocultar el secreto";
  titulos [8] = "Buena batalla";
  titulos [9] = "Sos super exitoso";
  titulos [10] = "Ups te descubrieron";
  titulos [11] = "Rescataste a tu amigo y escaparon juntos";
  titulos [12] = "La batalla final y la paz";
  titulos [13] = "Mapa de navegacion";

  //cargar las preguntas
  preguntas[3]="\n\n\n¿Que haces al respecto?";
  preguntas[4]="\n\nTu padre te hace una \nfiesta";
  preguntas[5]="FIN";
  preguntas[6]="\n\nTen cuidado, no sabes \ncomo pueden reaccionar";
  preguntas[7]="¿Para que usas la \ninformacion?";
  preguntas[8]="\n\n\n¿Que haces al respecto?";
  preguntas[9]="FIN";
  preguntas[10]="\n¿Vos queres ser parte?";
  preguntas[11]="\n\nFIN";
  preguntas[12]="FIN";

  //cargar opciones
  opciones[7]="A. Dominar a los dragones sin \nviolencia. \n B. Aprovecharme de sus debilidades \ny asesinarlos.";
  opciones[10]="A. Enfrentarme al dragon junto a \nChimuelo. \n B.Rescatar a Chimuelo y escapar.";


  //carga imagenes
  for (let i=1; i<=13; i++ ) {
    imgs[i] = loadImage("data/fondo_"+nf(i, 2)+".png  ");
  }
}


function draw() {


  if ( pantallaActual===1 ) {
    //muestro pantalla 1:
    mostrarPantalla( pantallaActual  );
    dibujarBoton(posXboton1, POSYBOTON, "DIAGRAMA");
    dibujarBoton(posXboton2, POSYBOTON, "INICIO");
    textSize(16);
    textAlign(RIGHT, RIGHT);
    text("Creadores de la pelicula:\n\nCreadoras de la obra interactiva:\n\nComision:\n\nProfesor:", 610, 110);
  }
  if ( pantallaActual===2 ) {
    //muestro pantalla 2:
    mostrarPantalla( pantallaActual  );
    dibujarBoton(posXboton1, POSYBOTON, "CREDITOS");
    dibujarBoton(posXboton2, POSYBOTON, "INICIO");
    fill(40);
    textSize(14);
    textAlign(RIGHT, RIGHT);
    text("Apretar 'S' para escuchar sonido de fondo.\nApretar 'P' para pausar sonido de fondo.", 610, 340);
  }
  if ( pantallaActual===3 ) {
    //muestro pantalla 3:
    mostrarPantalla( pantallaActual  );
    dibujarBoton(posXboton1, POSYBOTON, "LO LIBERO");
    dibujarBoton(posXboton2, POSYBOTON, "LO ASESINO");
  }
  if ( pantallaActual===4 ) {
    //muestro pantalla 4:
    mostrarPantalla( pantallaActual  );
    dibujarBoton(posXboton2, POSYBOTON, "ASISTIR");
  }
  if ( pantallaActual===5 ) {
    //muestro pantalla 5:
    mostrarPantalla( pantallaActual  );
    dibujarBoton(posXboton1, POSYBOTON, "CREDITOS");
    dibujarBoton(posXboton2, POSYBOTON, "INICIO");
  }
  if ( pantallaActual===6 ) {
    //muestro pantalla 6:
    mostrarPantalla( pantallaActual  );
    dibujarBoton(posXboton2, POSYBOTON, "OCULTARLO");
  }
  if ( pantallaActual===7 ) {
    //muestro pantalla 7:
    mostrarPantalla( pantallaActual  );
    dibujarBoton(posXboton1, POSYBOTON, "A");
    dibujarBoton(posXboton2, POSYBOTON, "B");
  }
  if ( pantallaActual===8 ) {
    //muestro pantalla 8:
    mostrarPantalla( pantallaActual  );
    dibujarBoton(posXboton2, POSYBOTON, "ABRIRLA");
  }
  if ( pantallaActual===9 ) {
    //muestro pantalla 9:
    mostrarPantalla( pantallaActual  );
    dibujarBoton(posXboton1, POSYBOTON, "CREDITOS");
    dibujarBoton(posXboton2, POSYBOTON, "INICIO");
  }
  if ( pantallaActual===10 ) {
    //muestro pantalla 10:
    mostrarPantalla( pantallaActual  );
    dibujarBoton(posXboton1, POSYBOTON, "A");
    dibujarBoton(posXboton2, POSYBOTON, "B");
  }
  if ( pantallaActual===11 ) {
    //muestro pantalla 11:
    mostrarPantalla( pantallaActual  );

    dibujarBoton(posXboton1, POSYBOTON, "CREDITOS");
    dibujarBoton(posXboton2, POSYBOTON, "INICIO");
  }
  if ( pantallaActual===12 ) {
    //muestro pantalla 12:
    mostrarPantalla( pantallaActual  );
    dibujarBoton(posXboton1, POSYBOTON, "CREDITOS");
    dibujarBoton(posXboton2, POSYBOTON, "INICIO");
  }
  if ( pantallaActual===13 ) {
    //muestro pantalla 13:
    mostrarPantalla( pantallaActual  );
    dibujarBoton(posXboton2, POSYBOTON, "INICIO");
    dibujarBotonSonido(POSXBOTONSON, POSYBOTONSON);
  }
}



function mousePressed() {
  //cambios de flujo:
  if ( pantallaActual===1) {
    if (colisionBoton(posXboton1, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=13;
      musicaBot.play();
    }
    if (colisionBoton(posXboton2, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual++;
      musicaBot.play();
    }
  } else if ( pantallaActual===2) {
    if (colisionBoton(posXboton1, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=1;
      musicaBot.play();
    }
    if (colisionBoton(posXboton2, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual++;
      musicaBot.play();
    }
  } else if ( pantallaActual===3) {
    if (colisionBoton(posXboton1, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=6;
      musicaBot.play();
    }
    if (colisionBoton(posXboton2, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=4;
      musicaBot.play();
    }
  } else if ( pantallaActual===4) {

    if (colisionBoton(posXboton2, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=5;
      musicaBot.play();
    }
  } else if ( pantallaActual===5) {
    if (colisionBoton(posXboton1, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=1;
      musicaBot.play();
    }
    if (colisionBoton(posXboton2, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=2;
      musicaBot.play();
    }
  } else if ( pantallaActual===6) {
    if (colisionBoton(posXboton2, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=7;
      musicaBot.play();
    }
  } else if ( pantallaActual===7) {
    if (colisionBoton(posXboton1, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=10;
      musicaBot.play();
    }
    if (colisionBoton(posXboton2, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=8;
      musicaBot.play();
    }
  } else if ( pantallaActual===8) {
    if (colisionBoton(posXboton2, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=9;
      musicaBot.play();
    }
  } else if ( pantallaActual===9) {
    if (colisionBoton(posXboton1, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=1;
      musicaBot.play();
    }
    if (colisionBoton(posXboton2, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=2;
      musicaBot.play();
    }
  } else if ( pantallaActual===10) {
    if (colisionBoton(posXboton1, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=12;
      musicaBot.play();
    }
    if (colisionBoton(posXboton2, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=11;
      musicaBot.play();
    }
  } else if ( pantallaActual===11) {
    if (colisionBoton(posXboton1, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=1;
      musicaBot.play();
    }
    if (colisionBoton(posXboton2, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=2;
      musicaBot.play();
    }
  } else if ( pantallaActual===12) {
    if (colisionBoton(posXboton1, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=1;
      musicaBot.play();
    }
    if (colisionBoton(posXboton2, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=2;
      musicaBot.play();
    }
  } else if ( pantallaActual===13) {

    if (colisionBoton(posXboton2, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
      pantallaActual=2;
      musicaBot.play();
    }
  }
}

//para sonido de fondo
function keyPressed() {
  if (key ==="S" || key === "s") {
    fondoSonido.play();
  }
  if ( key === "P" || key === "p") {
    fondoSonido.pause();
  }
}
