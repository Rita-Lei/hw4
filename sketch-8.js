function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
  stroke(255);
  

  for(var a = 20; a <= 380; a += 20) {
  line(a,20,20,a);
  }
  
  for(var b = 20; b <= 380; b += 20) {
    line(380,b,b,380);
  }
}
