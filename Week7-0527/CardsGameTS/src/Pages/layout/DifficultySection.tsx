import styled from "styled-components";
import { DifficultyButton } from "../../components/Buttons";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;

  height: 10rem;
  padding: 1rem 0;
`;

const DifficultyType = ["Easy", "Normal", "Hard"];

const DifficultySection = (props) => {
  const { currentDifficulty, setDifficulty, reset } = props;

  return (
    <Wrapper>
      {DifficultyType.map((difficulty, i) => {
        return (
          <DifficultyButton
            key={i}
            onClick={() => {
              setDifficulty(difficulty);
              reset();
            }}
            difficulty={difficulty}
            currentDifficulty={currentDifficulty}
          >
            {difficulty}
          </DifficultyButton>
        );
      })}
    </Wrapper>
  );
};

export default DifficultySection;