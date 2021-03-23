var bg,bgImg
var batter,batterImg

function preload() {
  bgImg=loadImage("Images/Background.jpg")
  batterImg=loadImage("Images/Virat Kohli 2.jpg")
}

function setup() {
  createCanvas(1200,1200);
  batter = createSprite(610, 1060, 50, 50);
  batter.addImage("batterImg", batterImg)
}

function draw() {

  background(bgImg);
  text(mouseX+","+mouseY,mouseX,mouseY)
  












  drawSprites();
}