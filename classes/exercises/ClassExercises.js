// Define your Book class here:

class Book {
    constructor(title, author, copyrightDate, isbn, numPages,numTimesCheckdOut, hasBeenDiscarded){
      this.title = title;
      this.author = author;
      this.copyrightDate = copyrightDate;
      this.isbn = isbn;
      this.numPages = numPages;
      this.numTimesCheckdOut = numTimesCheckdOut;
      this.hasBeenDiscarded = hasBeenDiscarded;
    }
     checkout(uses=1) {
        this.numTimesCheckdOut += uses;
     }  
  }
  

// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, numPages,numTimesCheckdOut, hasBeenDiscarded){
      super(title, author, copyrightDate, isbn, numPages,numTimesCheckdOut, hasBeenDiscarded);
     
    }
    discard(currentYear){
        if (currentYear-this.copyrightDate > 5) {
          this.hasBeenDiscarded = 'Yes';  
        }
    }
  }
  
  class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, numPages,numTimesCheckdOut, hasBeenDiscarded){
      super(title, author, copyrightDate, isbn, numPages,numTimesCheckdOut, hasBeenDiscarded);
     
    }
    discard(){
        if (this.numTimesCheckdOut > 100) {
          this.hasBeenDiscarded = 'Yes';
        }
    }  
  }

// Declare the objects for exercises 2 and 3 here:

let prideAndPrejudice = new Novel('Pride and Prejudice', 'Jane Austen', 1813, '1111111111111', 432, 32, 'No');

let topSecretShuttleBuildingManual = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');


// Code exercises 4 & 5 here:

console.log(prideAndPrejudice);
console.log(topSecretShuttleBuildingManual);

prideAndPrejudice.checkout(101)
prideAndPrejudice.discard();

console.log(prideAndPrejudice);

topSecretShuttleBuildingManual.checkout(5);
topSecretShuttleBuildingManual.discard();

console.log(topSecretShuttleBuildingManual);