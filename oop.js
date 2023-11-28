class Governor {
  // variables of a class or properties data
  name = "";
  state = "";
  party = "";
  tenureStartDate = new Date();

  constructor(name, state, party, tenureStartDate) {
    this.name = name;
    this.state = state;
    this.party = party;
    this.tenureStartDate = new Date(tenureStartDate);
  }
  // Function is a class or a method
  hasTenureEnded() {
    let yearDifference =
      new Date().getFullYear() - this.tenureStartDate.getFullYear();
    return yearDifference >= 4;
  }
}

var sanwoOlu = new Governor("Sanwo Olu", "Lagos", "APC", "10/11/2020"); //object sanwao of class Governor
var adeleke = new Governor("Adeleke", "Osun", "PDP", "10/09/2008"); // object adeleke of class Governor

console.log("Sanwo Olu tenure ended ", sanwoOlu.hasTenureEnded());
console.log("Adeleke tenure ended: ", adeleke.hasTenureEnded());

class President extends Governor {
  // Additional properties specific to President
  isHeadOfState = true;

  // Override the constructor if needed
  constructor(name, state, party, tenureStartDate, isHeadOfState) {
    // Call the constructor of the base class
    super(name, state, party, tenureStartDate);

  }
}
var jagabam = new President("Tinubu", "Nigeria", "APC", "01/02/2023", true);
var Biden = new President("Joe Biden", "USA", "Democratic", "04/01/2020", true);
console.log("Tinubu tenure's ended: ", jagabam.hasTenureEnded());
console.log("Joe Biden tenure's ended: ", Biden.hasTenureEnded());
console.log("\n");
console.log(jagabam);
console.log(Biden);
console.log(sanwoOlu);
console.log(adeleke);
