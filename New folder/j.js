const input = document.getElementById("input");
const add = document.getElementById("add");
const list = document.getElementById("ili");

function addtask() {
    if (input.value.trim() === '') { // Prevent empty tasks
        alert("Please enter a task!");
    } else {
        let li = document.createElement("li");
        li.textContent = input.value; // Use textContent for security
        list.appendChild(li);

        let span = document.createElement("span");
        span.textContent = "\u00d7"; // Add delete button
        span.classList.add("delete"); // Optional: Add a class for styling
        li.appendChild(span);

        input.value = ''; // Clear the input field
    }
}

// Add event listener to the"add"bin
add.addEventListener("click", addtask);

// Add event listener to the list for handling clicks on tasks or delete buttons
list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("list"); // Toggle the "list" class
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // Remove the parent <li> element
    }
}, false);