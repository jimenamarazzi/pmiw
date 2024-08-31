//JIMENA AYLEN MARAZZI
//COM3
//VIDEO: https://youtu.be/3Vvq83kyseI


let i;
let r;
let cant;
let ok = true;
let ilusion;
let estado = 0;
let verde1;
let verde2;
let verde3;
let verde;
let verdeclaro;
let elcoso;

function preload() {
  ilusion = loadImage("data/ilusion.jpg"); // Carga la imagen antes del setup
}

function setup() {
  verde1 = 30;
  verde2 = 70;
  verde3 = 60;
  createCanvas(800, 400);
  noFill();
  verdeclaro = color(169, 250, 233);
}

function efect(r, a) {
  let c;
  
  if (estado == 0) {
    strokeWeight(2);
    c = 0;
    for (i = a; i <= 360; i += a) {
      push();
      rotate(radians(i));
      if (c % 2 == 0)
        stroke(70);
      else
        stroke(255);

      rect(20, r, 12, 12);
      pop();
      c++;
    }
  }

  if (elcoso == true) {
    if (verde1 > 114) verde1 = 114;
    if (verde2 > 240) verde2 = 240;
    if (verde3 > 214) verde3 = 214;
    
    verde1 += 1;
    verde2 += 1;
    verde3 += 1;
    
    fill(verde1, verde2, verde3);
    strokeWeight(2);
    c = 0;
    for (i = a; i <= 360; i += a) {
      push();
      rotate(radians(i));
      if (c % 2 == 0)
        stroke(70);
      else
        stroke(255);

      rect(20, r, 12, 12);
      pop();
      c++;
    }
  } else {
    verde1 = 30;
    verde2 = 70;
    verde3 = 60;
  }
}

function draw() {
  elcoso = teclad();
  background(155);
  image(ilusion, 0, 0, 400, 400);
  translate(600, 200);
  
  efect(35, 20);
  efect(75, 12);
  efect(110, 9);
  efect(155, 6);
}

function teclad() {
  if (keyIsPressed) {
    if (key === 'v') {
      return true;
    } else {
      return false;
    }
  }
  return false; // Valor de retorno para cuando no se presiona ninguna tecla
}
