import { atom } from "recoil";

export const darkModeAtom = atom({
  key: "darkMode",
  default: false,
});

export const difficultyAtom = atom({
  key: "difficulty",
  default: "Easy",
});

interface CardMatching {
  Primarykey: number;
  pokemonName: string;
}

export const matchingCardsAtom = atom<CardMatching[]>({
  key: "matchingCards",
  default: [],
});

interface CardMatched {
  first: {
    Primarykey: number;
    pokemonName: string;
  };
  second: {
    Primarykey: number;
    pokemonName: string;
  };
}

export const matchedCardsAtom = atom<CardMatched[]>({
  key: "matchedCards",
  default: [],
});

export const modalOpenAtom = atom({
  key: "isModalOpen",
  default: false,
});
