// // Remember account
// if (localStorage.getItem('loggedinAccount') === null && sessionStorage.getItem('loggedinAccount') === null) {
//     alert('No account is logged in')
//     window.location.assign('././login-form.html')
// }

// Get add new todo part
const newTodoInput = document.querySelector(".item-input"),
  addTodoButton = document.querySelector(".add-item-button");

// Get todo list
const todoList = document.querySelector(".items-container .items-list"),
  todoListItems = todoList.children;

// Get user avatar
const userAvatar = document.querySelector(".user-account img");

// Create add todo action
addTodoButton.addEventListener("click", function () {
  todoList.innerHTML += `
    <li class="item">
        <div>
            <input type="checkbox" name="item-checkbox" class="item-checkbox">
            <p class="item-content">${newTodoInput.value}</p>
            <button class="edit-item-button ti-pencil"></button>
            <button class="delete-item-button">&times</button>
        </div>
    </li>
    `;
  newTodoInput.value = "";
  // Add event to new todolist
  for (let i = 0; i < todoListItems.length; ++i) {
    addItemAction(todoListItems[i]);
  }
});

userAvatar.addEventListener("mouseover", function (event) {
  const logoutButton = event.target.parentElement.querySelector(
    ".account-actions .logout-button"
  );
  logoutButton.onclick = function () {
    sessionStorage.removeItem("loggedinAccount");
    localStorage.removeItem("loggedinAccount");
    window.location.assign("././login-form.html");
  };
});

function addItemAction(item) {
  item
    .querySelector(".item-checkbox")
    .addEventListener("click", addCheckboxAction);
  item
    .querySelector(".edit-item-button")
    .addEventListener("click", addEditAction);
  item
    .querySelector(".delete-item-button")
    .addEventListener("click", addDeleteAction);
}

// Create save action
function addCheckboxAction(event) {
  const checkboxElement = event.target,
    contentElement = event.target.parentElement.querySelector(".item-content");
  if (contentElement.style.textDecoration === "") {
    checkboxElement.setAttribute("checked", "true");
    contentElement.style.textDecoration = "line-through";
  } else {
    checkboxElement.setAttribute("checked", "false");
    contentElement.style.textDecoration = "";
  }
}

// Create edit action
function addEditAction(event) {
  const todoContent = event.target.parentElement.querySelector(".item-content"),
    editButton = event.target.parentElement.querySelector(".edit-item-button");
  saveNewContent = document.createElement("button");

  todoContent.setAttribute("contenteditable", "true");
  todoContent.focus();

  saveNewContent.classList.add("save-item-button", "ti-save");
  editButton.replaceWith(saveNewContent);
  saveNewContent.onclick = function (event) {
    todoContent.setAttribute("contenteditable", "false");
    event.target.replaceWith(editButton);
  };
}

// Create delete action
function addDeleteAction(event) {
  event.target.parentElement.parentElement.remove();
}
