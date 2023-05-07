import { styled } from "styled-components";
import Header from "./Header";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: 5px solid black;
`;

const PageLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
};

export default PageLayout;
