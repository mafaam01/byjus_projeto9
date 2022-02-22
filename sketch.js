var qudrado;



function setup() {
  createCanvas(1920,965);
  quadrado = createSprite(960,420 ,20 ,20)
}

function draw() 
{
  background(30);
  drawSprites()
  if (keyDown("UP")){  
    background("blue")
    quadrado.y = quadrado.y -1
  }
  if (keyDown("LEFT")){
    background("green")
    quadrado.x = quadrado.x -1
  }
  if (keyDown("RIGHT")){
    background("red")
    quadrado.x = quadrado.x +1
  }
  if (keyDown("DOWN")){
    background("yellow")
    quadrado.y = quadrado.y +1
  }
  

  /* if (keyIsDown(DOWN_ARROW)){
    quadrado.y = quadrado.y +1
  }*/



}




