var user = {
    firstName : "hanshir",
    lastName : "Lukku",
   loginCount : 32,
    facebookSignedIn : true,
    role: "Admin",
    courseList:[],

    buyCourses : function(courseName){
        this.courseList.push(courseName);
    },

    getCourseCount: function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },



};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourses("reactjs courses")
user.buyCourses("Angularjs courses")

console.log(user.getCourseCount());