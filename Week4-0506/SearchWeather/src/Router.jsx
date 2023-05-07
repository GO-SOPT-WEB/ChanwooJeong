import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchWeather from './pages/SearchWeather';

const Router = () => {
    return (
     
              <>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<SearchWeather />} >
                        {/* <Route path=":period" element={}>
                            <Route path=":area" element={} />
                        </Route> */}
                    </Route>
                  </Routes>
                </BrowserRouter>
              </>
        
    );
};

export default Router;