const MyDavidFamily = [
  {
    name: "John",
    children: ["Ali", "MOhsin", "Alex", "Tajwar"],
  },
  {
    name: "Alx",
    children: ["Ayaz", "Faizan", "Karem", "Sajjad"],
  },
  {
    name: "Cendrella",
    children: ["Michelle", "Sarah", "Shireen", "Sajjad"],
  },
];
//    Heading
const h1 = document.createElement("h1");
h1.innerHTML = "Mr David Faimly";
h1.style.color = "black";
h1.style.fontSize = "30px";
document.body.append(h1);

var ul = document.createElement("ul");
ul.style.color = "black";

ul.style.fontSize = "20px";
ul.style.margin = "auto";
document.body.append(ul);

MyDavidFamily.forEach((family) => {

  let li = document.createElement("li");
  li.innerHTML = family.name;
  ul.appendChild(li);
  
  let ul2 = document.createElement("ul");
  li.appendChild(ul2);
  
  let li2 = document.createElement("li");
  li2.innerHTML = family.children[0];
  ul2.appendChild(li2);

  li2 = document.createElement("li");
  li2.innerHTML = family.children[1];
  ul2.appendChild(li2);

  li2 = document.createElement("li");
  li2.innerHTML = family.children[2];
  ul2.appendChild(li2);

  li2 = document.createElement("li");
  li2.innerHTML = family.children[3];
  ul2.appendChild(li2);
});