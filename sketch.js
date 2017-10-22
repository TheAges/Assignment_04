var S = 15,
    T = 0,
    W = 1,
    a = true;
    click=false;
    first=true;
    col = "black",
    back = "#272727";
    randomColor = ["#34ea27","#f9f213", "#f98512", "#f93c12", "#f91289", "#f13df7", "#2511ff", "#35b1ff", "#30ffc4"]

function setup() {
  createCanvas(windowWidth,windowHeight);
  textAlign(CENTER);
  background(245)
  strokeCap(ROUND);
  strokeJoin(ROUND);
  strokeWeight(S);
  noFill()
  col = (random(randomColor));
  if (windowWidth > windowHeight) {W = windowHeight/500} else {W = windowWidth/500}
}

function draw() {

translate(width/2,height/2)
scale(W)

T++

background(back)

if (first==true) {fill(col); text("Click to toggle easy mode",0,500*0.41); text("Design by TokyoFlash",0,500*0.44) }

if (click==true) {
 
first=false;

scale(0.2)
 push()
 translate(-1.7*500,0);
 stroke(100)
 polygon(0, 0, 200, 6);
 cerchio1()
 pop()
 
 push()
 translate(-0.7*500,0);
 stroke(100)
 polygon(0, 0, 200, 6);
 cerchio2()
 pop()
 
 push()
 translate(0.7*500,0);
 stroke(100)
 polygon(0, 0, 200, 6);
 cerchio3()
 pop()
 
 push()
 translate(1.7*500,0);
 stroke(100)
 polygon(0, 0, 200, 6);
 cerchio4()
 pop()
 
 push()
 trattini()
 pop()
 
}

else {
 
push()
cerchio1()
pop()

push()
scale(0.75);
strokeWeight(S*1.25);
cerchio2()
pop()

push()
scale(0.5);
strokeWeight(S*2);
cerchio3()
pop()

push()
scale(0.25);
strokeWeight(S*4);
cerchio4()
pop()


}

}

function mouseReleased() {click = !click}

function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function cerchio1() {
 //stroke("red")
 strokeWeight(S);
 if (hour()>19) {due()}
 else if (hour()>10) {uno()}
 else {zero()}
  
 }
 
 function cerchio2() {
 // stroke("blue")

  if (hour()==0) {zero()}
  if (hour()==1) {uno()}
  if (hour()==2) {due()}
  if (hour()==3) {tre()}
  if (hour()==4) {quatro()}
  if (hour()==5) {cinque()}
  if (hour()==6) {sei()}
  if (hour()==7) {sette()}
  if (hour()==8) {otto()}
  if (hour()==9) {nove()}
  if (hour()==10) {zero()}
  if (hour()==11) {uno()}
  if (hour()==12) {due()}
  if (hour()==13) {tre()}
  if (hour()==14) {quatro()}
  if (hour()==15) {cinque()}
  if (hour()==16) {sei()}
  if (hour()==17) {sette()}
  if (hour()==18) {otto()}
  if (hour()==19) {nove()}
  if (hour()==20) {zero()}
  if (hour()==21) {uno()}
  if (hour()==22) {due()}
  if (hour()==23) {tre()}
  
 }
 
 function cerchio3() {
 //stroke("green")

 if (minute()>49) {cinque()}
 else if (minute()>39) {quatro()}
 else if (minute()>29) {tre()}
 else if (minute()>19) {due()}
 else if (minute()>9) {uno()}
 else {zero()}
  
 }
 
 function cerchio4() {
 //stroke("yellow")

 if (minute()==0) {zero()}
 if (minute()==1) {uno()}
 if (minute()==2) {due()}
 if (minute()==3) {tre()}
 if (minute()==4) {quatro()}
 if (minute()==5) {cinque()}
 if (minute()==6) {sei()}
 if (minute()==7) {sette()}
 if (minute()==8) {otto()}
 if (minute()==9) {nove()}
 if (minute()==10) {zero()}
 if (minute()==11) {uno()}
 if (minute()==12) {due()}
 if (minute()==13) {tre()}
 if (minute()==14) {quatro()}
 if (minute()==15) {cinque()}
 if (minute()==16) {sei()}
 if (minute()==17) {sette()}
 if (minute()==18) {otto()}
 if (minute()==19) {nove()}
 if (minute()==20) {zero()}
 if (minute()==21) {uno()}
 if (minute()==22) {due()}
 if (minute()==23) {tre()}
 if (minute()==24) {quatro()}
 if (minute()==25) {cinque()}
 if (minute()==26) {sei()}
 if (minute()==27) {sette()}
 if (minute()==28) {otto()}
 if (minute()==29) {nove()}
 if (minute()==30) {zero()}
 if (minute()==31) {uno()}
 if (minute()==32) {due()}
 if (minute()==33) {tre()}
 if (minute()==34) {quatro()}
 if (minute()==35) {cinque()}
 if (minute()==36) {sei()}
 if (minute()==37) {sette()}
 if (minute()==38) {otto()}
 if (minute()==39) {nove()}
 if (minute()==40) {zero()}
 if (minute()==41) {uno()}
 if (minute()==42) {due()}
 if (minute()==43) {tre()}
 if (minute()==44) {quatro()}
 if (minute()==45) {cinque()}
 if (minute()==46) {sei()}
 if (minute()==47) {sette()}
 if (minute()==48) {otto()}
 if (minute()==49) {nove()}
 if (minute()==50) {zero()}
 if (minute()==51) {uno()}
 if (minute()==52) {due()}
 if (minute()==53) {tre()}
 if (minute()==54) {quatro()}
 if (minute()==55) {cinque()}
 if (minute()==56) {sei()}
 if (minute()==57) {sette()}
 if (minute()==58) {otto()}
 if (minute()==59) {nove()}
  
 }

