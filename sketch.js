var canvas;
var music;
var b1;
var b2;
var b3;
var b4;
var ball;
var edges;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    
    //create 4 different surfaces
b1=createSprite(100,580,200,30)
b1.shapeColor= " red"

b2=createSprite(300,580,200,30)
b2.shapeColor= "green"

b3=createSprite(500,580,200,30)
b3.shapeColor= "blue"

b4=createSprite(700,580,200,30)
b4.shapeColor= "yellow"

    //create box sprite and give velocity
    ball=createSprite(random(20,750),100,40,40)
ball.shapeColor= "white"

ball.velocityX = 7
ball.velocityY = 7

edges=createEdgeSprites();


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
ball.bounceOff (edges);


    //add condition to check if box touching surface and make it box
if(ball.isTouching(b1)&& ball.bounceOff(b1)){
ball.shapeColor= " red"
music.play();


}
if(ball.isTouching(b2)&& ball.bounceOff(b2)){
    ball.shapeColor= "green"
    
}

if(ball.isTouching(b3)&& ball.bounceOff(b3)){
    ball.shapeColor= "blue"
   
}
if(ball.isTouching(b4)&& ball.bounceOff(b4)){
    ball.shapeColor= "yellow"
    music.stop();
    ball.velocityX = 0
ball.velocityY = 0
}

drawSprites();
}
