import {
  POKEMON_LIST,
} from "../../assets/cardsData";

const getPokemonListRandom = (currentDifficulty) => {
  let pokemonList = [];

  const setRandomCardList = (cardList) => {
    return [...cardList]
      .sort(() => Math.random() - 0.5)
      .sort(() => Math.random() - 0.5);
  };

  const RandomCardList = setRandomCardList(POKEMON_LIST);

  if (currentDifficulty === "Easy") pokemonList = RandomCardList.slice(0, 5);
  if (currentDifficulty === "Normal") pokemonList = RandomCardList.slice(0, 7);
  if (currentDifficulty === "Hard") pokemonList = RandomCardList.slice(0, 9);
  let gamePokemonList = [...pokemonList, ...pokemonList];

  return gamePokemonList;
};

export default getPokemonListRandom;
