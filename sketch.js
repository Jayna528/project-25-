
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Paper;
var paperImage;
var ground1;
var dustbin1, dustbin2, dustbin3;
var trashCanImage;


function preload(){
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Paper = new paper(100,630,50);
	ground1 = new Ground(400,680,1000,10);
	dustbin1 = new Dustbin(600, 650, 200, 20);
	dustbin2 = new Dustbin(500, 570, 20, 200);
	dustbin3 = new Dustbin(700, 570, 20, 200);

}


function draw() {
  rectMode(CENTER);
  background(255,255,255);

  Paper.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Paper.body, Paper.body.position, {x: 150 , y: -165})
	}
}




