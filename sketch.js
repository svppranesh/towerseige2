const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

var polygon1;
function preload(){
  polygonImage=loadImage("polygon.png");
}


function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 var options={
  'restitution':0.8,
  'friction':1.0,
  'density':1.0

 }

 
 engine=Engine.create();
  world=engine.world;

  polygon1=Bodies.rectangle(100,200,10,10,options);
  World.add(world,polygon1);

  slingshot=new SlingShot(this.polygon1,{x:200,y:200});

base=new Ground(330,270,300,10);

//tower siege
//level 1
block1=new Box(330,235,30,40);
block2=new Box(360,235,30,40);
block3=new Box(390,235,30,40);
block4=new Box(420,235,30,40);
block5=new Box(450,235,30,40);

//level 2
block6=new Box(360,195,30,40);
block7=new Box(390,195,30,40);
block8=new Box(420,195,30,40);

//block3
block9=new Box(375,155,30,40);
block10=new Box(405,155,30,40);

//block4
block11=new Box(390,115,30,40);


}

function draw() {
  background("white"); 

  Engine.update(engine);

  imageMode(CENTER);
  image(polygonImage,polygon1.position.x,polygon1.position.y,30,30);

  
  base.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  slingshot.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(polygon1, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode===32){
   slingshot.attach(polygon1);   
  }
}