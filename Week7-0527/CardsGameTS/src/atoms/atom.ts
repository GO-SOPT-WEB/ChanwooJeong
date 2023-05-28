import { atom } from "recoil";

export const darkModeAtom = atom({
  key: "darkMode",
  default: false,
});

export const difficultyAtom = atom({
  key: "difficulty",
  default: "Easy",
});

export const matchingCardsAtom = atom({
  key: "matchingCards",
  default: [],
});

export const matchedCardsAtom = atom({
  key: "matchedCards",
  default: [],
});

export const modalOpenAtom = atom({
  key: "isModalOpen",
  default: false,
});