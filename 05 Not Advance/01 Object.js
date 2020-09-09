var User = function (firstname,courseCount) {
    this.firstname = firstname;
    this.courseCount = courseCount;
    this.getcourseCount = function (){
        console.log(`Course count is : ${this.courseCount}`);
    };
};


var hanshir =new User("hanshir", 2);
console.log(hanshir); 

var sam = new User ("sam", 1);
console.log(sam);


// #######
// node 05\ Not\ Advance/01\ Object.js
// #######