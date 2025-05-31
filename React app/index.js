myFun();

var myFun = function() {
    console.log(" im am first")

};

myFun();

function myFun() {
    console.log(" im am second")
};

myFun();
document.body.innerHTML = `
    <h2>To-Do List</h2>
    <input id="taskInput" type="text" placeholder="Add a new task...">
    <button onclick="addTask()">Add</button>
    <ul id="taskList"></ul>
`;

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">❌</button>`;
    li.onclick = () => li.classList.toggle("completed");

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}

// CSS for styling
const style = document.createElement("style");
style.innerHTML = `
    body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
    input { padding: 5px; margin-right: 5px; }
    button { cursor: pointer; padding: 5px; }
    ul { list-style: none; padding: 0; }
    li { background: #eee; padding: 8px; margin: 5px; cursor: pointer; }
    .completed { text-decoration: line-through; color: grey; }
`;
document.head.appendChild(style);
