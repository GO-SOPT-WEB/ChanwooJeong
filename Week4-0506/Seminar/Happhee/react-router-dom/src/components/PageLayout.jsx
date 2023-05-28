import styled from "styled-components";
import Header from "./Header";

const St = {
  PageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 100%;
  `,
};

const PageLayout = ({children}) => {
  return (
    <>
      <St.PageWrapper>
        <Header />
        {children}
      </St.PageWrapper>
    </>
  );
};

export default PageLayout;
