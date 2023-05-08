import { useEffect, useState } from "react";
import { cityList } from "../assets/cityList";

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
