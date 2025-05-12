
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/
//I- parameter - number
//O- that is the size of triangle printed to console
function triangles(num) {
  //output string
  let output = '';
  for(let counter = 0; counter < num; counter++){
    output = output + '#';
    //console log output
    console.log(output);
  }
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/
//I: two parameters - 
//O: the num unless div by 3 - fizz, div by 5 - buzz, div by 3and 5 - fizzbuzz

function fizzBuzz(start, end) {
  //need to determine if start or end is larger
  //if end is greater - need to count up
  if(start < end){
  //loop to go through values start to end
    for (let counter = start; counter <= end; counter++){
      ///div by 3 && 5 check - fizzbuzz
      if(counter % 3 === 0 && counter % 5 === 0){
        console.log('fizzbuzz');
      } //div by 3 check - fizz
      else if (counter % 3 === 0){
        console.log('fizz');
      } //div by 5 check - buzz
      else if (counter % 5 === 0){
        console.log('buzz');
      } else {
        console.log(counter);
      }
    }
  }
  //if start is greater - need to count down
  if(start < end){
    //loop to go through values start to end
      for (let counter = start; counter >= end; counter--){
        //div by 3 && 5 check - fizzbuzz
        if(counter % 3 === 0 && counter % 5 === 0){
          console.log('fizzbuzz');
        } //div by 3 check - fizz
        else if (counter % 3 === 0){
          console.log('fizz');
        } //div by 5 check - buzz
        else if (counter % 5 === 0){
          console.log('buzz');
        } else {
          console.log(counter);
        }
      }
    }

}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #

*/
//input - x a number to determine size of board
//output - is string that makes a chessboard x by x size
//edge - use line breaks(/n) 

function drawChessboard(x) {
  //var for outputString
  let outputString = '';
  let outputArray = [];
  let oddEvenCol;
  let oddEvenRow;
  //loop for number of colums - x
  for(var counterCol = 0; counterCol < x; counterCol++ ){
    //loop for number of rows - x
    //using oddEvenCol - to determine how to start line
    oddEvenCol = counterCol + 1;
    if (oddEvenCol % 2 !== 0){
      for (var counterRow = 0; counterRow < x; counterRow ++){
       //variable for odd/even
        oddEvenRow = counterRow + 1;
       if (oddEvenRow % 2 !== 0){
          outputArray.push(" ");
        } else if (oddEvenRow % 2 === 0){
          outputArray.push("#");
       }
     }
      outputArray.push('\n');
    }
    if (oddEvenCol % 2 === 0){
      for (var counterRow = 0; counterRow < x; counterRow ++){
       //variable for odd/even
        oddEvenRow = counterRow + 1;
       if (oddEvenRow % 2 !== 0){
          outputArray.push("#");
        } else if (oddEvenRow % 2 === 0){
          outputArray.push(" ");
       }
     }
      outputArray.push('\n');
    }
  }
  //loop to go from array to string
  for(index = 0; index < outputArray.length; index++){
    outputString = outputString + outputArray[index];
  }
  //remmove last page break
    outputString - '\n';
  
  console.log(outputString);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}