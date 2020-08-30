var testArray = [10, 20, 30, 40, 50, 60];

// console.log(testArray);
// console.log(testArray.fill(0));
// console.log(testArray.fill("h"));
console.log(testArray.fill("ha", 2, 4));

const myNumber = [23, 67, 10, 55, 67, 34, 478];
// const result = myNumber.filter((num) => num != 55);
const result = myNumber.filter((num) => num > 55);
console.log(result);

//working on slice and splice

var users = ["raj","ted","ragav","ravi", "twitter","facebook","sod"];
console.log(users);
//use slice
console.log(users.slice(1,4));//[ 'ted', 'ragav', 'ravi' ]
// console.log(users.slice(1));//[ 'ted', 'ragav', 'ravi', 'twitter', 'facebook', 'sod' ]
//console.log(users.slice(2));//[ 'ragav', 'ravi', 'twitter', 'facebook', 'sod' ]


//now splicing
users.splice(1,3,"hi","bye");//from 1 it count the range and replace the value
console.log(users);

