function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(0);
  noStroke();
for (var x = 20; x <= width - 20; x = x + 20) {
  for(var y = 20; y <= height - 20; y = y + 20){
  ellipse(x,y,20,20);
  }
}
}
