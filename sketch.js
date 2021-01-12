
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	ground1= new ground(400,700,1200,300)
	boy1= new boy(200,500,10)
	stone1= new stone(130,440,10)
	tree1= new tree(800,330,10)
	mango1= new mango(670,280,10)
	mango2= new mango(730,170,10)
	mango3= new mango(790,240,10)
	mango4= new mango(830,140,10)
	mango5= new mango(930,280,10)
	rope1= new rope(stone1.body,{x:130,y:440})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  Engine.update(engine)
 ground1.display()
 boy1.display()
 stone1.display()
 tree1.display()
 mango1.display()
 mango2.display()
 mango3.display()
 mango4.display()
 mango5.display()
 rope1.display()
 detectcollision(stone1,mango1);
 detectcollision(stone1,mango2);
 detectcollision(stone1,mango3);
 detectcollision(stone1,mango4);
 detectcollision(stone1,mango5);
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope1.fly();
}
function keyPressed(){
if(keyCode === 32){
Matter.Body.setPosition(stone1.body,{x:130,y:440})
rope1.attach(stone1.body);
}

}
function detectcollision(stone10,mango10){
mangoBodyPosition=mango10.body.position
stoneBodyPosition=stone10.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=mango10.r+stone10.r){

	Matter.Body.setStatic(mango10.body,false)
}
}
