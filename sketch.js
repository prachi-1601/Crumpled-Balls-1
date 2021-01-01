
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1, ball, left, bottom, right;



function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new ground(600, 670, 1200, 30);

	bottom = new dustbin(1000, 625, 200, 20);
	left = new dustbin(900, 620, 20, 100);
	right = new dustbin(1100, 620, 20, 100);

	ball = new paper(200, 620, 2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground1.display();
  bottom.display();
  left.display();
  right.display();
  ball.display();

  keyPressed();
  //drawSprites();
 

}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {
			x: 12, 
			y: -13
		});
	}
}

