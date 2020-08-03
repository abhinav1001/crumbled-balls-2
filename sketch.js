
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	part1=new dustbin(920,580,20,200);
	
	paperball=new paper(500,600);
	paperball.scale=0.5;
	
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  part1.display();
  part2.display();
  part3.display();
  paperball.display();
  drawSprites();
 }

/*function keypressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperballObject.this.body,paperObject.body.position,{x:85,y:-85});
    paperball.velocityx=5;
}
}*/


