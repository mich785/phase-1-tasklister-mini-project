 document.addEventListener("DOMContentLoaded", () => {
  let form= document.getElementById("create-task-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    createTask(event.target.new-task-description);
    form.reset();
  });
});

function createTask(myTodos) {
  let li = document.createElement("li");
  let tasks = document.getElementById("tasks");
  tasks.appendChild(li);
  li.textContent = myTodos;
  let button=document.createElement('button');
  button.textContent='!'
  li.appendChild(button);
  button.addEventListener('click',deleteBtn);
}

function deleteBtn(event){
  event.target.parentNode.remove();
}
