import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  padding: 2rem 1rem 0 1rem;
`;
const PeriodDropDown = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-left: 0;

  select {
    width: 15rem;
    font-size: 2rem;
  }
`;
const SearchInput = styled.input`
  width: 100%;
  height: 5rem;
  padding: 1rem;

  font-size: 2rem;
  background: #ffffff;
  border-radius: 0.8rem;
`;

const SearchBox = () => {
  const navigate = useNavigate();
  const { period ,area } = useParams();

  useEffect(() => {
    if (period === undefined) return navigate(`/day`);
    return () => {};
  }, [period]);

  const navigatePeriod = (e) => {
    const selectedPeriod = e.target.value;
    if(area) return navigate(`/${selectedPeriod}/${area}`);
    navigate(`/${selectedPeriod}`);
  };

  const inputRef = useRef(null);

  const handleKeyDown = (e) => {
    if (e.keyCode !== 13) return;
    const area = inputRef.current.value;
    navigate(`/${period}/${area}`);
  };

  return (
    <Wrapper>
      <PeriodDropDown>
        <select
          name="period"
          id="periodFilter"
          defaultValue={period}
          onChange={navigatePeriod}
        >
          <option value="day">Day</option>
          <option value="week">Week</option>
        </select>
      </PeriodDropDown>
      <SearchInput
        ref={inputRef}
        placeholder={`지역을 영어로 검색해보세요!`}
        onKeyDown={handleKeyDown}
        defaultValue={area}
      />
    </Wrapper>
  );
};

export default SearchBox;
