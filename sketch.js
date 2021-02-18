var frec,mrec;


function setup() {
 createCanvas(800,400);
  mrec = createSprite(400, 200, 50, 50);
  mrec.shapeColor = "black";

  frec = createSprite(200,200,30,30);
  frec.shapeColor = "black";

}

function draw() {
  background(255,255,255);  

  console.log(mrec.x - frec.x);
  mrec.x = World.mouseX;
  mrec.y = World.mouseY;

if(mrec.x - frec.x<(mrec.width/2+frec.width/2)  &&  frec.x - mrec.x <(mrec.width/2+frec.width/2)&& mrec.y - frec.y<(mrec.height/2+frec.height/2)&& frec.y -mrec.y < (mrec.height/2+frec.height/2)){

frec.shapeColor = "red";
mrec.shapeColor = "red";


}

else{ frec.shapeColor = "black";
      mrec.shapeColor = "black";

}
  drawSprites();
}