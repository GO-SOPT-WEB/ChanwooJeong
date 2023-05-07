import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Router = () => {
    return (
     
              <>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={} >
                        <Route path=":period" element={}>
                            <Route path=":area" element={} />
                        </Route>
                    </Route>
                  </Routes>
                </BrowserRouter>
              </>
        
    );
};

export default Router;