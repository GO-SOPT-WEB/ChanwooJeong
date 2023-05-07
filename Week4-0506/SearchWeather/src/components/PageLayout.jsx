import { styled } from "styled-components";
import Header from "./Header";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: 5px solid black;
`;

const BodySection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
`;

const PageLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <BodySection>{children}</BodySection>
    </Wrapper>
  );
};

export default PageLayout;
