import TODO_DATA from "./Data/todoData";

const addCategoryTodo = (template, todoData) => {
  const div = document.createElement("div");
  div.innerHTML = template.innerHTML;
  const todoSection = document.querySelector("#todoSection");

  for (let key in todoData) {
    const value = todoData[key];
    const element = div.cloneNode(true);
    const todoListUl = element.querySelector(".todoList");

    value.todolist.map((item) => {
      let li = document.createElement("li");
      li.innerHTML = `<input id="${
        item.todo
      }" type="checkbox" class="heart" value="${item.todo}" ${
        item.finished ? "checked" : ""
      } >
        <label for="${item.todo}">${item.todo}</label>`;

      li.className = "todo";
      todoListUl.appendChild(li);
    });

    let html = element.innerHTML;
    html = html.replace("{todoCategory}", key);
    html = html.replace("{mainColor}", value.mainColor);

    element.innerHTML = html;

    const liCheckbox = element.querySelectorAll(".heart");
    const todoCheckedArr = Array.from(liCheckbox);

    todoCheckedArr.map((item) => {
      item.addEventListener("change", function (event) {
        const isChecked = event.target.checked;
        const retrunIndex = todoData[key].todolist.findIndex((data) => {
          return data.todo === item.value;
        });

        if (isChecked) {
          TODO_DATA[key].todolist[retrunIndex].finished = true;
          countFinishedTodo();
        } else {
          TODO_DATA[key].todolist[retrunIndex].finished = false;
          countFinishedTodo();
        }
      });
    });

    todoSection.appendChild(element);
  }
};

const countFinishedTodo = () => {
  const chageNum = document.querySelector(".chageNum");

  let haveTodo = 0;

  for (let key in TODO_DATA) {
    const value = TODO_DATA[key];
    value.todolist.forEach((todoSet) => {
      if (!todoSet.finished) haveTodo += 1;
    });
  }
  chageNum.innerHTML = haveTodo;
};


window.onload = function () {
  const todoTemplate = document.querySelector("#temp-todo");
  addCategoryTodo(todoTemplate, TODO_DATA);
  countFinishedTodo();
};
