const navCategorys = document.getElementsByClassName("categoryCheckbox");
const categoryArray = Array.from(navCategorys);

const activeNav = ["all"];

// 필터에 맞는 카드 배열에 담아서 return 하는 함수
const filterCard = (activeNav) => {
  let filterdCard = [];
  if (activeNav.indexOf("all") !== -1) {
    return POKEMON_LIST;
  } else {
    activeNav.map((activefilter) => {
      const evolutionN = activefilter.charAt(activefilter.length - 1);
      return POKEMON_LIST.filter((card) => {
        if (card.evolution === Number(evolutionN))
          return filterdCard.push(card);
      });
    });
  }
  return filterdCard;
};

// navFilterSection 에 필터종류 노출 및 삭제
const addFilteredSection = (activeNavArray) => {
  const tagUl = document.querySelectorAll(".tagUl")[0];

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
      checkbox.checked = !checkbox.checked;
      addFilteredSection(activeNav);
      const filteredCard = filterCard(activeNav);
      addCardItem(filteredCard);
    });

    return li;
  };

  while (tagUl.firstChild) {
    tagUl.removeChild(tagUl.firstChild);
  }
  activeNavArray.map((category) => {
    tagUl.appendChild(createNavTagItem(category));
  });
};

//필터에 따른 카드 생성 함수
const addCardItem = (filteredCard) => {
  const cardTemplate = document.querySelector("#temp-card");
  const div = document.createElement("div");
  div.innerHTML = cardTemplate.innerHTML;

  const cardSection = document.querySelector("#cardSection");

  while (cardSection.firstChild) {
    cardSection.removeChild(cardSection.firstChild);
  }

  filteredCard.map((card, i) => {
    const element = div.cloneNode(true);
    const tagContainer = element.querySelectorAll(".tagContainer")[0];
    const tagModalContainer = element.querySelectorAll(
      ".tagModal_container"
    )[0];

    card.tag.map((tag) => {
      let li = document.createElement("li");
      li.innerHTML = tag;
      li.className = "tag";
      tagContainer.appendChild(li);
    });

    card.tag.map((tag) => {
      let li = document.createElement("li");
      li.innerHTML = tag;
      li.className = "tag";
      tagModalContainer.appendChild(li);
    });

    let html = element.innerHTML;
    html = html.replace("{pokemonName}", card.name);
    html = html.replace("{img}", card.img);
    html = html.replace("{pokemonImg}", `${card.name} 이미지`);
    html = html.replace("{JJimN}", `JJimN${i}`);
    html = html.replace("{JJimN}", `JJimN${i}`);
    element.innerHTML = html;

    const plusButton = element.querySelector(".plusTag");
    const tagModal = element.querySelector(".tagModal");
    const exitIcon = element.querySelector(".exitIcon");

    plusButton.addEventListener("click", (e) => {
      tagModal.style.display = "flex";
    });

    exitIcon.addEventListener("click", (e) => {
      tagModal.style.display = "none";
    });

    cardSection.appendChild(element);
  });
};

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

    addFilteredSection(activeNav);
    const filteredCard = filterCard(activeNav);
    addCardItem(filteredCard);
  });
});


//처음 로딩시 전체 카드 노출 및 포켓몬 DATA 동기화
window.onload = function () {
  //포켓몬리스트Data 동기화 (로컬스토리지 반영)
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var newPokemon = localStorage.getItem(key);
    const pokemonObj = JSON.parse(newPokemon);
    POKEMON_LIST.push(pokemonObj);
  }

  addFilteredSection(activeNav);
  const filteredCard = filterCard(activeNav);
  addCardItem(filteredCard);
};