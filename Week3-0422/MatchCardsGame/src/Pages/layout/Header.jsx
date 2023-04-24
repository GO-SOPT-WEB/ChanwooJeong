import styled from "styled-components";
import { ChangeThemeBtn ,ResetButton } from "../../components/Buttons";

const Wrapper = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 20rem;
  background-color: ${(props)=> props.theme.headerColor};
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
    color: ${(props)=> props.theme.textColor};
  }
`;

const ScoreBoard = styled.div`
color: ${(props)=> props.theme.textColor};
  font-size: 4.5rem;
`;
const ButtonBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
  width: 20%;
`;

const Header = (props) => {
  const { currentDifficulty, matchedArr, allReset ,setIsDark} = props;

  const howManyCorrect = matchedArr.length;
  return (
    <>
      <Wrapper>
        <ButtonBox>
          <ChangeThemeBtn setIsDark={setIsDark}  />
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
