class Pantallas {

  constructor() {
    //cuales van a ser esas caracteristicas
    this.posX = 0;
    this.posY = 0;
    this.ancho = 640;
    this.alto = 480;
    this.imagen = imgFondo;
    this.imagenJuego = imgJuego;
    this.imagenSonido1 = imgSonidos[0];
    this.imagenSonido2 = imgSonidos[1];

    this.posXTitulo = 60;
    this.posYTitulo = 100;
    this.colorTitulo = color(255, 0, 0);
    this.tamTitulo = 30;
    this.fuente = fuenteTitulo;
    this.fuente2 = segundaFuente;
    this.strokeTitulo = color(255);

    this.posXSubt = 60;
    this.posYSubt = 140;
    this.tamSubt = 16;

    this.estado = "inicio";
    this.objJuego= new Juego(this);
    this.botones = new Botones();

    this.posXBoton1=500;
    this.posXBoton2=500;
    this.posXBoton3=500;
    this.posXBoton4=25;
    this.posXBoton5=60;

    this.posYBoton1=250;
    this.posYBoton2=320;
    this.posYBoton3=390;
    this.posYBoton4=20;
    this.posYBoton5=20;

    this.opacidad = color (0, 0, 0, 95);

    this.musicaBoton = musicaBot;
    this.fondoSon = fondoSonido;
  }
  dibujar() {
    //console.log(this.botones.colisionBoton());
    if (this.estado === "creditos") {
      this.pantallaCreditos();
    }
    if (this.estado === "tutorial") {
      this.pantallaTutorial();
    }
    if (this.estado === "inicio") {
      this.pantallaInicio();
    }
    if (this.estado === "juego") {
      this.pantallaJuego();
    }
    if (this.estado=== "ganaste") {
      this.pantallaGanaste();
    }
    if (this.estado === "perdiste") {
      this.pantallaPerdiste();
    }
  }

  pantallaJuego() {
    background(220);
    image(this.imagenJuego, this.posX, this.posY, this.ancho, this.alto);
    image(this.imagenSonido1, this.posXBoton4, this.posYBoton4, 20, 20);
    image(this.imagenSonido2, this.posXBoton5, this.posYBoton4, 20, 20);
    //rect(this.posXBoton4, this.posYBoton4, 20, 20);
    //rect(this.posXBoton5, this.posYBoton4, 20, 20);
    this.objJuego.dibujar();
    this.objJuego.teclaPresionada();
  }
  

  pantallaInicio() {
    image(this.imagen, this.posX, this.posY, this.ancho, this.alto);

    this.botones.dibujarBoton(this.posXBoton1, this.posYBoton1, "Comenzar");
    this.botones.dibujarBoton(this.posXBoton2, this.posYBoton2, "Tutorial");
    this.botones.dibujarBoton(this.posXBoton3, this.posYBoton3, "Creditos");
    //titulo
    textAlign(LEFT, LEFT);
    textFont(this.fuente);
    stroke(this.strokeTitulo);
    strokeWeight(2);
    textSize(this.tamTitulo);
    fill(this.colorTitulo);
    text("El toque de Chimuelo : \n   La caza final", this.posXTitulo, this.posYTitulo, this.fuente);
    //subtitulo
    textSize(this.tamSubtitulo);
    textFont(this.fuente2);
    text("hola soy el subtitulo", this.posXSubtitulo, this.posYSubtitulo);
  }

  pantallaCreditos() {
    this.fondoPantallas();

    this.botones.dibujarBoton(this.posXBoton3, this.posYBoton3, "Inicio");
    //titulo
    textSize(this.tamTitulo);
    fill(255);
    noStroke();
    textFont(this.fuente2);
    text("pantalla de creditos", this.posXTitulo, this.posYTitulo);
    //subtitulo
    textSize(this.tamSubt);
    text("Jimena Aylen Marazzi - Maria Elena Molina \n\nComision tres = David Bedoian - Lisandro Aguiar ", this.posXSubt, this.posYSubt);
  }

