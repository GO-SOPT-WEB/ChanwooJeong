import styled from "styled-components";
import { DifficultyButton } from "../../components/Buttons";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 1rem 0;

  height: 10rem;
`;

const DifficultyType = ["Easy", "Normal", "Hard"];

const DifficultySection = (props) => {
  const { currentDifficulty , setDifficulty ,reset} = props;

  return (
    <Wrapper>
      {DifficultyType.map((difficulty, i) => (
        <DifficultyButton
          key={i}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          currentDifficulty={currentDifficulty}
          reset={reset}
        />
      ))}
    </Wrapper>
  );
};

export default DifficultySection;
