document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    
    // Function to create a new task item
    function createTaskItem(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Toggle task completion when clicked
        li.addEventListener('click', function() {
            this.classList.toggle('completed');
        });

        // Add a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', function(event) {
            event.stopPropagation();
            li.remove();
        });

        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }
    
    // Add task when button is clicked
    addTaskBtn.addEventListener('click', function() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            createTaskItem(taskText);
            taskInput.value = '';
        } else {
            alert('Please enter a task');
        }
    });
    
    // Add task when Enter key is pressed
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
