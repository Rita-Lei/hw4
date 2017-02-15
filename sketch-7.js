function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  background(225);
  for(var x = 20; x <= width-20; x = x + 20) {
    for(var y = 20; y <= height-20; y = y + 20){
         line(x,20,x,width-20);
         line(20,y,height-20,y);
      fill(0);
       }    
  }
}
