import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem;
  border: 3px solid purple;
`;
const PeriodDropDown = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-left: 0;

  select {
    width: 10rem;
    font-size: 2rem;
  }
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
      <PeriodDropDown>
        <select name="period" id="periodFilter">
          <option value="day">Day</option>
          <option value="week">Week</option>
        </select>
      </PeriodDropDown>
      <SearchInput placeholder={`지역을 영어로 검색해보세요!`} />
    </Wrapper>
  );
};

export default SearchBox;
