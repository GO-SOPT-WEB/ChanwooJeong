import { atom } from "recoil";

export const darkModeAtom = atom({
    key: "darkMode",
    default: false,
  });

export const difficultyAtom = atom({
  key: "difficulty",
  default: "Easy",
});