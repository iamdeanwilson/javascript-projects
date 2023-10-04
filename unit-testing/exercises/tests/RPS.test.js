const whoWon = require('../RPS.js');

describe("whoWon", function(){

    test("should return 'TIE!' if both players choose the same object.", function() {
       //code here...
       let output = whoWon('rock', 'rock');
       expect(output).toEqual("TIE!");
    });
    test("Should return 'Player 2 wins!' if P1 is rock and P2 is paper", function() {
        //code here...
        let output = whoWon('rock', 'paper');
        expect(output).toEqual("Player 2 wins!");
     });
    test("Should return 'Player 2 wins!' if P1 is paper and P2 is scissors", function() {
        //code here...
        let output = whoWon('paper', 'scissors');
        expect(output).toEqual("Player 2 wins!");
     });
    test("Should return 'Player 2 wins!' if P1 is scissors and P2 is rock", function() {
        //code here...
        let output = whoWon('scissors', 'rock');
        expect(output).toEqual("Player 2 wins!");
     });
    test("Should return 'Player 1 wins!' if P1 is scissors and P2 is paper", function() {
        //code here...
        let output = whoWon('scissors', 'paper');
        expect(output).toEqual("Player 1 wins!");
    });   
    test("Should return 'Player 1 wins!' if P1 is paper and P2 is rock", function() {
        //code here...
        let output = whoWon('paper', 'rock');
        expect(output).toEqual("Player 1 wins!");
    });   
    test("Should return 'Player 1 wins!' if P1 is rock and P2 is scissors", function() {
        //code here...
        let output = whoWon('rock', 'scissors');
        expect(output).toEqual("Player 1 wins!");
    });   
    test("Should return 'INVALID ENTRY FOR PLAYER1!' if player1 is not rock, paper, or scissors", function() {
        //code here...
        let output = whoWon('orange', 'paper');
        expect(output).toEqual("INVALID ENTRY FOR PLAYER1!");
    });   
    test("Should return 'INVALID ENTRY FOR PLAYER2!' if player1 is not rock, paper, or scissors", function() {
        //code here...
        let output = whoWon('paper', 'orange');
        expect(output).toEqual("INVALID ENTRY FOR PLAYER2!");
    });   
 });
