let kitchenItemsList = document.getElementById("kitchen-Items-List");
let curryPowder = ["salt", "sugar", "chily", "turmeric"];
// console.log(curryPowder);

// method ONE

// for (let powder of curryPowder) {
//   let li = document.createElement("li");
//   li.innerText = powder;
//   kitchenItemsList.appendChild(li);
//   console.log(li);
// }

// Method TWO
// foreach()
curryPowder.forEach(function (powder) {
  // console.log(powder);
  let li = document.createElement("li");
  li.innerText = powder;
  kitchenItemsList.appendChild(li);
});

//1. push()
//2. pop()
//3. shif()
//4. unshif()
