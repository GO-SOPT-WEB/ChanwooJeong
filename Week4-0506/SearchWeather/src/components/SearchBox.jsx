import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import AutoSearch from "../Hooks/AutoSearch";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
    box-shadow: 0px 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
    border-radius: 0.8rem;
  }
`;
const SearchInput = styled.input`
  width: 100%;
  height: 5rem;
  padding: 1rem;

  font-size: 2rem;

  background-color: #fff;
  box-shadow: 0px 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 0.8rem;
`;

const AutoSearchContainer = styled.div`
  height: 65rem;
  margin: 1rem;

  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    display: none;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    li {
      width: 100%;
      padding: 1rem;
      font-size: 2rem;
      background-color: #fff;
      border-radius: 0.8rem;
      box-shadow: 0px 0.4rem 0.8rem rgba(0, 0, 0, 0.1);

      cursor: pointer;

      &:hover {
        background-color: palevioletred;
      }
    }
  }
`;

const SearchBox = () => {
  const navigate = useNavigate();
  const { period, area } = useParams();

  /** 검색 자동완성 기능 Hook */
  const { keyword, setKeyword, autoSearchResult } = AutoSearch();
  /** 검색창 useRef */
  const inputRef = useRef(null);

  /** 처음 로딩시 자동으로 day(오늘로 설정) */
  useEffect(() => {
    if (period === undefined) return navigate(`/day`);
    if (area) setKeyword(area);
    return () => {};
  }, [period, area]);

  /** 오늘 혹은 주간 변경시 라우팅 이동 */
  const navigatePeriod = (e) => {
    const selectedPeriod = e.target.value;
    if (area) return navigate(`/${selectedPeriod}/${area}`);
    navigate(`/${selectedPeriod}`);
  };

  /** 검색창 엔터 키 시 날씨정보 받아오는 곳으로 라우팅 */
  const handleKeyDown = (e) => {
    if (e.keyCode !== 13) return;
    const area = inputRef.current.value;
    navigate(`/${period}/${area}`);
  };

  /** 자동완성 도시 리스트에서 클릭시 라우팅 */
  const handleClickArea = (cityName) => {
    navigate(`/${period}/${cityName}`);
    setKeyword(cityName);
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
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <AutoSearchContainer>
        <ul>
          {autoSearchResult.map((cityName) => (
            <li key={cityName} onClick={() => handleClickArea(cityName)}>
              {cityName}
            </li>
          ))}
        </ul>
      </AutoSearchContainer>
    </Wrapper>
  );
};

export default SearchBox;
