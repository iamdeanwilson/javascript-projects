function whoWon(player1,player2){
  let options = ['rock', 'paper', 'scissors']
   if (player1 === player2){
     return 'TIE!';
   }
   
   if (player1 === 'rock' && player2 === 'paper'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'paper' && player2 === 'scissors'){
     return 'Player 2 wins!';
   }
   
   if (player1 === 'scissors' && player2 === 'rock'){
     return 'Player 2 wins!';
   } else

   if (options.indexOf(player1) === -1){
    return 'INVALID ENTRY FOR PLAYER1!';
  } 

  if (options.indexOf(player2) === -1){
    return 'INVALID ENTRY FOR PLAYER2!';
  } 

   return 'Player 1 wins!';
 }

 module.exports = whoWon;