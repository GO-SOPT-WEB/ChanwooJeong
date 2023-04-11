import TODO_DATA from "./Data/todoData";

const addTodo = (category, newTodo) => {
  const categoryTodoList = TODO_DATA[category].todolist;

  const retrunIndex = categoryTodoList.findIndex((data) => {
    return data.todo === newTodo;
  });
  if (retrunIndex !== -1) return alert("중복된 할일이 있습니다!");
  categoryTodoList.push({ todo: newTodo, finished: false });
  addCategoryTodo();
  countFinishedTodo();
};

// TODO_DATA 의 남은 할일(finsished = false) 갯수 세는 함수
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

//template 과 todoData 를 넣으면 화면에 카테고리와 todo를 생성 + 모달연결 해주는 함수
const addCategoryTodo = () => {
  const todoTemplate = document.querySelector("#temp-todo");
  const todoSection = document.querySelector("#todoSection");

  while (todoSection.firstChild) {
    todoSection.removeChild(todoSection.firstChild);
  }

  const div = document.createElement("div");
  div.innerHTML = todoTemplate.innerHTML;

  // todoData객체를 순환하며 복사한 템플릿에 할일리스트와 카테고리이름을 생성
  for (let key in TODO_DATA) {
    const value = TODO_DATA[key];
    const element = div.cloneNode(true);
    const todoListUl = element.querySelector(".todoList");

    //할일리스트 생성
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

    // 카테고리이름과 컬러클래스 지정
    let html = element.innerHTML;
    html = html.replace("{todoCategory}", key);
    html = html.replace("{mainColor}", value.mainColor);

    element.innerHTML = html;

    //하트체크박스를 누르면 todoData에서 finished의 값이 변경되며 countFinishedTodo함수를 통해 남은 할일을 세게하는 코드
    const liCheckbox = element.querySelectorAll(".heart");
    const todoCheckedArr = Array.from(liCheckbox);

    todoCheckedArr.map((item) => {
      item.addEventListener("change", function (event) {
        const isChecked = event.target.checked;
        const retrunIndex = TODO_DATA[key].todolist.findIndex((data) => {
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

    //할일 추가하기 버튼 클릭시 모달 생성
    const plusButton = element.querySelector(".plusButton");
    const addTodoModal = document.querySelector(".addTodoModal");
    let categoryName = document.querySelector("#categoryName");
    const exitIcon = document.querySelector(".exitIcon");

    plusButton.addEventListener("click", (e) => {
      categoryName.innerHTML = key;
      addTodoModal.style.display = "flex";
    });

    exitIcon.addEventListener("click", (e) => {
      addTodoModal.style.display = "none";
    });

    todoSection.appendChild(element);
  }

  const addTodoInput = document.querySelector("#addTodoInput");
  const addTodoBtn = document.querySelector("#addTodoBtn");
  const addTodoModal = document.querySelector(".addTodoModal");
  addTodoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (!addTodoInput.value) return alert("할일을 적어주세요!");
    let categoryName = document.querySelector("#categoryName").innerHTML;
    addTodo(categoryName, addTodoInput.value);
    document.querySelector("#categoryName").innerHTML = "";
    addTodoModal.style.display = "none";
  });
};

//모든 DOM이 그려지면 진행되는 코드
window.onload = function () {
  addCategoryTodo(TODO_DATA);
  countFinishedTodo();
};
