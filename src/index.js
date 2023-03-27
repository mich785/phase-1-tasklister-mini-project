// let myTodos= event.target.new-task-description.value

document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let task = document.getElementById("new-task-description");
    if (task.value.length > 0) {
      createTask(task.value);
    } 
    form.reset();
  });
});

function createTask(task) {
  let li = document.createElement("li");
  li.textContent = task;
  let button = document.createElement("button");
  button.textContent = "Remove";
  li.appendChild(button);
  button.addEventListener("click", deleteBtn);

  let tasks = document.getElementById("tasks");
  tasks.appendChild(li);
}

function deleteBtn(event) {
  event.target.parentNode.remove();
}
