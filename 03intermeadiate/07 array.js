// 07\ array.js
var countries = ["India", "USA", "Russia", "Japan"];

var states = new Array("kerala", "tamilnadu", "karnataka", "rajasthan");

console.log(states);
console.log(states[0]);

console.log(states.length);

//replace 
states[2] = "panjab";
console.log(states);

// created array for user
var user = ["hanshir", "hanshirlukku@gmail.com", 2,10,true];
console.log(user);

//pop() is used to remove end
//using two pop() remove two from end .
user.pop();
user.pop();
console.log(user);

//for adding new value to first array
user.unshift("new value");
console.log(user);

// remove first array 
user.shift();
console.log(user);


// find the index
console.log(user.indexOf(2));
console.log(user.indexOf("hanshir"));
console.log(user.indexOf("water"));  //-1 if not in array

console.log(Array.from("hanshir"));




