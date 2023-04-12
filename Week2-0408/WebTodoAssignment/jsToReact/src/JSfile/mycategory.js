// import TODO_DATA from "../Data/todoData";

// window.onload = function () {

//   const dragDropcontainer = document.querySelectorAll(".dragDropcontainer")[0];

//   TODO_DATA.forEach((item) => {
//     for (const key in item) {
//       const categoryDiv = document.createElement("div");
//       categoryDiv.classList.add("dragElement");
//       categoryDiv.classList.add(item[key].mainColor);
//       categoryDiv.draggable = true;
//       categoryDiv.innerHTML = key;

//       categoryDiv.addEventListener("dragstart", () => {
//         categoryDiv.classList.add("dragging");
//       });

//       categoryDiv.addEventListener("dragend", () => {
//         categoryDiv.classList.remove("dragging");
//       });

//       dragDropcontainer.appendChild(categoryDiv);
//     }
//   });

//   dragDropcontainer.addEventListener("dragover", (e) => {
//     e.preventDefault();
//     const draggable = document.querySelector(".dragging");
//     dragDropcontainer.insertBefore(draggable, e.target);
//   });

//   dragDropcontainer.addEventListener("drop", (e) => {
//     e.preventDefault();
//     const dragItemIndex = document.querySelectorAll(".dragElement")
//     const dragItemIndexArr = Array.from(dragItemIndex);
//     console.log(dragItemIndexArr)
//     dragItemIndexArr.map((item)=>console.log(item.innerHTML))
//   });
// };
