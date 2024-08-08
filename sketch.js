function setup() {
  createCanvas(400, 400);
   background("purple");
}

function draw() {
  
  stroke("black");
  fill("pink");
  
  // console.log(mouseIsPressed);
       
  if (mouseIsPressed) {  
    rect(mouseX, mouseY, 30, 35);
  }
 }
