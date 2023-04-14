import "../CSS/mycategory.css";
import "../JSfile/mycategory";
import { localStorageApi } from "../Api/Api";

function MyCategory($container) {
  this.$container = $container;

  window.onload = function () {
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

  this.render = () => {
    this.$container.innerHTML = ` 
      <div id="changeCategoryContainer">
        <header>
            <h1>❤️Drag Todo Category Index❤️</h1>
        </header>

        <div class="dragDropcontainer">
        </div>
        <footer>
            <button type="button" onclick="location.href='/'">
                <img src="https://cdn.icon-icons.com/icons2/1659/PNG/512/3844435-home-house_110321.png" alt="calendar"/>
                <div>홈</div>
            </button>
        </footer>
      </div>
    `;
  };
  this.render();
}

export default MyCategory;
