// To be stored
var nameofManager = "Tobi Sholanke";
var managerSalary = 50000;
var vatPercent = 7;
var managedShops = ["Banex", "Omega", "T-Junction"];
var basedShop = "Banex";

// To be computed
var vatOfSalary = (managerSalary * vatPercent) / 100;
var salaryPayout = managerSalary - vatOfSalary;
console.log(salaryPayout);
// To be stored
var nameofManager = "Tope Adelaja";
var managerSalary = 60000;
var vatPercent = 7;
var managedShops = ["Abacha", "Kabay"];
var basedShop = "Abacha";

// To be computed
var vatOfSalary = (managerSalary * vatPercent) / 100;
var salaryPayout = managerSalary - vatOfSalary;
console.log(salaryPayout);

var totalSalary = "salary tobi" + "salary tope";
// total salary is not possible bcon tobi cant be access,
// tope memory has override the tope and that is why object is necessary. see below

var manager1 = {
  name: "Tobi Sholanke",
  salary: 50000,
  Shops: ["Banex", "Omega", "T-Junction"],
  basedShop: "Banex",
};
// console.log(manager1)
//-----------------------------------
var manager2 = {
  name: "Tope Adelaja",
  salary: 60000,
  Shops: ["Abacha", "Kabay"],
  basedShop: "Abacha",
};
// console.log(manager2)
//-----------------------------------------
var totalSalary = manager1.salary + manager2.salary;
//console.log("totalSalary: ", totalSalary)
//console.log("Hello ", manager1.name, "your salary is ", manager1.salary)
//console.log("Hello ", manager2.name, "your salary is ", manager2.salary)

var managers = [manager1, manager2]; // Array. JSON Javascript Object Notation
console.log(managers);
