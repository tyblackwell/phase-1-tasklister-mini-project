// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
//   const taskForm = document.querySelector("#create-task-form")
//   taskForm.addEventListener("submit", (event) => {
//     event.preventDefault()
//     const newTaskDescription = document.querySelector("#new-task-description")
//     const newTask = document.createElement("li")
//     newTask.innerText = newTaskDescription.value

//     const taskList = document.querySelector("#tasks")
//     taskList.appendChild(newTask)

//     event.target.reset()
//   })
// });

// delete functionality
document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.querySelector("#create-task-form");
  const taskList = document.querySelector("#tasks");

  taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newTaskDescription = document.querySelector("#new-task-description");
    const newTask = document.createElement("li");
    newTask.innerText = newTaskDescription.value;

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    newTask.appendChild(deleteButton);

    taskList.appendChild(newTask);

    event.target.reset();
  });

  taskList.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      deleteTask(event.target.parentElement);
    }
  });

  function deleteTask(task) {
    task.remove();
  }
});