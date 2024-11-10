function getMilk(money, costPerBottle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");


  console.log("Buy " + calcBottles(money, costPerBottle) + " bottles of milk");


  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");

  //specifying an output for our function
  return calcChange(money, 1.5); //remainder of our division
}

var change= getMilk(10);
console.log(change);

function calcBottles(startingMoney, costPerBottle){
  var numberOfBottles = Math.floor(startingMoney / costPerBottle);

  return numberOfBottles;
}

function calcChange(startingAmount,costPerBottle){
  var change=startingAmount%costPerBottle;
  return change;
}

console.log("Hello master, here is your " + getMilk(10)+ " change.")

//We are using the outputs of functions to use it in other lines of function or codes.
