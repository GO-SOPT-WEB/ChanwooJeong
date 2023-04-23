import styled from "styled-components";

const ResetBtnWrapper = styled.button`
  position: absolute;
  right: 10rem;

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

const ResetButton = () => {
  return <ResetBtnWrapper>RESET</ResetBtnWrapper>;
};

const DifficultyBtnWrapper = styled.button``;

const DifficultyButton = () => {
  return <DifficultyBtnWrapper>난이도 버튼</DifficultyBtnWrapper>;
};

export { ResetButton, DifficultyButton };
