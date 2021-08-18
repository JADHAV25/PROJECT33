var bg,snowimg,snow;

function preload()
{
  bg = loadImage("snow3.jpg");
  snowimg = loadImage("snow5.webp");
}

function setup()
 {
  createCanvas(displayWidth-100,displayHeight-100);
  snow1 = createSprite(400, 200, 50, 50);
  snow1.addImage(snowimg);
  snow1.scale = 0.2
  snow2 = createSprite(30, 50, 50, 50);
  snow2.addImage(snowimg);
  snow2.scale = 0.2
  snow3 = createSprite(100, 200, 50, 50);
  snow3.addImage(snowimg);
  snow3.scale = 0.2
  snow4 = createSprite(550, 50, 50, 50);
  snow4.addImage(snowimg);
  snow4.scale = 0.2
  snow5 = createSprite(700, 230, 50, 50);
  snow5.addImage(snowimg);
  snow5.scale = 0.2
}

function draw() 
{
 background(bg); 
 if(frameCount%100 === 0) 
 {
   for(var i = 0;i<displayWidth;i+=100)
   {
    for(var j = 0;j<displayHeight;j+=100)
    {
    snow1 = createSprite(i, j, 50, 50);
    snow1.addImage(snowimg);
    snow1.scale = 0.2
   }
  }
 }
 drawSprites();
}