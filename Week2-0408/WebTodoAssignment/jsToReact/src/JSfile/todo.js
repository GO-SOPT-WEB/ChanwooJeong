import TODO_DATA from "../Data/todoData";
import { localStorageApi } from "../Api/Api";

// TODO_DATA 의 남은 할일(finsished = false) 갯수 세는 함수
const countFinishedTodo = () => {
  const chageNum = document.querySelector(".chageNum");

  let haveTodo = 0;

  const parsedlocalData = localStorageApi.getItemReturnParse("todoData")

  parsedlocalData.forEach((todoItem) => {
    for (let key in todoItem) {
      const value = todoItem[key];
      value.todolist.forEach((todoSet) => {
        if (!todoSet.finished) haveTodo += 1;
      });
    }
  });
  chageNum.innerHTML = haveTodo;
};

//template 과 todoData 를 넣으면 화면에 카테고리와 todo를 생성 + 모달연결 해주는 함수
const addCategoryTodo = (todoDataArr) => {
  const todoTemplate = document.querySelector("#temp-todo");
  const todoSection = document.querySelector("#todoSection");

  while (todoSection.firstChild) {
    todoSection.removeChild(todoSection.firstChild);
  }

  const div = document.createElement("div");
  div.innerHTML = todoTemplate.innerHTML;

  // todoData배열을 순환하며 복사한 템플릿에 할일리스트와 카테고리이름을 생성
  todoDataArr.forEach((todoItem) => {
    for (let key in todoItem) {
      const value = todoItem[key];
      const element = div.cloneNode(true);
      const todoListUl = element.querySelector(".todoList");

      //할일리스트 생성
      value.todolist.map((item) => {
        let li = document.createElement("li");
        li.innerHTML = `<input id="${
          key + item.todo
        }" type="checkbox" class="heart" value="${item.todo}" ${
          item.finished ? "checked" : ""
        } >
          <label for="${key + item.todo}">${item.todo}</label>`;

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
          const retrunIndex = todoItem[key].todolist.findIndex((data) => {
            return data.todo === item.value;
          });

          if (isChecked) {
            todoItem[key].todolist[retrunIndex].finished = true;
            localStorageApi.setItem("todoData", JSON.stringify(todoDataArr));

            countFinishedTodo();
          } else {
            todoItem[key].todolist[retrunIndex].finished = false;
            localStorageApi.setItem("todoData", JSON.stringify(todoDataArr));
            countFinishedTodo();
          }
        });
      });

      //할일 추가하기 버튼 클릭시 모달 창 오픈
      const plusButton = element.querySelector(".plusButton");

      const addTodoModal = document.querySelector(".addTodoModal");
      let categoryName = document.querySelector("#categoryName");
      const exitIcon = document.querySelector(".exitIcon");

      plusButton.addEventListener("click", (e) => {
        categoryName.innerHTML = key;
        addTodoModal.style.display = "flex";
        const addTodoInput = document.querySelector("#addTodoInput");
        addTodoInput.focus();
      });

      exitIcon.addEventListener("click", (e) => {
        addTodoModal.style.display = "none";
      });

      todoSection.appendChild(element);
    }
  });
};

//할일 추가하는 함수
const addTodo = (category, newTodo) => {
  const parsedlocalData = localStorageApi.getItemReturnParse("todoData")

  parsedlocalData.forEach((todoItem, i) => {
    if (todoItem[category]) {
      const retrunIndex = parsedlocalData[i][category]["todolist"].findIndex(
        (data) => {
          return data.todo === newTodo;
        }
      );

      if (retrunIndex !== -1) return alert("중복된 할일이 있습니다!");
      parsedlocalData[i][category]["todolist"].push({
        todo: newTodo,
        finished: false,
      });
    }
  });

  localStorageApi.setItem("todoData", JSON.stringify(parsedlocalData));
  const newParsedlocalData = localStorageApi.getItemReturnParse("todoData")

  addCategoryTodo(newParsedlocalData);
  countFinishedTodo();
};

//모달 생성함수
const createModal = () => {
  const addTodoInput = document.querySelector("#addTodoInput");
  const addTodoBtn = document.querySelector("#addTodoBtn");

  addTodoBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (!addTodoInput.value || addTodoInput.value === " ")
      return alert("할일을 적어주세요!");

    let categoryName = document.querySelector("#categoryName").innerHTML;
    addTodo(categoryName, addTodoInput.value);

    const addTodoModal = document.querySelector(".addTodoModal");
    document.querySelector("#addTodoInput").value = " ";
    addTodoModal.style.display = "none";
  });
};

//모든 DOM이 그려지면 진행되는 코드
window.onload = function () {
  // 로컬스토리지 확인후 값이 없다면 기존의 값을 로컬에 추가한후 투두리스트 생성 있다면 있는 데이터 가져오기
  if (!localStorageApi.getItem("todoData")) {
    localStorageApi.setItem("todoData", JSON.stringify(TODO_DATA));
    addCategoryTodo(TODO_DATA);
  } else {
    const parsedlocalData = localStorageApi.getItemReturnParse("todoData")
    addCategoryTodo(parsedlocalData);
  }

  //달력에 해야하는 할일 갯수를 카운트해서 숫자로 생성
  countFinishedTodo();
  //모달에서 할일을 추가할때 사용되는 로직 생성
  createModal();
};
