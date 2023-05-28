import { styled } from "styled-components";
import Header from "./Header";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #d9edff;
`;

const BodySection = styled.div`
  display: grid;
  grid-template-columns: 30% 70%;
  width: 100%;
  height: calc(100vh - 10rem);
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
