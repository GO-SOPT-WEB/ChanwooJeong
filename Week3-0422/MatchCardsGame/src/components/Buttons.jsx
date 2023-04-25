import styled, { css } from "styled-components";

const ResetBtnWrapper = styled.button`
  margin: 0 1rem;
  padding: 1rem;

  border: none;
  border-radius: 0.5rem;

  background-color: #13e51a;
  box-shadow: 0 0.8rem 0 #529e55;

  color: white;
  font-size: 3rem;

  :hover {
    cursor: pointer;
    margin-top: 0.5rem;
    box-shadow: 0 0.5rem 0 #529e55;
  }
`;


/** 전체 리셋 버튼 **/
const ResetButton = (props) => {
  const { allReset } = props;

  return <ResetBtnWrapper onClick={allReset}>RESET</ResetBtnWrapper>;
};

const ChangeThemeWrapper = styled(ResetBtnWrapper)``;


/** 테마 변경 버튼 **/  
const ChangeThemeBtn = (props) => {
  const { setIsDark } = props;

  return (
    <ChangeThemeWrapper onClick={() => setIsDark((prev) => !prev)}>
      Theme
    </ChangeThemeWrapper>
  );
};

const DifficultyBtnWrapper = styled.button`
  width: 10rem;
  height: 5rem;

  margin: 1rem;
  border: none;
  border-radius: 0.5rem;

  background-color: #13e51a;
  box-shadow: 0 0.8rem 0 #529e55;

  color: white;
  font-size: 2rem;

  cursor: pointer;

  ${(props) =>
    props.difficulty === props.currentDifficulty &&
    css`
      cursor: pointer;
      margin-top: 1.4rem;
      box-shadow: 0 0.4rem 0 #529e55;
    `};
`;


/** 난이도 변경 버튼 **/
const DifficultyButton = (props) => {
  const { difficulty, setDifficulty, currentDifficulty, reset } = props;

  const changeGameDifficulty = () => {
    setDifficulty(difficulty);
  };

  return (
    <DifficultyBtnWrapper
      onClick={() => {
        changeGameDifficulty();
        reset();
      }}
      difficulty={difficulty}
      currentDifficulty={currentDifficulty}
    >
      {difficulty}
    </DifficultyBtnWrapper>
  );
};

export { ChangeThemeBtn, ResetButton, DifficultyButton };