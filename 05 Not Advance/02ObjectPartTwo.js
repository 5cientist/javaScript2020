var User = {
    name: "",
    getUsername: function () {
        console.log(`user name is : ${this.name}`);

    },


};
var hanshir = Object.create(User)
console.log(hanshir);
hanshir.name = "hanshir lukku";
hanshir.getUsername();

var lukku - Object.create(User,{
    name: { value: "lukkuuuu"},
    courseCount: {value: 3},
});