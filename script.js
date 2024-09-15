function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("task-list");
    const newTask = document.createElement("li");

    newTask.innerHTML = `
      <span>${taskText}</span>
      <span class="delete" onclick="deleteTask(this)">&#x2716;</span>
    `;

    taskList.appendChild(newTask);
    taskInput.value = ""; // Clear input after adding
  }
}

function deleteTask(element) {
  const task = element.parentElement;
  task.remove();
}
