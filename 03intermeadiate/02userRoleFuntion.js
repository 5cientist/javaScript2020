/*
A user can be on following roles:

admin - with all access
aubadmin - with access to create / delete course
testprep - with acess to create/delet tests
user - consume all content
other - trial user


Input: getUserRole(name, role)


*/
// function getUserRole(name, role) {
var getUserRole = function(name, role) {

  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
      break;
    case "subadmin":
      return `${name} is subadmin with  access to create and deleate/courses`;
      break;
    case "testprep":
      return `${name} is testprep with  access to create testprep`;
      break;

    case "user":
      return `${name} is user to consume content`;
      break;

    default:
      return `${name} is trail user`;
      break;
  }
}

console.log(getUserRole("Hanshir", "testprep"));

var getRole = getUserRole("nirmal","user");
console.log(getRole);
