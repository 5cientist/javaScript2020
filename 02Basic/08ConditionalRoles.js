//create an application with following removeEventListener
//admin gets full acess
//subadmin get acces to create/delete the course


var user = "testprep";

switch (user) {
    case "admin":
        console.log("you get full access");
        break;
        case "subadmin":
        console.log("get acces to create/delete the course");
        break;
        case "testprep":
        console.log("get acces to create/delete the test");
        break;
        case "user":
        console.log("get acces to consume content");
        break;
        

    default:
        console.log("trail user");
        break;
}