import styled from "styled-components";
import { ChangeThemeBtn ,ResetButton } from "../../components/Buttons";

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20rem;
  background-color: #f8f8f8;
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
    color: #333;
  }
`;

const ScoreBoard = styled.div`
  font-size: 4.5rem;
`;
const ButtonBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
  width: 20%;
`;

const Header = (props) => {
  const { currentDifficulty, matchedArr, allReset } = props;

  const howManyCorrect = matchedArr.length;
  return (
    <>
      <Wrapper>
        <ButtonBox>
          <ChangeThemeBtn  />
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
        </MainCenterBox>
        <ButtonBox>
          <ResetButton allReset={allReset} />
        </ButtonBox>
      </Wrapper>
    </>
  );
};

export default Header;
