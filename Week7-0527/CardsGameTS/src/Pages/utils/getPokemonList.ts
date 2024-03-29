import { POKEMON_LIST } from "../../assets/cardsData";

interface Card {
  id: number;
  name: string;
  tag: string[];
  img: string;
  JJim: boolean;
  evolution: number;
}

const getPokemonListRandom = (currentDifficulty: string) => {
  let pokemonList: Card[] = [];

  /** 카드 data 배열을 전달해주면 랜덤으로 섞어주는 변수 */
  const setRandomCardList = (cardList: Card[]) => {
    return [...cardList]
      .sort(() => Math.random() - 0.5)
      .sort(() => Math.random() - 0.5);
  };

  const RandomCardList = setRandomCardList(POKEMON_LIST);

  /** 난이도에 따른 카드 data 갯수 설정 */
  if (currentDifficulty === "Easy") pokemonList = RandomCardList.slice(0, 5);
  if (currentDifficulty === "Normal") pokemonList = RandomCardList.slice(0, 7);
  if (currentDifficulty === "Hard") pokemonList = RandomCardList.slice(0, 9);

  /** 짝생성 */
  let gamePokemonList = [...pokemonList, ...pokemonList];

  const reRandomCardList = setRandomCardList(
    setRandomCardList(setRandomCardList(setRandomCardList(gamePokemonList)))
  );

  return reRandomCardList;
};

export default getPokemonListRandom;
