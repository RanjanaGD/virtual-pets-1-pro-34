//Create variables here
var dog, happyDog;
 var database;
 var foodS, foodStock;
//var position;
var dogImg,happyDogImg;

function preload()
{
  //load images here
  dogImg=loadImage("dogImg.png")
  happyDogImg=loadImage("dogImg1.png")
}

function setup() {
createCanvas(500, 500)
database = firebase.database();

  dog=createSprite( 200,250,10,10);
  dog.addImage(dogImg);
  dog.scale=0.20;

foodStock=database.ref('Food');
foodStock.on("value",readStock);
  
}


function draw() {  
background(46,139,87)




if(keyDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDogImg);
}


  drawSprites();
  //add styles here

textSize(15)
fill("black")
text("NOTE:Press UP_ARROW Key to feed the dog",50,50)
text("food remaining  "+foodS,100,100)


}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

database.ref('/').update({
  Food:x
})


}


