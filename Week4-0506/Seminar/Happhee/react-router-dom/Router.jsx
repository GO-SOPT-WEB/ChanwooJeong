import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from "./src/pages/Gallery";
import DetailCards from "./src/pages/DetailCards";
import DetailCardsInfo from "./src/components/DetailCardsInfo";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/detail-card" element={<DetailCards />}>
            <Route path=":cardId" element={<DetailCardsInfo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
