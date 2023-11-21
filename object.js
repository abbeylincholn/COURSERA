// //creating an object with properties and their values
var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
} 
console.log(table);
//-----

house.windows = 10
console.log(house)
//Additionally, I can console log any individual property, like this:  
console.log(table.color); // 'brown'
//---------------------------------------------------
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}

// An alternative approach of building objects is to first save an empty object literal to a variable, then use the dot notation to declare new properties on the fly, 
//and use the assignment operator to add values to those properties; for example:
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

//I can both access and update properties on objects using either the dot notation, 
//or the brackets notation, or a combination of both, like in the following example:
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}

car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 4}
///----------------------------------------------------
var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

house2.windows = 10
console.log(house2)
//--------------------------------------------------
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(i,drone[arrOfKeys[i]])
}
//---------------------------------------------------------

function arrayBuilder (one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr)
}
arrayBuilder('apple', 'pear', 'plum');
var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr); // ['apple','pear','plum']
//---------------------------------------------------------------

// objects literal and dot notation
var favCar = {};
    favCar.color = "purple";
    favCar.covertibale = true;
console.log(favCar)
//object literal and bracket notation
var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}

//Array object. push() and pop() method
var fruits = []; 
fruits.pop(); // ['apple']
fruits.push('pear'); // ['apple', 'pear']
console.log(fruits)
//------------------------------------------------
// Exercise: Creating arrays and objects
var clothes = [];
clothes.push('versachi');
clothes.push('adidas');
clothes.push('nike');
clothes.push('ankara');
clothes.push('asooke');
clothes.pop();
clothes.push('danshiki');
console.log(clothes)
console.log(clothes[2]);

//------------------------------------------------------------------
Math.round(0, 0.99);
var decimal = Math.round(0.4);