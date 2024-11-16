//estilo y posicion de botones

class Botones {
  constructor() {
    //this.posX = 300;
    //this.posY = 240;
    this.anchoBoton = 100;
    this.altoBoton = 50;
    this.redondeo = 100;
    this.miColor = color(233, 31, 10);
    this.colorTexto = color(255);
    this.texto = "";
    this.fuente = fuenteBoton;
    this.opacidad = color (0, 0, 0, 85);
  }

  dibujarBoton(posX, posY, texto) {

    if (this.colisionBoton(posX, posY)) {
      fill(this.miColor);
    } else {
      fill(this.opacidad);
    }

    //boton estetica
    stroke(this.miColor);
    strokeWeight(3);
    this.posX=posX;
    this.posY=posY;
    rect(this.posX, this.posY, this.anchoBoton, this.altoBoton, this.redondeo);

    //texto del boton
    push();
    textAlign(CENTER, CENTER);
    textFont(this.fuente);
    fill(this.colorTexto);
    strokeWeight(0);
    textStyle(BOLD);
    textSize(14);
    this.texto = texto;
    text(this.texto, posX+this.anchoBoton/2, posY+this.altoBoton/2);
    pop();
  }


  colisionBoton(posX, posY) {

    return mouseX > posX && mouseX < posX + this.anchoBoton && mouseY > posY && mouseY < posY + this.altoBoton;
  }
}
