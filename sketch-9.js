function setup() { 
  createCanvas(400, 400);
  background(0);
  stroke(255);
  

  for(var a = 20; a <= 380; a += 20) {
  line(a,20,20,a);
  }
  
  for(var b = 20; b <= 380; b += 20) {
    line(380,b,b,380);
  }
} 

function draw() { 
  textSize(200)
  noStroke();
  textAlign(CENTER,CENTER);
  text("P",200,200)
}
