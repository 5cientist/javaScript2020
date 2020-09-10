const courses = [
    {
        name: "Complete reactJS courses",
        price: "2.3"
    },
    {
        name: "Complete Angular courses",
        price: "2.1"
    },
    {
        name: "Complete MERN courses",
        price: "2.7"
    },
    {
        name: "Complete C++ courses",
        price: "2.8"
    },
];


function gemerateLIST(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach( course => {

        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");
        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li)

    });

}

// gemerateLIST();

window.addEventListener("load", gemerateLIST);


const button = document.querySelector(".sort-btn");

button.addEventListener("click", () =>  {
    courses.sort( (a,b) => a.price - b.price );
    gemerateLIST();
});