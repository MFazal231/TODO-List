function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }


  const tasks = document.querySelectorAll("#taskList li");
  for (let task of tasks) {

    if (task.firstChild.textContent.trim().toLowerCase() === taskValue.toLowerCase()) {
      alert("This task already exists!");
      taskInput.value = "";
      return;
    }
  }

  const li = document.createElement("li");
  li.textContent = taskValue;


  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });


  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.style.background = "red";
  deleteBtn.style.color = "white";
  deleteBtn.style.border = "none";
  deleteBtn.style.borderRadius = "6px";
  deleteBtn.style.cursor = "pointer";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  taskInput.value = ""; 
}
