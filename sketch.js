var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood;
var foodObj;
var fedtime
//create feed and lastFed variable here
var feed
var lastFed



function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here

  feed=createButton("Feed The Dog") 
  feed.position(650,95)
  feed.mousePressed(feedDog)


  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);


}

function draw() {
  background("black");
  foodObj.display();

  //write code to read fedtime value from the database 
  
  fedtime = hour()
  
  //write code to display text lastFed time here
  // text("Last Fed:"+fedtime,400,95)
  // textSize()

  if(lastFed>=12){
    text("Last Fed:"+(fedtime-12)+"AM",400,95)
  }else if(lastFed==0){
    text("Last Fed: 12AM",400,95)
  }else{
    text("Last Fed:"+(fedtime-12)+"PM",400,95)
  }
 
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);

}


function feedDog(){
  dog.addImage(happyDog);

  foodS++
  
  var food_stock_val=foodObj.getFoodStock()
  if(food_stock_val<=0){
    foodObj.updateFoodStock(food_stock_val*0)
  }else{
    foodObj.updateFoodStock(food_stock_val-1)
  }
  if(mousePressed(feed)){
    fedtime.update
  }

}

//function to add food in stock
function addFoods(){
  var food_stock_val=foodObj.getFoodStock()
  if(food_stock_val<=0){
    foodObj.updateFoodStock(food_stock_val*1)
  }else{
    foodObj.updateFoodStock(food_stock_val+1)
  }
  
  }

