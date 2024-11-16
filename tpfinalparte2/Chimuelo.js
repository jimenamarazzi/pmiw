class Chimuelo {
  //lo que te va a permitir armar las caracteristicas
  constructor() {
    //cuales van a ser esas caracteristicas

    this.posX = 30;
    this.posY = 360;
    this.miColor = color(43, 4, 52);
    this.anchoChim = 100;
    this.altoChim = 100;
    this.imagen = imgChimuelo;
    this.imgActual = imgActual;
    this.subiendo = false;
    this.incrementoPosX = 3.4;
    this.incrementoPosY = 0;
    this.movX = true;
    this.usandoEscalera = false;
  }
  //acciones
  dibujar() {
    image(this.imagen[this.imgActual], this.posX, this.posY, this.anchoChim, this.altoChim);
  }



  teclaPresionada() {
    if (!this.usandoEscalera) {
      if (this.movX) {
        if (keyIsPressed && keyCode == LEFT_ARROW) {
          this.moverIzquierda();
          this.imgActual = 0;
        } else if (keyIsPressed && keyCode == RIGHT_ARROW ) {
          this.moverDerecha();
          this.imgActual = 1;
        }
      }
    }
  }


  moverDerecha() {
    if (this.posX<width-this.anchoChim) {
      this.posX+= this.incrementoPosX;
    }
  }

  moverIzquierda() {
    if (this.posX>0) {
      this.posX-= this.incrementoPosX;
    }
  }

  colisionChimuelo(posX, posY, ancho, alto) {
    let margenVertical = 10;
    return(this.posX < posX + ancho && this.posX + this.anchoChim/2 > posX && this.posY < posY + alto && this.posY + this.altoChim > posY);
    //cuando cambie la colision a la de oveja el ancho de chim pasa a ser 70

  }

 subir() {
    if (this.subiendo) {
      this.posY -= 2; // Velocidad de subida
      if (this.posY <= this.limiteSubida) {
        this.subiendo = false;
        this.movX = true;
        this.posY = this.limiteSubida; //limite para subir
        this.usandoEscalera = false; //ya no usa la escalera?
        console.log("ya se puede mover en x");
      }
    }
  }
}
