// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please Enter a task")
    return;
    } // Do nothing if input is empty

    // Create a new task item
    const taskItem = document.createElement("li");

    // Task text
    const taskTextSpan = document.createElement("span");
    taskTextSpan.textContent = taskText;
    taskTextSpan.onclick = () => toggleComplete(taskItem); // Toggle complete on click

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => deleteTask(taskItem);

    taskItem.appendChild(taskTextSpan);
    taskItem.appendChild(deleteBtn);

    // Add the task item to the list
    document.getElementById("task-list").appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
}

// Function to delete a task
function deleteTask(taskItem) {
    document.getElementById("task-list").removeChild(taskItem);
}

// Function to toggle task completion
function toggleComplete(taskItem) {
    taskItem.classList.toggle("completed");
}
