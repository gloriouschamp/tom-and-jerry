var cat, catImg1, catImg2, catImg3, catImg4;
var mouse, mouseImg1, mouseImg2, mouseImg3, mouseImg4;
function preload() {
    catImg1.loadImage("cat1.png");
    catImg2.loadImage("cat2.png");
    catImg3.loadImage("cat3.png");
    catImg4.loadImage("cat4.png");
    mouseImg1.loadImage("mouse1.png");
    mouseImg2.loadImage("mouse2.png");
    mouseImg3.loadImage("mouse3.png");
    mouseImg4.loadImage("mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    

}

function draw() {

    background("garden.png");
 text(mouseX + ' , ' +  mouseY, 10, 45);
 if(cat.x - mouse.x < (cat.width - mouse.width)/2) {
     cat.addAnimation("catLastImage", catImg3);
     cat.changeAnimation("catLastImage" )
 }

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW) {
    cat.velocityX = -5;
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");

}
if(keyCode === RIGHT_ARROW) {
    cat.velocityX = 5;
    cat.addAnimation("catRunning", catImg2);
    cat.changeAnimation("catRunning");

}


}
