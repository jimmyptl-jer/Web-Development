// define Ui var

const form=document.querySelector('#task-form');
const taskInput=document.querySelector("#task");

loadEventListeners();


function loadEventListeners(){
  form.addEventListener('submit',addTask);

}

function addTask(e){
  if(taskInput.value=== '  '){
    alert("ADD TASK");
  }


  e.preventDefault();
}

