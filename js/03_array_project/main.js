let kitchenItemsList = document.getElementById("kitchenItemsList");
let curryPowder = ["salt", "sugar", "chily", "turmeric"];
// console.log(curryPowder);

for (let powder of curryPowder) {
  let li = document.createElement("li");
  li.innerText = powder;
  kitchenItemsList.appendChild(li);
  console.log(li);
}
