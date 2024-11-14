// Get references to left and right containers
let leftBox = document.querySelector(".left");
let rightBox = document.querySelector(".right");

// Get all items that are draggable
let lists = document.getElementsByClassName("list");

// Initialize a variable to store the currently dragged item
let draggedItem = null;

// Add event listeners to each draggable item
for (let list of lists) {
    list.addEventListener("dragstart", function(e) {
        draggedItem = e.target;  // Store the dragged item
        e.dataTransfer.effectAllowed = "move";
    });
}

// Handle dragover and drop for the right box
rightBox.addEventListener("dragover", function(e) {
    e.preventDefault(); // Prevent default to allow drop
    e.dataTransfer.dropEffect = "move";
});

rightBox.addEventListener("drop", function(e) {
    e.preventDefault();
    if (draggedItem) {
        rightBox.appendChild(draggedItem); // Move item to the right box
        draggedItem = null; // Clear the reference
    }
});

// Handle dragover and drop for the left box
leftBox.addEventListener("dragover", function(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
});

leftBox.addEventListener("drop", function(e) {
    e.preventDefault();
    if (draggedItem) {
        leftBox.appendChild(draggedItem); // Move item back to the left box
        draggedItem = null; // Clear the reference
    }
});
