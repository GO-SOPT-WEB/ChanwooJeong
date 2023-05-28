import styled from "styled-components";
import { DifficultyButton } from "../../components/Buttons";
import { difficultyAtom } from "../../atoms/atom";
import { useRecoilState } from "recoil";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;

  height: 10rem;
  padding: 1rem 0;
`;

const DifficultyType = ["Easy", "Normal", "Hard"];

const DifficultySection = (props) => {
  // const { currentDifficulty, setDifficulty, reset } = props;

  const [difficulty , setDifficulty] = useRecoilState(difficultyAtom)

  return (
    <Wrapper>
      {DifficultyType.map((difficultyOption, i) => {
        return (
          <DifficultyButton
            key={i}
            onClick={() => {
              setDifficulty(difficultyOption);
              // reset();
            }}
            difficulty={difficultyOption}
            currentDifficulty={difficulty}
          >
            {difficultyOption}
          </DifficultyButton>
        );
      })}
    </Wrapper>
  );
};

export default DifficultySection;