import VideoList from "./components/VideoList";
import { useState } from "react";
import styled from "styled-components";
import YoutubeHeader from "./components/YoutubeHeader";
const App = () => {
  const [searchText, setSearchText] = useState();

  const handleOnChange = (e) => {
    console.log(e);
  };

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    setSearchText(searchText);
  };

  const scrollToTop = (e) => {
    console.log(e);
  };

  return (
    <StAppWrapper>
      <YoutubeHeader
        handleOnChange={handleOnChange}
        handleSearchFormSubmit={handleSearchFormSubmit}
      />
      <VideoList searchText={searchText} />
      <StTopBtn type="button" onClick={scrollToTop}>
        <span className="material-symbols-outlined">arrow_drop_up</span>
      </StTopBtn>
    </StAppWrapper>
  );
};

export default App;

const StAppWrapper = styled.main`
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: #b5d5c5;
  color: white;

  font-family: "yg-jalnan";

  position: relative;

  & > header {
    width: 100%;
    padding: 0.3rem 0;
    text-align: center;
    background-color: #b08bbb;

    font-size: 1.3rem;
  }
`;
const StTopBtn = styled.button`
  position: sticky;
  bottom: 5%;
  left: 93%;

  width: 5rem;
  height: 5rem;

  background-color: #b08bbb;
  color: white;
  padding: 1rem;

  font-size: 3rem;
  border-radius: 1rem;

  border: none;
  cursor: pointer;

  box-shadow: 0.2rem 0.2rem 0.1rem white;

  &:hover {
    background-color: white;
    color: #b08bbb;

    box-shadow: 0.2rem 0.2rem 0.1rem #b08bbb;
  }
  & > span {
    font-size: 3rem;
  }
`;
