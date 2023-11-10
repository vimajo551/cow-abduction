//crie as variaveis dos seus personagens aqui
var cow;
var cl;
var cr;
var light, lsprite;
var climberImg, climber, climbersGroup;
var invisibleBlockGroup, invisibleBlock;

function preload() {
  cl = loadAnimation("assets/sprite_04.png", "assets/sprite_05.png", "assets/sprite_06.png", "assets/sprite_07.png", "assets/sprite_04.png", "assets/sprite_05.png", "assets/sprite_06.png", "assets/sprite_07.png")
  light = loadImage("assets/6f8106a83384cdc.png")
  climberImg = loadImage("assets/climber.png")
}

function setup() {
  createCanvas(600,600);
  //crie os sprites aqui
  lsprite = createSprite(300,height);
  lsprite.addImage("lsprite",light);
  lsprite.velocityY = 1;

  cow = createSprite(200, 200, 50, 80);
  cow.shapeColor = "green";
  cow.addAnimation("d", cl)

  climbersGroup = new Group();
  invisibleBlockGroup = new Group();
}

function draw() {
  background(255, 255, 255);

  if(lsprite.y > 400){
    lsprite.y = 300
  }

  spawnClimbers();
  move();
  drawSprites();
}

function move() {
  if (keyDown("left_arrow")) {
    cow.x = cow.x - 3;
  }

  if (keyDown("right_arrow")) {
    cow.x = cow.x + 3;
  }

  if (keyDown("space")) {
    cow.velocityY = -10;
  }

  cow.velocityY = cow.velocityY + 0.8;
}

function spawnClimbers() {
  //escreva aqui o código para gerar as portas na torre
  if (frameCount % 240 === 0) {

    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    
    climber.x = Math.round(random(120,400));

    invisibleBlock.x = climber.x;
    

    climber.addImage(climberImg);
    

    climber.velocityY = 1;
    invisibleBlock.velocityY = 1;
    
    cow.depth = climber.depth;
    cow.depth +=1;
   
    //designe tempo de vida a variável

    climber.lifetime = 800;
    invisibleBlock.lifetime = 800;

    
    //adicione cada porta ao grupo

    invisibleBlock.debug = true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
  }
}