
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(width/2,670,width,20)
	paper=new Ball(200,450,40)
	leftwall=createSprite(width-200,650,20,100)
	 leftwall.shapeColor="red"
	 leftbox=Bodies.rectangle(width-180,650,20,100,{isStattic:true})
	 World.add(world,leftbox)
	 
	 rightwall=createSprite(width-100,650,20,100)
	 rightwall.shapeColor="red"
	 rightbox=Bodies.rectangle(width-80,650,20,100,{isStattic:true})
     World.add(world,rightbox)

	 basewall=createSprite(width-150,670,200,20)
	 basewall.shapeColor="red"
	 basebox=Bodies.rectangle(width-150,670,200,20,{isStattic:true})
     World.add(world,basebox)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
	
  paper.display()
  ground.display()

  drawSprites();
 
}


function keyPressed() { if (keyCode === UP_ARROW) { Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85}); } }
