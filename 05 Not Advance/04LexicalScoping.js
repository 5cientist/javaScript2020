function init(){
    var firstName = "hanshir";
    function sayFirstName(){
        console.log(firstName);
    }

    return sayFirstName;
}

var value = init();
