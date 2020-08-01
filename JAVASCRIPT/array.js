const number=[45,36,555,85,88];
const numbers2= new Array(20,55,888,64,24);
const fruit=['Apple','Banana','Mango','Orange'];
const mixed=[22,'Hello',true,undefined,null,{a:1,b:1},new Date()];

let val;

// Get Array Length
val=numbers.length;
console.log(val);

//Check If iS Array
val=Array.isArray(numbers);
console.log(val);

// Get Single Element
val=numbers2[3];
console.log(val);

val=number[0];
console.log(val);

//Insert Element into array
number[2]=100;
console.log(number);


//find Index of value
val=numbers.indexOf(36);
console.log(val);

//Mutating Arrray

//Add element to end
number.push(100);
console.log(number);

// add on front
number.unshift(200);
console.log(number);

//Take off number form end
val=number.pop();
console.log(nunber);
console.log(val);

//Takeoff number from front of the array
val=number.shift();
console.log(val);
console.log(number);

// Sorting of array
val=fruit.sort();
console.log(val);

val=number.sort()
console.log(val);

// Use "compare function" to sort the array
val=number.sort(function(x,y){
  return x-y
});
console.log(val);


// Reverse Sort
val=number.sort(function(x,y){
  returny-x;

});
console.log(val);


// Find 
function under50(num){
  return num<50;
}

val=number.find(under50);
console.log(val);
















































