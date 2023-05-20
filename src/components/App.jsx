// import NoticesPage from '../pages/NoticesPage/NoticesPage';
import {  React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NotiesPage from "./../pages/NoticesPage/NoticesPage";

// import FavoritePage from "./../pages/FavoritePage/FavoritePage";
// import MyOwnPage from "./../pages/MyOwnPage/MyOwnPage";

export const App = () => {
  return (
    <>
<BrowserRouter>

      <Routes> 
          <Route path="/notices/:category" element={<NotiesPage />} />
          
  
        {/* <Route path="/notices/favorite" element={<FavoritePage />} />
        <Route path="/notices/own" element={<MyOwnPage />} />  */}

      </Routes>
  </BrowserRouter>
    </>
  );
};
         
    

