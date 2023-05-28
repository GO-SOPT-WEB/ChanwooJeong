import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchWeather from "./pages/SearchWeather";
import WeatherInfoSection from "./components/WeatherInfoSection";
import WeatherCardSection from "./components/WeatherCardSection";
import ErrorPage from "./components/ErrorPage";

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
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
