const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;

//Declare an array for arrows playerArrows = [ ]


var arrow;
var arrows = [];


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
  playerArcher = new PlayerArcher(
    340,
    playerBase.body.position.y - 180,
    120,
    120
  );

  computerBase = new ComputerBase(
    width - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    width - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );
  computerArcher = new ComputerArcher(
    width - 340,
    computerBase.body.position.y - 180,
    120,
    120
  );
  
 


}

function draw() {
  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

 
  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()


 // Use for loop to display arrow using showArrow() function
 for(var i = 0;i < arrows.length;i++){
    showArrows(arrows[i],i);
}


}

function keyPressed() {

  if(keyCode === 32){
    var posX = playerArcher.body.position.x;
    var posY = playerArcher.body.position.x

    arrow = new PlayerArrow(posX,posY,50,10);

    arrows.push(arrow);

  }
}

function keyReleased () {

  if(keyCode === 32){
    
    arrows[arrows.length - 1].shoot(playerArcher.body.angle + 90);

  }


}
//Display arrow and Tranjectory
function showArrows(sparrows,index) {
  sparrows.display();

}
