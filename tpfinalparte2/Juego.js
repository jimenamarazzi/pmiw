class Juego {
  constructor(pantallas) {
    this.escenario = new Escenario();
    //this.botones = new Botones();
    this.chimuelo = new Chimuelo();
    this.oveja = new Oveja();
    this.pantallas = pantallas;

    this.escalera1Usada = false;
    this.escalera2Usada = false;
    this.escalera1UsadaOveja = false;
    this.escalera2UsadaOveja = false;
  }

  dibujar() {
    this.escenario.dibujarPisos();
    //this.escenario.dibujarBonus();
    this.escenario.dibujarEscaleras();
    this.escenario.perder();
    this.chimuelo.teclaPresionada();
    this.chimuelo.subir();
    this.verificarColision();
    this.chimuelo.dibujar();
    this.oveja.dibujar();
    this.oveja.mover();
    this.oveja.subir();
  }

  reiniciarJuego() {
    console.log("reinicio el juego");
    this.chimuelo.posX = 30;
    this.chimuelo.posY = 360;
    this.chimuelo.movX = true;
    this.chimuelo.usandoEscalera = false;
    this.escalera1Usada = false;
    this.escalera2Usada = false;
    this.escalera1UsadaOveja = false;
    this.escalera2UsadaOveja = false;
    this.pantallas.fondoSon.pause();

    this.oveja.reiniciar(); // Llama al método reiniciar de la oveja
  }


  teclaPresionada() {
    this.chimuelo.teclaPresionada();
  }

  verificarColision() {
    if (!this.chimuelo.usandoEscalera && !this.oveja.usandoEscalera && this.chimuelo.colisionChimuelo(this.oveja.posX, this.oveja.posY, this.oveja.anchoOv, this.oveja.altoOv)) {
      console.log("tocaste a la oveja");
      this.pantallas.estado = "ganaste"
      this.reiniciarJuego();
    }
    if (!this.chimuelo.usandoEscalera) {
      if (!this.escalera1Usada && this.chimuelo.colisionChimuelo(this.escenario.posXEsc1, this.escenario.posYEsc1, this.escenario.anchoEsc, this.escenario.altoEsc)) {
        console.log("detecta escalera1");
        this.escalera1Usada = true;
        this.chimuelo.subiendo = true;
        this.chimuelo.movX = false;
        this.chimuelo.limiteSubida = this.escenario.posYsegundoPiso - 90; //piso 2
        this.chimuelo.usandoEscalera = true;
      }
      if (!this.escalera2Usada && this.chimuelo.colisionChimuelo(this.escenario.posXEsc2, this.escenario.posYEsc2, 15, this.escenario.altoEsc)) {
        console.log("detecta escalera2");
        this.escalera2Usada = true;
        this.chimuelo.subiendo = true;
        this.chimuelo.movX = false;
        this.chimuelo.limiteSubida = this.escenario.posYtercerPiso - 90; //piso 3
        this.chimuelo.usandoEscalera = true;
      }
    }
    if (!this.oveja.usandoEscalera) {
      if (!this.escalera1UsadaOveja && this.oveja.colisionOveja(this.escenario.posXEsc1, this.escenario.posYEsc1, this.escenario.anchoEsc, this.escenario.altoEsc)) {
        console.log("oveja detecto escalera1");
        this.escalera1UsadaOveja = true;
        this.oveja.subiendo = true;
        this.oveja.movX = false;
        this.oveja.limiteSubida = this.escenario.posYsegundoPiso - 60;
        this.oveja.usandoEscalera = true;
      }
      if (!this.escalera2UsadaOveja && this.oveja.colisionOveja(this.escenario.posXEsc2, this.escenario.posYEsc2, 10, this.escenario.altoEsc)) {
        console.log("oveja detecto escalera2");
        this.escalera2UsadaOveja = true;
        this.oveja.subiendo = true;
        this.oveja.movX = true;
        this.oveja.limiteSubida = this.escenario.posYtercerPiso - 60;
        this.oveja.usandoEscalera = true;
        console.log("gracias a esto me muevo a la derecha");
        this.oveja.imgActual = 0;
      }
    }
    if (this.oveja.colisionOveja(this.escenario.posXPerder, this.escenario.posYPerder, this.escenario.anchoPerder, this.escenario.altoPerder)) {
      this.pantallas.estado = "perdiste";
      console.log ("perdiste");
      this.reiniciarJuego();
    }
  }
}
