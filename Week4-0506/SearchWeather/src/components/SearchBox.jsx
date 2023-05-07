import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 50rem;
  padding: 1rem;
  border: 3px solid purple;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 5rem;
  padding: 1rem;

  font-size: 1.6rem;
  background: #ffffff;
  border-radius: 0.8rem;
  border: solid 0.2rem black;
`;

const SearchBox = () => {
  return (
    <Wrapper>
      <SearchInput placeholder={`지역을 영어로 검색해보세요!`} />
    </Wrapper>
  );
};

export default SearchBox;