  pantallaTutorial() {
    this.fondoPantallas();
    //titulo
    textFont(this.fuente2);
    fill(255);
    textSize(this.tamTitulo);
    text("Atrapa a la oveja antes de que escape", this.posXTitulo, this.posYTitulo);
    //subtitulo
    textSize(this.tamSubt);
    text("Movete de izquierda a derecha utilizando las flechas del teclado\n\n y utiliza las escaleras para perseguir a tu presa.", this.posXSubt, this.posYSubt);
    this.botones.dibujarBoton(this.posXBoton3, this.posYBoton3, "Inicio");
  }

  pantallaGanaste() {
    this.fondoPantallas();
    //titulo
    textFont(this.fuente2);
    fill(255);
    textSize(this.tamTitulo);
    text("Ganaste", this.posXTitulo, this.posYTitulo);
    //subtitulo
    textSize(this.tamSubt);
    text("Chimuelo esta muy contento por tu victoria...", this.posXSubt, this.posYSubt);
    this.botones.dibujarBoton(this.posXBoton3, this.posYBoton3, "Reiniciar");
  }

  pantallaPerdiste() {
    this.fondoPantallas();
    //titulo
    textFont(this.fuente2);
    fill(255);
    textSize(this.tamTitulo);
    text("Perdiste", this.posXTitulo, this.posYTitulo);
    //subtitulo
    textSize(this.tamSubt);
    text("Dejaste escapar a la oveja \n\n Chimuelo esta muy triste por tu derrota", this.posXSubt, this.posYSubt);
    this.botones.dibujarBoton(this.posXBoton3, this.posYBoton3, "Reiniciar");
  }

  fondoPantallas() { //aca cargo imagenes y cosas que repito en todas las pantallas menos la ppal
    image(this.imagen, this.posX, this.posY, this.ancho, this.alto);
    noStroke();
    fill(this.opacidad);
    rect(0, 50, 640, 150);
  }


  logicaPantallas() {
    if (this.estado === "inicio") {

      if (this.botones.colisionBoton(this.posXBoton1, this.posYBoton1)) {

        this.estado = "juego";
        this.musicaBoton.play();
        return;
      }

      if (this.botones.colisionBoton(this.posXBoton2, this.posYBoton2)) {

        this.estado = "tutorial";
        this.musicaBoton.play();
        return;
      }
      if (this.botones.colisionBoton(this.posXBoton3, this.posYBoton3)) {

        this.estado = "creditos";
        this.musicaBoton.play();
        return;
      }
    }
    if (this.estado === "ganaste") {
      if (this.botones.colisionBoton(this.posXBoton3, this.posYBoton3)) {

        this.estado = "inicio";
        this.musicaBoton.play();
        return;
      }
    }
    if (this.estado === "tutorial") {
      if (this.botones.colisionBoton(this.posXBoton3, this.posYBoton3)) {

        this.estado = "inicio";
        this.musicaBoton.play();
        return;
      }
    }
    if (this.estado === "creditos") {
      if (this.botones.colisionBoton(this.posXBoton3, this.posYBoton3)) {

        this.estado = "inicio";
        this.musicaBoton.play();
        return;
      }
    }
    if (this.estado === "perdiste") {
      if (this.botones.colisionBoton(this.posXBoton3, this.posYBoton3)) {

        this.estado = "inicio";
        this.musicaBoton.play();
        return;
      }
    }
    if (this.estado === "juego") {
      if (this.botones.colisionBoton(this.posXBoton4, this.posYBoton4)) {
        if (!this.fondoSon.isPlaying()) { //no ta reprod
          this.fondoSon.play();
          console.log("sonido si");
        }
      }
      if (this.botones.colisionBoton(this.posXBoton5, this.posYBoton5)) {
        if (this.fondoSon.isPlaying()) { //si ta reprod
          this.fondoSon.pause();
          console.log("sonido no");
        }
      }
    }
  }
}
