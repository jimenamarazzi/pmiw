class Oveja {
  constructor() {
    //cuales van a ser esas caracteristicas
    this.anchoOv=70;
    this.altoOv=70;
    this.posX = 200;
    this.posY = 390;
    this.miColor = color(255, 229, 249);
    this.imagen = imgOveja;
    this.imgActualOv = imgActualOv;
    this.movimientoXOveja =3.2; //velocidad en x
    this.movimientoYOveja =0; //velocidad en y
    this.subiendo = false;
    this.usandoEscalera = false;
    this.movX = true;
    this.subidas = 0;
  }
  dibujar() {

    image(this.imagen[this.imgActualOv], this.posX, this.posY, this.anchoOv, this.altoOv);
  }

  reiniciar() {
    this.posX = 200;
    this.posY = 390;
    this.movimientoXOveja = 3.2;
    this.subiendo = false;
    this.usandoEscalera = false;
    this.movX = true;
    this.subidas = 0;
    this.imgActualOv = 0;
    console.log("reiniciando oveja");
  }


  mover() {
    if (!this.usandoEscalera) {
      if (this.movX) {
        this.moverDerecha();
        this.posY += this.movimientoYOveja;
      } else {
        this.moverIzquierda();
        this.imgActualOv = 1;
      }
    }
  }



  colisionOveja(posX, posY, ancho, alto) {
    return(this.posX < posX + ancho && this.posX + 10 > posX && this.posY < posY + alto && this.posY + this.altoOv > posY);
  }

  subir() {
    if (this.subiendo) {
      if (this.posY > this.limiteSubida) {
        this.posY -= 2;
      } else {
        this.subiendo = false;
        //  this.movX = false;
        this.usandoEscalera = false;
        console.log("sube");
        this.subidas ++;
        if ( this.subidas ===2) {
          this.imgActualOv = 0;
        }
      }
    }
  }


  moverDerecha() {
    if (this.posX <width - this.anchoOv) {
      this.posX += this.movimientoXOveja;
      this.imgActual=0;
    }
  }

  moverIzquierda() {
    if (this.posX>0) {
      this.posX-= this.movimientoXOveja;
      this.imgActualOv = 1;
    }
  }
}


//subir() {
//if (this.subiendo) {
//  this.posY -= 2; // Velocidad de subida
// if (this.posY <= this.limiteSubida) {
//   this.subiendo = false;
//  this.movX = true;
// this.posY = this.limiteSubida; //limite para subir
/// this.usandoEscalera = false; //ya no usa la escalera?
// console.log("ya se puede mover en x");
//este es el de chimuelo pero lo use como machete pues ya estoy quemada
// }
// }
// }
