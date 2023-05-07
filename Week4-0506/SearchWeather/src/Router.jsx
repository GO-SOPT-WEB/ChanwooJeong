import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchWeather from "./pages/SearchWeather";
import WeatherInfoSection from "./components/WeatherInfoSection";
import WeatherCardSection from "./components/WeatherCardSection";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchWeather />}>
            <Route path=":period" element={<WeatherInfoSection />}>
              <Route path=":area" element={<WeatherCardSection />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
