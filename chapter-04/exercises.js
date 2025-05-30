////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Input- 3 nums - start and end and step
//ouput- return array with numbers start to end - inclusive
function range(start, end, step) {
//output Arary
let output = [];
//if step is not given
if (!step){
//determine ascending 
  if (start < end){
  //loop through number - adding to output
    for(count = start; count <= end; count ++){
    output.push(count);
    }
  }
//determine descending  
  if(start > end){
  //loop through number - adding to output
    for(count = start; count >= end; count --){
    output.push(count);
    }
  }
} else if (step > 0){ //positive step
  //step is given
  if (start < end){
    //loop through number by step  - adding to output
      for(count = start; count <= end; count += step){
      output.push(count);
      }
    }
  //determine descending  
    if(start > end){
    //loop through number by step - adding to output
      for(count = start; count >= end; count -= step){
      output.push(count);
      }
    }
}

return output;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I:array of numbers
//O: return sum of numbers in array

function sum(nums) {
//output number
let output = 0;
// loop through nums array
for (index = 0; index < nums.length; index++){
  output += nums[index];
}
//return sum
return output;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I:array
//O: returns new array in reverse order

function reverseArray(array) {
//output Array
let revArray = [];
//loop through array to add to revArray
for (index = array.length - 1; index >= 0; index --){
  //add to end of revArray
  revArray.push(array[index]);
}
return revArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: array
//O: array in reverse order
//C: cant use reverse method
//E: needs to modify input array
function reverseArrayInPlace(array) {
//loop through array
let copy = array.slice();
let indexCopy = copy.length - 1;
for (let index = 0; index < array.length; index ++){
  array[index] = copy[indexCopy];
  indexCopy--;
}
 return array

};


////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
 let rest = null;
//loop backward through array
for(let index = array.length - 1; index >= 0; index--){
  rest = {value: array[index], rest: rest};
}
//return rest
return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, output = []) {
//BASE
if(list.rest === null){
  output.push(list.value);
  return output;
}
//Recursion
//update output
output.push(list.value);

return listToArray(list.rest , output);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//takes an element and a list and creates new list with element at front of list
//output - adds element to start of list
function prepend(element, list) {
  //newList
  let newList = {value: element, rest: list};
 
  return newList;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) {
//BASE- ends when count matches number - returns value'
if(number < 0){
  return undefined;
}
if(number === 0){
  return list.value;
}
//Recursion
number -= 1;
return nth(list.rest, number);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
//detmerine if simple data
if(typeof x !== 'object' && typeof y !== 'object'){
  return x === y;
}
//determine if x or y is an object but not the other
if(typeof x !== 'object' || typeof y !== 'object'){
  return false;
}
//create array of of each input keys
  let xKeys = Object.keys(x);
  let yKeys = Object.keys(y);
  //if not same length - false (one have more properties)
  if(xKeys.length !== yKeys.length){
    return false;
  }
  //iterate to determine if array keys match and value at keys match
  for(let index = 0; index < xKeys.length; index ++){
    if(!yKeys.includes(xKeys[index]) || !deepEqual(x[xKeys[index]],y[xKeys[index]])) {
      //determine if current is not included in yKeys and if values are not matching(using recursion on value of key we are accessing)
      return false;
  }
 
}
return true;
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};