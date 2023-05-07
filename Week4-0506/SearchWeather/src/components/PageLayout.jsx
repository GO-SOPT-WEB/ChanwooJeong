import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: 5px solid black;
`;


const PageLayout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageLayout;
