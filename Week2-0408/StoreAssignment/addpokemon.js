//포켓몬리스트Data 동기화 (로컬스토리지 반영)
for (var i = 0; i < localStorage.length; i++) {
  var key = localStorage.key(i);
  var newPokemon = localStorage.getItem(key);
  const pokemonObj = JSON.parse(newPokemon);
  POKEMON_LIST.push(pokemonObj);
}

//이미지 미리보기 코드
const pokemonPhotoInput = document.getElementById("pokemon-photo");
const previewImg = document.getElementById("preview");

pokemonPhotoInput.addEventListener("change", (e) => {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = ({ target }) => {
      previewImg.src = target.result;
    };
    reader.readAsDataURL(file);
  }
});

//포켓몬 등록 버튼 + 등록이벤트리스너
const registButton = document.getElementById("registButton");

registButton.addEventListener("click", () => {
  const pokemonLength = POKEMON_LIST.length;
  const pokemonName = document.getElementById("pokemonName").value;
  const hashTag = document.getElementById("hashtag").value;
  const hashTagArray = hashTag.split(",");
  const evolution = document.getElementById("pokemon-evolution").value;

  const pokemonObj = {
    name: pokemonName,
    tag: hashTagArray,
    img: previewImg.src,
    JJim: false,
    evolution: Number(evolution),
  };

//   로컬스토리지에 저장
  localStorage.setItem(
    `mypokemonObj${pokemonLength + 1}`,
    JSON.stringify(pokemonObj)
  );
  window.location.href = "/Week2-0408/StoreAssignment/myStore.html";
});
