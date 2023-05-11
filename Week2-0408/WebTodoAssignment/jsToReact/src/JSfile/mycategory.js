import { localStorageApi } from "../Api/Api";

const myCategoryJS = () => {
    const parsedlocalData = localStorageApi.getItemReturnParse("todoData");
    const dragDropcontainer =
      document.querySelectorAll(".dragDropcontainer")[0];

    parsedlocalData.forEach((item) => {
      for (const key in item) {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("dragElement");
        categoryDiv.classList.add(item[key].mainColor);
        categoryDiv.draggable = true;
        categoryDiv.innerHTML = key;

        categoryDiv.addEventListener("dragstart", () => {
          categoryDiv.classList.add("dragging");
        });

        categoryDiv.addEventListener("dragend", () => {
          categoryDiv.classList.remove("dragging");
        });

        dragDropcontainer.appendChild(categoryDiv);
      }
    });

    dragDropcontainer.addEventListener("dragover", (e) => {
      e.preventDefault();
      const draggable = document.querySelector(".dragging");
      dragDropcontainer.insertBefore(draggable, e.target);
    });

    dragDropcontainer.addEventListener("drop", (e) => {
      e.preventDefault();
      const dragItemIndex = document.querySelectorAll(".dragElement");
      const dragItemIndexArr = Array.from(dragItemIndex);

      const newOrederedTodoArr = dragItemIndexArr.map((item) => {
        return parsedlocalData.filter((category) => {
          return category[item.innerHTML];
        })[0];
      });

      localStorageApi.setItem("todoData", JSON.stringify(newOrederedTodoArr));
    });
  };


  export default myCategoryJS