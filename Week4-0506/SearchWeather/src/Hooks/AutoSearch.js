import { useEffect, useState } from "react";
import { cityList } from "../assets/cityList";

/** 도시 검색시 cityList 자동완성 검색 기능 */
const AutoSearch = () => {
  const [keyword, setKeyword] = useState("");
  const [autoSearchResult, setAutoSearchResult] = useState([]);

  useEffect(() => {
    const howManyalphabethave = (cityList, keyword) => {
      const lowwerKeyword = keyword.toLowerCase();

      const lowerCityList = cityList.map((cityName) => {
        return cityName.toLowerCase();
      });

      const matchList = lowerCityList.map((cityNameL, i) => {
        if (cityNameL.indexOf(lowwerKeyword) !== -1) return cityList[i];
      });

      const pureList = matchList.filter((cityName) => cityName !== undefined);

      return pureList;
    };

    const searchResult = howManyalphabethave(cityList, keyword);
    setAutoSearchResult(searchResult);

    return ()=>{}
  }, [keyword, cityList]);

  return {keyword , setKeyword, autoSearchResult };
};

export default AutoSearch;
