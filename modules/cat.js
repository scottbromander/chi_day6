//Props
var numLegs = 4;
var furColor = "black";
var name = "Gizmo";
var hunger = 10;

//Private Methods
var meow = function(){
  console.log("MEEEEEEEOW");
};

//Public Method
var demandFood = function(){
  meow();
  hunger -= 5;
};

module.exports = demandFood();
