import { useEffect, useState } from "react";
import axios from "axios";

const WeatherHook = (period, area) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    setIsError(false)
    let url;
    if (period === "week")
      url = `https://api.openweathermap.org/data/2.5/forecast?q=${area}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`;
    if (period === "day")
      url = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
        import.meta.env.VITE_APP_WEATHER
      }&units=metric`;

    axios
      .get(url)
      .then((Response) => {
        setData(Response.data);
        setIsLoading(false);
      })
      .catch((Error) => {
        setIsError(true);
      });
  }, [period, area]);

  return { data, isLoading, isError };
};

export default WeatherHook;