function uno() {
 stroke(back);
 fill(back);
 polygon(0, 0, 194, 6);
 
 stroke(col);
 noFill();
 beginShape();
  vertex(-100, -170);
  vertex(-200, 0);
  vertex(-100,170)
 endShape();
}
 
function due() {
 stroke(back);
 fill(back);
 polygon(0, 0, 194, 6);
 
 stroke(col);
 noFill();
 beginShape();
  vertex(-100, -170);
  vertex(100, -170);
  vertex(200, 0);
  vertex(-200, 0);
  vertex(-100, 170);
  vertex(100,170)
 endShape();
}
 
function tre() {
 stroke(back);
 fill(back);
 polygon(0, 0, 194, 6);
 
 stroke(col);
 noFill();
 beginShape();
  vertex(-100, -170);
  vertex(100, -170);
  vertex(200, 0);
  vertex(-200, 0);
  vertex(200, 0);
  vertex(100,170);
  vertex(-100, 170);
 endShape();
}
 
function quatro() {
 stroke(back);
 fill(back);
 polygon(0, 0, 194, 6);
 
 stroke(col);
 noFill();
 beginShape();
  vertex(-100, -170);
  vertex(-200, 0);
  vertex(200, 0);
  vertex(100, -170);
  vertex(200, 0);
  vertex(100, 170);
 endShape();
}

function cinque() {
 stroke(back);
 fill(back);
 polygon(0, 0, 194, 6);
 
 stroke(col);
 noFill();
 beginShape();
   vertex(100, -170);
  vertex(-100,-170);
  vertex(-200,0);
  vertex(200,0);
  vertex(100,170);
  vertex(-100,170);
  endShape();
}
 
function sei() {
 stroke(back);
 fill(back);
 polygon(0, 0, 194, 6);
 
 stroke(col);
 noFill();
  beginShape();
  vertex(100, -170);
  vertex(-100,-170);
  vertex(-200,0);
  vertex(-100,170);
  vertex(100,170);
  vertex(200,0);
  vertex(-200,0);
 endShape();
}
 
function sette() {
 stroke(back);
 fill(back);
 polygon(0, 0, 194, 6);
 
 stroke(col);
 noFill();
  beginShape();
  vertex(-100, -170);
  vertex(100,-170);
  vertex(200,0);
  vertex(100,170);
 endShape();
}
 
function otto() {
 stroke(back);
 fill(back);
 polygon(0, 0, 194, 6);
 
 stroke(col);
 noFill();
  beginShape();
  vertex(-200, 0);
  vertex(-100,170);
  vertex(100,170);
  vertex(200,0);
  vertex(-200,0);
  vertex(-100,-170);
  vertex(100,-170);
  vertex(200,0);
 endShape();
}
 
function nove() {
 stroke(back);
 fill(back);
 polygon(0, 0, 194, 6);
 
 stroke(col);
 noFill();
  beginShape();
  vertex(200, 0);
  vertex(100, -170);
  vertex(-100, -170);
  vertex(-200, 0);
  vertex(200, 0);
  vertex(100, 170);
  vertex(-100, 170);

 endShape();
}
 
function zero() {
 stroke(back);
 fill(back);
 polygon(0, 0, 194, 6);
 
 stroke(col);
 noFill();
  beginShape();
  vertex(-200, 0);
  vertex(-100, -170);
  vertex(100, -170);
  vertex(200, 0);
  vertex(100, 170);
  vertex(-100,170)
  vertex(-200, 0);
 endShape();
}

function trattini() {
 
 if (T % 30 == 0) {a=!a}
 if (a != true) {stroke(col)} else {stroke(back)}
 noFill();
 beginShape();
  vertex(0, -100);
  vertex(0, -25);
 endShape();
 beginShape();
  vertex(0, 25);
  vertex(0, 100);
 endShape();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  
 if (windowWidth > windowHeight) {W = windowHeight/500} else {W = windowWidth/500}
}

 
 
/*  OLD:

// 1 ore seconda
 scale(0.75)
 beginShape();
  vertex(350, 80);
  vertex(450, 250);
  vertex(350,420)
 endShape();
 
   // 2 ore seconda
 beginShape();
  vertex(150, 80);
  vertex(350, 80);
  vertex(450, 250);
  vertex(50, 250);
  vertex(150, 420);
  vertex(350,420)
 endShape();
 
 
  push()
  polygon(0, 0, 200, 6)
  polygon(0, 0, 150, 6)
  polygon(0, 0, 100, 6)
  polygon(0, 0, 50, 6)
  pop()
  line(0,250,500,250)
  
 */