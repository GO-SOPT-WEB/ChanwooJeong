import styled, { css } from "styled-components";

/** 헤더에 들어가는 큰 버튼 **/

interface BigButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const BigButton = ({ children, ...props }: BigButtonProps) => {
  return <ResetBtnWrapper {...props}>{children}</ResetBtnWrapper>;
};

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

/** 난이도 변경 버튼 **/
interface DifficultyBtnWrapperProps {
  difficulty: string;
  currentDifficulty: string;
}

interface DifficultyButtonProps extends DifficultyBtnWrapperProps {
  children: React.ReactNode;
  onClick: () => void;
}

const DifficultyButton = ({ children, ...props }: DifficultyButtonProps) => {
  return <DifficultyBtnWrapper {...props}>{children}</DifficultyBtnWrapper>;
};

const DifficultyBtnWrapper = styled.button<DifficultyBtnWrapperProps>`
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

export { BigButton, DifficultyButton };
