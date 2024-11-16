class Escenario {
  constructor() {
    this.posX = 0;
    this.posYprimerPiso = 450;
    this.posYsegundoPiso = 260;
    this.posYtercerPiso = 70;
    this.anchoPiso = 640;
    this.altoPiso = 30;
    this.miColor = color(0);
    this.imagen1 = imgPisos[0];
    this.imagen2 = imgPisos[1];
    this.imagen3 = imgPisos[2];
    this.imagenPuerta = imgPuerta;

    this.imagen = imgEscalera;
    this.posXEsc1 =530;
    this.posYEsc1 =260;
    this.posXEsc2 =40;
    this.posYEsc2 =70;
    this.anchoEsc =80 ;
    this.altoEsc = 200;

    this.posXBonus = 440;
    this.posYBonus = 220;
    this.anchoBonus = 35;
    this.altoBonus = 35;
    this.redondeo = 10;
    
    this.posXPerder = 530;
    this.posYPerder = 10;
    this.anchoPerder = 60;
    this.altoPerder = 70;
      this.escaleras = [{ x: 530, y: 260 },{ x: 40, y: 70 }  ];   // posicion de las escaleras
   
  }

  dibujarPisos() {
    //fill(this.miColor);
    //rect(this.posX, this.posYprimerpiso, 640, 20);
    image(this.imagen1, this.posX, this.posYprimerPiso, this.anchoPiso, this.altoPiso);
     image(this.imagen2, this.posX, this.posYsegundoPiso, this.anchoPiso, this.altoPiso);
    image(this.imagen3, this.posX, this.posYtercerPiso, this.anchoPiso, this.altoPiso);
  }


 dibujarEscaleras() {
    for (let i = 0; i < this.escaleras.length; i++) {
      let escalera = this.escaleras[i];
      image(this.imagen, escalera.x, escalera.y, this.anchoEsc, this.altoEsc);
    }
  }
  //dibujarBonus() {
   // rect(this.posXBonus, this.posYBonus, this.anchoBonus, this.altoBonus, this.redondeo);
 // }

  perder() {
    //fill(222, 13, 187);
    //rect(this.posXPerder, this.posYPerder, this.anchoPerder, this.altoPerder);
    image(this.imagenPuerta, this.posXPerder, this.posYPerder, this.anchoPerder, this.altoPerder);
    //cree esto para saber donde tiene que colisionar la oveja para perder, cuando la pueda hacer mover a la derecha de nuevo, por el momento anda con la colision de chimuelo :/
  }
}
