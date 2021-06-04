const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box();
    
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    box1.display();
   
}