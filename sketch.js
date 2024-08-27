function setup() {
    createCanvas(600, 600);
    background("rgb(153,153,252)")
  }
  
  function draw() {
    stroke("rgb(245,245,141)");
    fill("pink")
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35)
  }
    
  }
