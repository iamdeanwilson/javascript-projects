const checkFive = require('../checkFive.js');

describe("checkFive", function(){

   test("should return 'is less than 5' if parameter given is less than 5", function() {
      //code here...
      let output = checkFive(2);
      expect(output).toEqual("2 is less than 5.");
   });
    test("should return 'is less equal to 5' if parameter given is 5", function() {
        let output = checkFive(5);
        expect(output).toEqual("5 is equal to 5."); 
    });
    test("should return 'is greater than 5' if parameter given is greater than 5", function() {
        let output = checkFive(7);
        expect(output).toEqual("7 is greater than 5.");  
   });

});