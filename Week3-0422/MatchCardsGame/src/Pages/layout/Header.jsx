import styled from "styled-components";
import { ResetButton } from "../../components/Buttons";

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 20rem;
  background-color: #f8f8f8;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  h1 {
    font-size: 4.5rem;
    color: #333;
  }
`;

const ScoreBoard = styled.div`
  font-size: 4.5rem;
`;

const Header = () => {
  return (
    <>
      <Wrapper>
        <h1>🐣포켓몬 카드 맞추기 게임🐣</h1>
        <ScoreBoard>0 / 5</ScoreBoard>
        <ResetButton />
      </Wrapper>
    </>
  );
};

export default Header;
