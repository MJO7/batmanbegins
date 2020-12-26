const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var x;
var batman, thunderbolt;
var batmanAnimation, thunderboltAnimation;
var plinkos = [];
function preload() {}

function setup() {
  createCanvas(800, 1600);

  engine = Engine.create();
  world = engine.world;
  // batman = createSprite(400, 1200, 10, 10);
  // batman.addAnimation("batmanAnimation", batmanAnimation);
  // log = createSprite(400, 800, 600, 10);

  batman = new Umbrella(400, 1000, 600, 550);
  // for (var j = 0; j < 5; j++) {
  //   plinkos.push(new Drop(random(0, 800), random(0, 800)));
  // }
  for (var i = 0; i < 100; i++) {
    drops = new Drop(random(0, 800), random(0, 1000), 10, 10);
  }
}

function draw() {
  background("black");
  drawSprites();
  Engine.update(engine);
  // for (var i = 0; i < 5; i++) {
  //   drops = createSprite(random(0, 800), random(0, 100), 10, 10);
  //   drops.shapeColor = "blue";
  //   drops.velocityY = 12;
  // }
  // drops.collide(log);
  batman.display();

  drops.display();
}
