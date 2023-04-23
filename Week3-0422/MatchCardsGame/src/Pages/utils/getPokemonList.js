import { EASY_POKEMON_LIST , NORMAL_POKEMON_LIST , HARD_POKEMON_LIST } from "../../assets/cardsData";

const getPokemonListRandom = (currentDifficulty) => {
  let pokemonList = [];

  if (currentDifficulty === "Easy") pokemonList = EASY_POKEMON_LIST;
  if (currentDifficulty === "Normal") pokemonList = NORMAL_POKEMON_LIST;
  if (currentDifficulty === "Hard") pokemonList = HARD_POKEMON_LIST;
  let gamePokemonList = [...pokemonList, ...pokemonList];

  const setRandomCardList = (cardList) => {
    return [...cardList]
      .sort(() => Math.random() - 0.5)
      .sort(() => Math.random() - 0.5);
  };

  const RandomCardList = setRandomCardList(gamePokemonList);

  return RandomCardList;
};

export default getPokemonListRandom