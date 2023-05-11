import { useCallback, useEffect, useState } from "react";
import axios from "axios";

/** 날씨 데이터 받아오는 Hook */
const WeatherHook = (period, area) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getWeatherData = useCallback(async () => {
    setIsLoading(true);
    setIsError(false);
    let url;
    if (period === "week")
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`;
    if (period === "day")
      url = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`;

    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (err) {
      setIsError(true);
    }

    setIsLoading(false);
  });

  useEffect(() => {
    
    getWeatherData();

    return () => {};
  }, [period, area]);

  return { data, isLoading, isError };
};

export default WeatherHook;
