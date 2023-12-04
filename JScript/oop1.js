class PoliticalAlliances {
    // variables of a class or properties data
    name = "";
    party = "";
    tenureStartDate = new Date();
  
    constructor(name, party, tenureStartDate) {
      this.name = name;
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
  
  
  class Governor extends PoliticalAlliances {
       
    constructor(name, party, tenureStartDate, state) {
    super(name, party, tenureStartDate)
    this.state=state;
    }
  }

  var sanwoOlu = new Governor("Sanwo Olu", "APC", "10/11/2020", "Lagos"); //object sanwao of class Governor
  var adeleke = new Governor("Adeleke", "PDP", "10/09/2008", "Osun"); // object adeleke of class Governor
  
  console.log("Sanwo Olu tenure ended ", sanwoOlu.hasTenureEnded());
  console.log("Adeleke tenure ended: ", adeleke.hasTenureEnded());
  console.log(sanwoOlu);
  console.log(adeleke);



  
  class President extends PoliticalAlliances {
    
    constructor(name, party, tenureStartDate, country) {
    super(name, party, tenureStartDate)
    this.country=country;
    }
  }
  var jagabam = new President("Tinubu", "APC", "01/02/2023","Nigeria");
  
  var Biden = new President("Joe Biden", "Democratic", "04/01/2020", "USA");
  console.log("Tinubu tenure's ended: ", jagabam.hasTenureEnded());
  console.log("Joe Biden tenure's ended: ", Biden.hasTenureEnded());
  console.log("\n");
  console.log(jagabam);
  console.log(Biden);

  
  