
//estilo y posicion de botones
function dibujarBoton(posX, posY, texto) {
  push();


  if (colisionBoton(posX, POSYBOTON, ANCHOBOTON, ALTOBOTON)) {
    fill(BLANCO);
    
    
  } else {
    noFill();

  }
  //boton
  stroke(ROJO);
  strokeWeight(3);
  rect(posX, posY, ANCHOBOTON, ALTOBOTON, REDONDEO);

  //texto del boton
  textAlign(CENTER, CENTER);
  fill(ROJO);
  strokeWeight(0);
  textStyle(BOLD);
  textSize(14);
  text(texto, posX+ANCHOBOTON/2, posY+ALTOBOTON/2);
  pop();
}



//donde apretar botones
function colisionBoton(posX, posY, ancho, alto) {
  return mouseX > posX && mouseX < posX + ancho && mouseY > posY && mouseY < posY + alto;
}

//estilos y ubicaciones y carga de imagenes en las pantallas
function mostrarPantalla( numPantalla_ ) {
 // push();
  //imagen de fondo:
  image( imgs[numPantalla_], 0, 0, width, height);
  

push();
  //texto y opciones:
  textFont(otraFuente);
  fill(255);
  textAlign( RIGHT, RIGHT);
  textSize(16);
  textStyle(BOLD);
  stroke(70);
  text( textos[numPantalla_], POSXDESC, POSYDESC, ANCHODESC);
  //text(opciones[numPantalla_], POSXOPC, POSYOPC, ANCHOOPC);
  
   //opciones
  fill(255);
  textAlign( RIGHT, RIGHT);
  textSize(16);
  textStyle(BOLD);
  stroke(70);
  text(opciones[numPantalla_], POSXOPC, POSYOPC, ANCHOOPC);

//preguntas
  fill(ROJO);
  textStyle(BOLD);
  stroke(255);
  strokeWeight(2);
  textAlign(RIGHT, RIGHT);
  textSize(22);
  text(preguntas[numPantalla_], POSXPREG, POSYPREG, ANCHOPREG);
 pop();

  //titulos
  textFont (miFuente); //cargo fuente
  fill(ROJO);
  textStyle(BOLD);
  stroke(255);
  strokeWeight(2);
  textAlign(RIGHT, RIGHT);
  textSize(23);
  text(titulos[numPantalla_], POSXTITULO, POSYTITULO, ANCHOTITULO);




 // pop();
}
