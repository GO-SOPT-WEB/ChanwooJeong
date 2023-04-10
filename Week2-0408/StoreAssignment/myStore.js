const navCategorys = document.getElementsByClassName("categoryCheckbox");
const categoryArray = Array.from(navCategorys);

const activeNav = ["all"];

const createNavTagItem = (name) => {
  let navTagName = "";
  switch (name) {
    case "all":
      navTagName = "전체";
      break;
    case "evolution1":
      navTagName = "진화1";
      break;
    case "evolution2":
      navTagName = "진화2";
      break;
    case "evolution3":
      navTagName = "진화3";
      break;
    default:
      alert("맞는 nav가 없습니다.");
  }

  let li = document.createElement("li");
  li.className = name;
  li.innerHTML = `${navTagName} &#10008; `;
  li.addEventListener("click", () => {
    const index = activeNav.indexOf(name);
    activeNav.splice(index, 1);
    const checkbox = document.querySelectorAll(`#${name}`)[0];
    console.log(checkbox);
    checkbox.checked = !checkbox.checked;
    addCategorySection(activeNav);
  });
  return li;
}

const addCategorySection = (activeNavArray) => {
  const tagUl = document.querySelectorAll(".tagUl")[0];

  while (tagUl.firstChild) {
    tagUl.removeChild(tagUl.firstChild);
  }
  activeNavArray.map((category) => {
    tagUl.appendChild(createNavTagItem(category));
  });
};

addCategorySection(activeNav);

// navCategory 클릭시 category 활성화
categoryArray.map((navCatgory) => {
  navCatgory.addEventListener("click", (e) => {
    const isChecked = e.currentTarget.checked;
    const navCatgoryId = e.currentTarget.id;

    if (isChecked) {
      activeNav.push(navCatgoryId);
    } else {
      const index = activeNav.indexOf(navCatgoryId);
      activeNav.splice(index, 1);
    }

    addCategorySection(activeNav);
  });
});
