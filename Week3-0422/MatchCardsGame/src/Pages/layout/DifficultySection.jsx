import styled from "styled-components";
import { DifficultyButton } from "../../components/Buttons";

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;

  padding: 1rem 0;

  height: 10rem;
`;

const DifficultySection = () => {
  return (
    <Wrapper>
      <DifficultyButton difficulty={"Easy"}/>
      <DifficultyButton difficulty={"Normal"}/>
      <DifficultyButton difficulty={"Hard"}/>
    </Wrapper>
  );
};

export default DifficultySection;
