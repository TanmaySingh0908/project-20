var  car,wall,light;
var speed,weight;
var carImage;


function setup() {
  createCanvas(1600,400);
 speed = Math.round(random(55,90));
 weight = Math.round(random(400,1500));

 car = createSprite(50,200,50,50);
 wall = createSprite(1000,200,60,120);
 light = createSprite(1000,50,50,50);

car.velocityX = speed;

}

function draw() {
  background("black");  

if (wall.x-car.x < wall.width/2+car.width/2){
car.velocityX = 0;
  var deformation = 0.5 * weight * speed * speed/22509;

  if (deformation > 180){
    light.shapeColor = "red";
  }
if (deformation < 180 && deformation > 100){
  light.shapeColor = "orange";
}
if (deformation < 100){
  light.shapeColor = "green";
}

}

  drawSprites();
}