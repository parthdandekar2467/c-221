


var canvas;
var music;
var ground_blue, ground_green, ground_pink, ground_black, striker;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
    

    var ground_options = {
        isStatic : true
    }
    ground_blue = createSprite(100, 580, 180, 20, ground_options);
    ground_blue.shapeColor = "blue";

    ground_green = createSprite(300, 580, 180, 20, ground_options);
    ground_green.shapeColor = "green";

    ground_pink = createSprite(500, 580, 180, 20, ground_options);
    ground_pink.shapeColor = "pink";

    ground_black = createSprite(700, 580, 180, 20, ground_options)
    ground_black.shapeColor = "black";


    //create box sprite and give velocity
    var box_options = {

        'restitution' : 0.8
         
        
    }
    box = createSprite(random(20, 750), 100, 20, 20, box_options)
    //box.velocityY = 2;
    //box.bounceOff(ground_blue, ground_green, ground_pink, ground_black)

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite


    drawSprites();
    //add condition to check if box touching surface and make it box

    if(ground_black.isTouching(box))
    {
        box.shapeColor = "black";
    }
    if(ground_green.isTouching(box))
    {
        box.shapeColor = "green";
    }
    if(ground_green.isTouching(box))
    {
        box.shapeColor = "green";
    }
    if(ground_pink.isTouching(box))
    {
        box.shapeColor = "pink";
    }
}