
import { React, Suspense } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NoticesPage from "./../pages/NoticesPage/NoticesPage.jsx";

// import FavoritePage from "./../pages/FavoritePage/FavoritePage";
// import MyOwnPage from "./../pages/MyOwnPage/MyOwnPage";

export const App = () => {
  return (
    <>
<BrowserRouter basename="YourPet/">
<Suspense>
      <Routes> 
          <Route path="/notices/:category" element={<NoticesPage />}/>
      </Routes>
</Suspense>
  </BrowserRouter>
    </>
  );
};

          


          


    

