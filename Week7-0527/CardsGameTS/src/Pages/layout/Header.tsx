import styled from "styled-components";
import { BigButton } from "../../components/Buttons";
import { useEffect } from "react";
import { ProgressBar } from "react-progressbar-fancy";
import {
  darkModeAtom,
  difficultyAtom,
  matchedCardsAtom,
  matchingCardsAtom,
  modalOpenAtom,
} from "../../atoms/atom";
import { useRecoilValue, useSetRecoilState } from "recoil";

const Header = () => {
  const setIsDark = useSetRecoilState(darkModeAtom);
  const currentDifficulty = useRecoilValue(difficultyAtom);
  const matchedArr = useRecoilValue(matchedCardsAtom);

  const setDifficultyFn = useSetRecoilState(difficultyAtom);
  const setMatchingCardsArr = useSetRecoilState(matchingCardsAtom);
  const setMatchedCardsArr = useSetRecoilState(matchedCardsAtom);

  /** 모달 열고 닫는 useState */
  const setIsModalOpen = useSetRecoilState(modalOpenAtom);

  const allReset = () => {
    setDifficultyFn("Easy");
    setMatchingCardsArr([]);
    setMatchedCardsArr([]);
  };
  /** 난이도에 따른 목표 갯수 설정 */
  let goalCount = 0;
  if (currentDifficulty === "Easy") goalCount = 5;
  if (currentDifficulty === "Normal") goalCount = 7;
  if (currentDifficulty === "Hard") goalCount = 9;

  /** 현재까지 맞춘 카드 쌍의 갯수 설정 */
  const howManyCorrect = matchedArr.length;

  /** 목표한 쌍과 맞춘 쌍의 카드가 일치한다면 Game Clear 모달 오픈 */
  useEffect(() => {
    if (goalCount === howManyCorrect) setIsModalOpen(true);
  }, [howManyCorrect, setIsModalOpen, goalCount]);

  const percent = (howManyCorrect / goalCount) * 100;

  return (
    <>
      <Wrapper>
        <ButtonBox>
          <BigButton onClick={() => setIsDark((prev) => !prev)}>
            Theme
          </BigButton>
        </ButtonBox>
        <MainCenterBox>
          <h1>🐣포켓몬 카드 맞추기 게임🐣</h1>
          <ScoreBoard>
            {howManyCorrect} /{" "}
            {
              {
                Easy: "5",
                Normal: "7",
                Hard: "9",
              }[currentDifficulty]
            }
          </ScoreBoard>
          <StyledProgressBar score={percent} />
        </MainCenterBox>
        <ButtonBox>
          <BigButton onClick={allReset}>AllReset</BigButton>
        </ButtonBox>
      </Wrapper>
    </>
  );
};

export default Header;

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 25rem;
  background-color: ${(props) => props.theme.headerColor};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const MainCenterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 60%;

  h1 {
    font-size: 4.5rem;
    color: ${(props) => props.theme.textColor};
  }
`;

const ScoreBoard = styled.div`
  color: ${(props) => props.theme.textColor};
  font-size: 4.5rem;
`;

const StyledProgressBar = styled(ProgressBar)`
  width: 60%;
  .number {
    display: none;
  }
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
`;
