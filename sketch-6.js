function setup() { 
  createCanvas(400, 400);
} 

function draw() { 
  noStroke();
  background(0);
  
  for(var y = 20; y <= 400; y = y+20) {
      if(y <= 200) {
        for(var x = y; x <= 400-y; x = x+20){
           ellipse(x,y,20,20);
      }
    } else{
        for(var x = 400-y; x <= y; x = x+20){
        ellipse(x,y,20,20);
      }
    }
  }
}
