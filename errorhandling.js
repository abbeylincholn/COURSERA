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

var manager3 = {
  name: "Moyin Sholanke",
  salary,
};
// console.log(manager2)
//-----------------------------------------
var totalSalary = manager1.salary + manager2.salary;
//console.log("totalSalary: ", totalSalary)
//console.log("Hello ", manager1.name, "your salary is ", manager1.salary)
//console.log("Hello ", manager2.name, "your salary is ", manager2.salary)

//   var managers = [manager1, manager2, manager3]; // Array. JSON Javascript Object Notation
//   console.log(managers);

// to avoid crashing the code we need to try and catch the error
// try {
//     var managers = [manager1, manager2, manager3];
//   console.log(managers);
// } catch {
//     console.log("Sorry we're experiencing server problem, contact admin right now.")
// }
// to get the error in the code, the code crash bcos manager3 is not defined. therefore remove moyin in the array or defined moyin
// try {
//     var managers = [manager1, manager2];
//   console.log(managers);
// } catch (err) {
//     console.log("Error occured: "+err.message)
// }
//secondly to add the manager3 object

// try {
//     var managers = [manager1, manager2, manager3];
//   console.log(managers);
// } catch (err) {
//     console.log("Error occured: "+err.message)
// }
// Incase manager3 salary is not defined, you then need to put all the code insid the try to catch the error

// try {
//     var manager1 = {
//         name: "Tobi Sholanke",
//         salary: 50000,
//         Shops: ["Banex", "Omega", "T-Junction"],
//         basedShop: "Banex",
//       };
//       // console.log(manager1)
//       //-----------------------------------
//       var manager2 = {
//         name: "Tope Adelaja",
//         salary: 60000,
//         Shops: ["Abacha", "Kabay"],
//         basedShop: "Abacha",
//       };

//       var manager3 = {
//         name: "Moyin Sholanke",
//         salary

//       };
//     var managers = [manager1, manager2, manager3];
//   console.log(managers);
// } catch (err) {
//     console.log("Error occured: "+err.message)
// }

// function addTwoNums (a, b) {
//     console.log(a + b)
// try {
//     console.log (a + b)
// } catch (err) {
//     console.log(err)
// }
// }
// addTwoNums(5, "5")
