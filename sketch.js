
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var hammer;
var rock1;
var rubber1;
var iron1;

function setup() {
  var canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;


	ground = new Ground (600,height,1200,20);
  rock1 = new Rock(700,320,35,35);
  rubber1 = new Rubber(600,20,30);
  iron1 = new Iron(750,340,35,35);
  
  
  hammer = new Hammer(50, 200, 30,50);

	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background('lightblue');
  Engine.update(engine);

  ground.display();
  hammer.display();
  rock1.display();
  rubber1.display();
  iron1.display();
  
 
}



