var starImg,bgImg;
var star, starBody;
var f,fi

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fi = loadImage("images/fairyImage1.png");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	f = createSprite(650,30);
	f.addImage(fi);
	f.scale = 0.2;
	

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.isTouching(f))
  Matter.Body.setStatic(starBody,true); 
   starBody.x =650
   starBody.y =30

  star.x= starBody.position.x 
  star.y= starBody.position.y 
}
 
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyDown(RIGHT_ARROW)){
		f.x=f.x+2
	}
	if(keyDown(LEFT_ARROW)){
		f.x=f.x-2
	}
}
