console.dir(document);
console.log(document.domian);
console.log(document.URL);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.forms);
console.log(document.link);

//GETELEMENTBYID//

var headerTitle = document.getElementById("header-title");
var header = document.getElementById("main-header");
console.log(headerTitle);

headerTitle.textContent = "Heloo";
headerTitle.innerHTML = "GOODBYE";

console.log(headerTitle.textContent);
console.log(headerTitle.innerText);

headerTitle.innerHTML = "HEllo";
headerTitle.style.borderBottom = "soild 10px black";

var title = document.getElementsByClassName("title");
document.getElementsByClassName("title").innerHTML = "GIVE ITEAM";
title.textContent = "GIVE ITEM";

console.log(headerTitle);

//sheaderTitle.innerHTML = "HELLO";

header.style.borderBottom = "solid 3px #000";
headerTitle.style.borderBottom = "dashed 3px red";

var main = document.getElementById("main");

main.style.borderLeft = "solid 1px black";

var tit = document.getElementsByClassName("title");
tit.style = "dashed 2px orange";

// GETELEMENTBYCLASS //

var item = document.getElementsByClassName("list-group-item");

console.log(item);
console.log(item[0]);
console.log(item[1]);

item[1].textContent = "hello";
item[1].getElementsByClassName.fontWeight = "bold";
item[1].style.backgroundColor = "yellow";
item[1].style.fontWeight = 300;

for (var i = 0; i < item.length; i++) {
  item[i].style.backgroundColor = "grey";
}

// GETELEMENTBYTAGNAME //

var li = document.getElementsByTagName("li");
console.log("li");
console.log(li[1]);

li[1].textContent = "hello";
li[1].style.fontweight = "bold";
li[1].style.color = "red";

for (var j = 0; j < li.length; j++) {
  li[j].style.color = "orange";
}

// QUERYSELECTOR //

var header = document.querySelector("main-header");
//header.style.borderBottom = "solid 5px black";

var input = document.querySelector("input");
input.value = "hello world";

var submit1 = document.querySelector(input[(type = "submit")]);
submit1.value = "SEND";

var item1 = document.querySelector("list-group-item");
item1.style.color = "blue";

// QUERYSELECTORALL //

var titles = document.querySelectorAll("title");
console.log("titles");
titles[0].textContent = "Dom Page-1 ";

var odd = document.querySelectorAll("li:nth-child(odd)");

for (var k = 0; k < odd.length; k++) {
  odd[k].getElementsByClassName.backgroundColor = "red";
}

// TRAVERSING THE DOM //

var itemlist = document.querySelector("#items");

console.log(itemlist);
itemlist.parentNode.style.backgroundColor = "lightgrey";
console.log(itemlist.parentNode.parentNode.parentNode);

// ParentElement //

console.log(itemlist.parentElement);
itemlist.parentElement.style.backgroundColor = "red";
console.log(itemlist.parentElement.parentElement.parentElement);

// CHILDNODE //

console.log(itemlist.childNodes);
console.log(itemlist.children);
console.log(itemlist.children[0]);
itemlist.children[0].style.background = "yellow";
itemlist.children[1].style.backgroundColor = "red";
itemlist.children[2].style.backgroundColor = "orange";

// FIRSTCHID //
console.log(itemlist.firstchild);

// FIRSTELEMNET CHILD //
console.log((itemlist.firstElementChild = "hhhhh"));

// LASTELEMENTCHILD //
console.log((itemlist.LastElementChild = "hhhhh"));

// Nextsibling  //
console.log(itemlist.nextSibling);
console.log(itemlist.nextElementSibling);

// PreviousSibling //
console.log(itemlist.previousElementSibling);
console.log(itemlist.previousSibling);
itemlist.previousSibling.style.color = "green";

// CREATE ELEMENT //

// Crete a div
var newDiv = document.createElement("div");

//Add class
newDiv.className = "hello";

//Add id
newDiv.id = "heelo1";

//Add Attribute
newDiv.setAttribute("title", "hello ysgdhj");

//Crete text node
var newDivText = document.createTextNode("hello world");

//Add text to div
newDiv.appendChild(newDivText);

var header = document.querySelector("header-title");
var container = document.querySelector("main-header, container");
var h1 = document.querySelector("header h1");

console.log(newDiv);
container.insertBefore(newDiv, h1);

//EVENT//

var button = document
  .getElementById("button")
  .addEventListener("click", buttonClick);

function buttonClick(e) {
  alert("HELLO");
  console.log(e);

  console.log(e.target);
  console.log(e.target.id);
  console.log(e.target.classList);
  console.log(e.target.className);

  var output = document.getElementById("output");
  output.innerHTML = "<h3>" + e.target.id + "</h3>";

  console.log(e.type);

  console.log(e.clientX);
  console.log(e.clientY);

  console.log(e.offsetX);

  console.log(e.altKey);
  console.log(e.ctrlKey);
  console.log(e.shiftKey);
}

var box = document.getElementById("box");
box.addEventListener("mouseenter", runEvent);
box.addEventListener("mouseleave", runEvent);

var itemInput = document.querySelector('input[type="text"]');
var form = document.querySelector("form");

itemInput.addEventListener("keydown", runEvent);

box.addEventList == ener("mouseover", runEvent);
box.addEventListener("mouseout", runEvent);
var button = document.getElementById("button");

button.addEventListener("dbclick", runEvent);
button.addEventListener("mousedown", runEvent);
button.addEventListener("mouseup", runEvent);

function runEvent(e) {
  console.log(e.target.valuess); //-> we can whta we are writing in the form
  console.log("EVENT TYPE:" + e.type);
  document.write("how was your day");

  document.getElementsByClassName("output").innerHTML =
    "<h3" + e.target.value + "</h3>";

  document.style.backgoundColor = "rgb(" + e.offsetX + "," + e.offsetY + "40)";
}
