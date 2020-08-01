/*let val;

val=document;
console.log(val);

val=document.all;
console.log(val);

val=document.all[0];
console.log(val);

val=document.all.length;
console.log(val);

val=document.head;
console.log(val);

val=document.body;
console.log(val);

val=document.doctype;
console.log(val);

val=document.domain;
console.log(val);

val=document.URL;
console.log(val);

val=document.characterSet;
console.log(val);

val=document.contentType;
console.log(val);


val=document.forms;
console.log(val);

val=document.forms[0];
console.log(val);

val=document.forms[0].id;
console.log(val);

val=document.forms[0].method;
console.log(val);

val=document.forms[0].action;
console.log(val);

val=document.links;
console.log(val);

val=document.links[0];
console.log(val);

val=document.links[0].id;
console.log(val);

val=document.links[0].className;
console.log(val);

val=document.links[0].classList[0];
console.log(val);

val=document.images;
console.log(val);

val=document.scripts;
console.log(val);

val=document.scripts[2].getAttribute('src');
console.log(val);


// DOM Selector For single element

//  document.querySelector()

document.querySelector('#task-title');
console.log(document.querySelector('.cars-title'));
console.log((document.querySelector('h5')));

document.querySelector('li').style.color='red';
document.querySelector('ul li').style.color='blue';

document.querySelector('li:last-child').style.color='red';
document.querySelector('li:nth-child(3').style.color='yellow'




const iteams=document.getElementsByClassName('collection-item');
console.log(iteams);
   


const lis=document.getElementsByTagName('li');
console.log('lis');


lis[0].style.color='red';
lis[1].textContent="hello";


// Convert HTML collection into array

//lis=Array.form(lis);

//lis.reverse();


lis.forEach(function(li){
  console.log(li.className);
  li.textContent="nvnj";

});


// Query SelectorAll
 document.querySelectorAll('ul .collection').color='red';

document.querySelectorAll('li').innerText='HELLLLLLLLLLoooo';


document.getElementsByClassName('collection').innerText="Hello";
*/

// Create Element
const li= document.createElement('li');

// Add Class
li.className='collection-item';

// Add id
li.setAttribute('title','New task');

// Create text node and append
li.appendChild(document.createTextNode("HELLLLLLLLLLLLLLoo"));

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

// Create new Link Element
const lin= document.createElement('a');
//add classes
lin.className='delete-item secondary-content';
//add icon html
lin.innerHTML='<i class="fa fa-remove"></li>';



const lin1=document.createElement('li');
lin1.className='collection-item';
lin1.setAttribute('title','Added Through DOM');
lin1.appendChild(document.createTextNode("ADDED"));
document.querySelector('ul.collection').appendChild(lin1);


const lin2=document.createElement('ul');
lin2.className='collection';
lin2.setAttribute('title','ADDED LIST');
lin2.appendChild(document.createTextNode("ADDEd"))
const lin4=document.createElement('li');
lin4.className='collection-item';
lin4.setAttribute('title','Added Through DOM');
lin4.appendChild(document.createTextNode("ADDED"));
document.querySelector('ul.collection').appendChild(lin4);


// REPLACE ELEMENT

//create element
const newHeading=document.createElement('h2');
//add id
newHeading.id='task-title';
//new textnode
newHeading.appendChild(document.createTextNode('Task Title'));

//get old heading
const oldHeading=document.getElementById('task-title');
//parent
const cardAction=document.querySelector('.card-action');
//replace
cardAction.replaceChild(newHeading,oldHeading);


const newH=document.createElement('h5');
newH.id='task-form';
newH.appendChild(document.createTextNode("TTTTTTTTTT"));

const oldH=document.getElementById('task-form');
const oldA=document.querySelector('.row');

oldA.replaceChild(newH,oldH);






































