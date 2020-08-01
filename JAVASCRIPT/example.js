const toads=[
    {
        id:1,
        text:'Text Out Trash',
        isCompleted:true
    },
    {
        id:2,
        text:'Meeting with Boss',
        isCompleted:true
    },
    {
        id:3,
        text:'Dentist App',
        isCompleted:false
    }
];

console.log(toads);
console.log(toads[1].text)

const todoJSON=JSON.stringify(toads);
console.log(todoJSON)

//FOR LOOP

for(let i=0;i<10;i++){
console.log(i);
console.log(`For Loop Number: ${i}`)
}

for(i=0;i<toads.length;i++){
    console.log(toads[i].text)
}
// WHILE

let j=0;
while(j<10)
{
    console.log(`While loop Number: ${j}`)
    j++;
}

for(let todo of toads){
    console.log(todo.id)
}

//FOREACH

toads.forEach(function(todo) {
    console.log(todo.text);
});

//MAP 
/*
const todoText1= toads.map(function(){
    return todo1.text;
});

console.log(todo1.text);*/

//FILTER

const todoText2= toads.filter(function(todo){
    return todo.isCompleted===true;
});

console.log(todoText2);

const ages=[10,20,30,30,40,50,60,70,80,90,12,02,42,58,2,89,2,9,2,8]

const CanDrink=ages.filter(function(ages){
    if(ages>21){
        return true;
    }

});

console.log(CanDrink)

const CanDrink2=ages.filter(age=> age>=20);
console.log(CanDrink2)


const cars=['ford','tata','maruti','toyota'];

const car=cars.filter(function(c){
    return toString(cars);
});

console.log(car);


//MAP

const car3=cars.map(function(com){
    return 2;
});

console.log(car3)

const a=ages.map(age=> Math.sqrt(age));

console.log(a);

const a1=ages.map(age=> age+2);

console.log(a1);

//SORT

const sortedAges= ages.sort((a,b)=> a-b)

console.log(sortedAges);

//REDUCE

const ageSum= ages.reduce(function(total,age){
    return total+age;
},0);

console.log(ageSum);

