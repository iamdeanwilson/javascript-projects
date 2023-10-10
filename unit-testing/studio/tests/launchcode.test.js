// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("should return 'Launch!' when the number provided is ONLY divisible by 2", function() {
    let output = launchcode.launchOutput(2);
    expect(output).toEqual("Launch!");
  });

  test("should return 'Code!' when the number provided is ONLY divisible by 3", function() {
    let output = launchcode.launchOutput(3);
    expect(output).toEqual("Code!");
    });

  test("should return 'Rocks!' when the number provided is ONLY divisible by 5", function() {
    let output = launchcode.launchOutput(5);
    expect(output).toEqual("Rocks!");
    });

  test("should return 'LaunchCode!' when number provided is divisible by both 2 AND 3", function() {
    let output = launchcode.launchOutput(6);
    expect(output).toEqual("LaunchCode!");
    });

  test("should return 'Code Rocks!' when number provided is divisible by both 3 AND 5", function() {
    let output = launchcode.launchOutput(15);
    expect(output).toEqual("Code Rocks!");
    });

  test("should return 'Launch Rocks! (CRASH!!!!)' when number provided is divisible by both 2 AND 5", function() {
    let output = launchcode.launchOutput(10);
    expect(output).toEqual("Launch Rocks! (CRASH!!!!)");
    });

  test("should return 'LaunchCode Rocks!' when number provided is divisible by 2, 3, AND 5", function() {
    let output = launchcode.launchOutput(30);
    expect(output).toEqual("LaunchCode Rocks!");
    });

  test("should return 'Rutabagas! That doesn't work.' when number provided is NOT divisible by 2, 3, or 5", function() {
    let output = launchcode.launchOutput(7);
    expect(output).toEqual("Rutabagas! That doesn't work.");
    });
    
  // test("should return ", function() {
  //   let output = launchcode.launchOutput();
  //   expect(output).toEqual("");
  //   });      
});