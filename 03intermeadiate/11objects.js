var user = {
    firstName : "hanshir",
    lastName : "Lukku",
   loginCount : 32,
    facebookSignedIn : true,
    role: "Admin",
};

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 55;
console.log(user.loginCount);
console.log(user);

console.table(user);