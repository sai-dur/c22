const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

   ground= Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
var ball_options={
    'restitution':1.0
}
   ball=Bodies.rectangle(50,100,50,50,ball_options)
   World.add(world,ball)

   var ball1_options={
    'restitution':1.0
   }
ball1=Bodies.circle(100,100,30,ball1_options)
World.add(world,ball1)
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,30);
    ellipse(ball1.position.x,ball1.position.y,30,30)
    rect(ball.position.x,ball.position.y,40,40);
}
