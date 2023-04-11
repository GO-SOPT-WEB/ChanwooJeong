import TODO_DATA from "./Data/todoData";

const addCategoryTodo = (template, todoData) => {
  const div = document.createElement("div");
  div.innerHTML = template.innerHTML;
  const todoSection = document.querySelector("#todoSection");

  for (let key in todoData) {
    const value = todoData[key];
    const element = div.cloneNode(true);
    const todoListUl = element.querySelector(".todoList");

    value.todolist.map((item, i) => {
      let li = document.createElement("li");
      li.innerHTML = `<input id="${item.todo}" type="checkbox" class="heart" >
        <label for="${item.todo}">${item.todo}</label>`;
      li.className = "todo";
      todoListUl.appendChild(li);
    });

    let html = element.innerHTML;
    html = html.replace("{todoCategory}", key);
    html = html.replace("{mainColor}", value.mainColor);

    element.innerHTML = html;
    todoSection.appendChild(element);
  }
};

window.onload = function () {
  const todoTemplate = document.querySelector("#temp-todo");
  addCategoryTodo(todoTemplate, TODO_DATA);
};
