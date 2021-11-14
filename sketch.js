const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg = "bg.png";
var backgroundImg;
var hero;
var monster;
var ground;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19; 

function preload() {
  backgroundImg = loadImage(bg);
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  hero=new Hero(225,375);
  ground=new Ground(400,500)
  monster= new Monster(700,200)

  b1= new Block(400, 100);
  b2= new Block(400, 140);
  b3= new Block(450, 180);
  b4= new Block(450, 220);
  b5= new Block(550, 260);
  b6= new Block(550, 300);
  b7= new Block(550, 60);
  b8= new Block(500, 100);
  b9= new Block(500, 140);
  b10=new Block(500, 60);
  b11= new Block(500, 180);
  b12= new Block(500, 220);
  b13= new Block(400, 60);
  b14= new Block(400, 100);
  b15= new Block(450, 140);
  //b16= new Block(450, 180);
  b17= new Block(450, 220);
  b18= new Block(450, 260);
  b19= new Block(450, 300);



  chain=new Chain(hero.body,{x:200,y:100});

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  hero.display();
  ground.display();
  monster.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  //b16.display();
  b17.display();
  b18.display();
  b19.display();


  chain.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}