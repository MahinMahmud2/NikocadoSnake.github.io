let myXPos = 350
let myYPos = 350
let foodXPos = 200
let foodYPos = 200
let myLeft, myRight, myTop, myBottom;
let foodLeft, foodRight, foodTop, foodBottom;
let burgerImage;
let score = 0;
let speed = 1;
let level = 1;
myWidth = 50
myLength = 50


function preload(){
    burgerImage = loadImage("visual_and_sounds/burger.png");
    nikocadoImage = loadImage("visual_and_sounds/nikocado.png");
}
function setup(){
    createCanvas(700,700);
    background(0,0,255);
    rectMode(CENTER);
    noStroke();
   
}

function draw(){
    background(0,0,255);
    fill(0,0,255);
    rect(myXPos, myYPos, myWidth, myLength);
    image(nikocadoImage, myXPos - 25, myYPos - 27, myWidth, myLength);


    if (keyIsDown(LEFT_ARROW)) {
        myXPos -= 3 * speed;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        myXPos += 3 * speed;
    }

    if (keyIsDown(UP_ARROW)) {
        myYPos -= 3 * speed;
    }
    
    if (keyIsDown(DOWN_ARROW)) {
        myYPos += 3 * speed;
    }

    fill(255, 255, 255);
    textSize(25);
    text("Score: " + score, 15,30)
    text("Level: " + level, 600,30)
    fill(0,0,255);
    rect(foodXPos, foodYPos, 40, 40);
    image(burgerImage, foodXPos - 20, foodYPos - 20, 40, 40);

    myTop = myYPos - (myWidth / 2);
    myBottom = myYPos + (myWidth / 2);
    myRight = myXPos + (myLength / 2);
    myLeft = myXPos - (myLength / 2);

    foodTop = foodYPos - 20;
    foodBottom = foodYPos + 20;
    foodRight = foodXPos + 20;
    foodLeft = foodXPos - 20;

    if (myLeft > foodRight || myRight < foodLeft || myTop > foodBottom || myBottom < foodTop){

    }
    else{
        foodXPos = random(75,625)
        foodYPos = random(75,625)
        score += 1
        speed += 0.25
    }


    if (myLeft < 0 || myRight > 700 || myTop < 0 || myBottom > 700){
        background(255,0,0)
        textSize(50);
        text("GAME OVER!!!", 175 ,350)
        fill(255)
        rect(350,450,300,100)
        fill(0)
        text("PLAY AGAIN", 200 ,475)
        if (keyIsDown(LEFT_ARROW)) {
            myXPos = 0 * speed;
        }
    
        if (keyIsDown(RIGHT_ARROW)) {
            myXPos = 0 * speed;
        }
    
        if (keyIsDown(UP_ARROW)) {
            myYPos = 0 * speed;
        }
        
        if (keyIsDown(DOWN_ARROW)) {
            myYPos = 0 * speed;
        }
        
    
    }
    if(score > 10){
        level += 1
        score = 0
        speed = level + 0.25
        myWidth += 10
        myLength += 10

    }

    if (level > 10){
        background(0,255,0)
        textSize(35);
        text("WINNER WINNER CHICKEN DINNER!!!", 50 ,350)
        fill(255)
        rect(350,450,300,100)
        fill(0)
        text("PLAY AGAIN", 225 ,475)
    }
      
}

    function mouseClicked(){
        if(mouseX > 200 && mouseX < 500 && mouseY < 500 && mouseY > 400){
            myXPos = 350
            myYPos = 350
            score = 0
            level = 1
            speed = 1
            myWidth = 50
            myLength = 50
        }
    }




    