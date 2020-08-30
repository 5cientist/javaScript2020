// logged in
//email verified 
//cardInfo - valid
// if any one missing stop purchase


var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;


// if (isLoggedIn) {
//     console.log("Logged in sucess");
//     if (isEmailVerified) {
//         console.log("email is verified");
//         if (cardInfo) {
//             console.log("you can make purchase");
//         }
//     }
// }


// OTHER Method

if (isLoggedIn && isEmailVerified && cardInfo) {
    console.log("you can purchase");
}else{
    console.log("you are not allow to purchase");
}