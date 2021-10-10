var newton
var PLAY = 1;
var END = 0;
var gameState = 1;
var oG, aG, nI, aI, bS, tI, cI, sI, bg
var apple, obstacle
var hurt



// Part 1--> infinite ground, add background, image, loadImages, addImages, creat all sprites,
//assigning sprites in groups, create scoring system

//part2--> make function for spawning obstacles and switch cases for different images, 
//use random function for spawning apples from different positions

//To do 3--> Make apple function in whj C:44

function preload() {
 nI=loadImage("img/newton.png");
 aI=loadImage("img/apple1.png");
 cI=loadImage("img/coco.png");
 tI=loadImage("img/can.png");
 sI=loadImage("img/spear.png");
 bg=loadImage("img/bg.png");
 

 sS=loadSound("img/apple.wav");
 gS=loadSound("img/ouch.wav");
 bS=loadSound("img/Operator.mp3");
}

function setup(){
    createCanvas(800,550)

    //creating all groups
    oG=new Group();
    aG=new Group();

    //creating player character
    newton=createSprite(400,275,20,20);
    newton.addImage(nI);
    newton.scale=0.25;

    //creating score
    score=0
    
    
}

function draw(){
    background(bg);

    //creating function of Game States
  if(gameState === PLAY){

         sAppleR();
         sAppleL();
         sObstacleL();
    
        //moving knife
         newton.y = mouseY
         newton.x = mouseX
    
         if (oG.isTouching(newton)){
     
               oG.destroyEach(); 
               score=score-2;
              gS.play();
             }
      
    //making score change
         if (aG.isTouching(newton)){
                 sS.play();
                 aG.destroyEach();
                  score=score+1;
    
    
           }
  }


         stroke("black");
        fill("yellow");
        textSize=42;
        text("Score: "+ score, 200,50);
  
          drawSprites();
}

  



function sObstacleL(){
    if (World.frameCount%120===0){
      //making fruit sprites 
      obstacle=createSprite(0,200,20,20);
      obstacle.scale=0.2;
      
      
      
      //making random fruits and aliens spawn
      r=Math.round(random(1,3));
      if (r==1){
        obstacle.addImage(cI)
      }
      if (r==2){
        obstacle.addImage(tI)
      }
      if (r==3){
        obstacle.addImage(sI)
      }
      
      
      
      //spawning fruit randmonly and adding velocity and         //lifetime to them;
      obstacle.y=Math.round(random(50,340));
      obstacle.velocityX=(7+score/4);
      obstacle.setLifetime=100;
      
      
      
      //adding fruits and aliens to their groups;
      oG.add(obstacle);
    }
  }





  function sAppleR(){
    if(World.frameCount%50==0){
      //making alien sprites
     apple1=createSprite(400,200,20,20);
     //adding animation to alien;
     //apple1.addImage(aI);
     apple1.scale=100;
      //setting velocities
     apple1.y=Math.round(random(50,340));
     apple1.velocityX=-(8+score/10);
     //apple1.lifetime=200;
      
      aG.add(apple1);
    }
   }







   function sAppleL(){
    if(World.frameCount%50==0){
      //making apple sprites
      console.log("sAppleL is working")
     apple=createSprite(0,200,20,20);
     //adding animation to apple;
     //apple.addImage(aI);
     apple.scale=100;
      //setting velocities
     apple.y=Math.round(random(50,340));
     apple.velocityX=(8+score/10);
    // apple.lifetime=100;
      
      aG.add(apple);
    }
   }


