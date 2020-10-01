const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,540,80,80);
    box2 = new Box(800,540,80,80);
    box3 = new Box(1000,490,80,80);
    box4 = new Box(800,490,80,80);
    box5 = new Box(900,450,80,80);

    pig1 = new Pigs(900,540);
    pig2 = new Pigs(900,490);

    log1 = new Log(900,500,300,PI/2);
    log2 = new Log(900,450,300,PI/2); 
    log3 = new Log(850,330,200,PI/7);
    log4 = new Log(950,330,150,-(PI/7));


    bird = new Bird(200,300);

    ground = new Ground(600,height,1200,20)
}

function draw(){
    background("skyblue");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    
    ground.display();

    pig1.display();
    pig2.display();

    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird.display();

}