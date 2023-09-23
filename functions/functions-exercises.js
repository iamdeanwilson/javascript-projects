function makeLine(size, char){
    let line = '';
    if (char == undefined){
      char = '#';
    }
    for (let i = 0; i < size; i++) {
      line += char;
    }
    return line;
  
  }
    
  // //console.log(makeLine(6));
  
  // function makeSquare(size){
  //   let square = '';
  //   for (let i=0 ; i < size ; i++){
  //     square += (makeLine(size) + '\n');
  //   }
  //   return square;
  // }
  
  // //console.log(makeSquare(4))
  
  // function makeRectangle(width, height){
  //   let rectangle = '';
  //   for (let i=0; i < height ; i++){
  //     rectangle += (makeLine(width) + '\n');
  //   }
  //   return rectangle
  // }
  
  // //console.log(makeRectangle(3, 5));
  
  // function makeSquareV2(width, height){
  //   let square = '';
  //   for (let i=0 ; i < width ; i++){
  //     square += (makeLine(width) + '\n');
  //   }
  //   return square;
  // }
  
  // //console.log(makeSquareV2(8));
  
  
  // function makeDownwardStairs (height) {
  //   let downwardStairs = '';
  //   for (let i = 0; i < height ; i++){
  //     downwardStairs += (makeLine(i+1) + '\n');
  //   }
  //   return downwardStairs;
  // }
  
  // console.log(makeDownwardStairs(7));
  
  
  function makeSpaceLine(numSpaces, numChars, char){
    let spaceLine = ''
    function makeSpace(numSpaces){
      let space = '';
      for (let i = 0; i < numSpaces ; i++){
        space += (' ');
      }
      return space
    }
    for (let i = 0; i == 0 ; i++){
      spaceLine += (makeSpace(numSpaces) + makeLine(numChars, char) + makeSpace(numSpaces));
    }
    return spaceLine;
  }
  
  // //console.log(makeSpaceLine(10, 10));
  
  function makeIsoscelesTriangle(height, char){
    let isoscelesTriangle = ''
    for (let i = 0; i < height; i++){
      isoscelesTriangle += (makeSpaceLine((height - i), (2*i+1), char)  + '\n');
    }
    return isoscelesTriangle;
  }
  
  //console.log(makeIsoscelesTriangle(5))
  
  function makeDiamond(height, char){
    let diamond = '';
    function reverse(str){
        let reversed = '';
        for (let i = 0; i < str.length - 1; i++) {
          reversed = str[i] + reversed;
        }
        return reversed
    }
    diamond += (makeIsoscelesTriangle(height, char) + reverse(makeIsoscelesTriangle(height, char)));
   
    return diamond;
  }
  
  //second input is optional, to change the characters something besides the '#'
  console.log(makeDiamond(7, '@'))



