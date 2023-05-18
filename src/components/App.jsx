// import NoticesPage from '../pages/NoticesPage/NoticesPage';
import { lazy, Suspense, React } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NoticesSearch from "./../components/NoticesSearch/NoticesSearch";
import NoticesCategoriesNav from "./NoticesCategoriesNav/NoticesCategoriesNav";

import SellPage from "./../pages/SellPage/SellPage";
import InGoodHandsPage from "./../pages/InGoodHandsPage/InGoodHandsPage";
import LostFoundPage from "./../pages/LostFoundPage/LostFoundPage";
import FavoritePage from "./../pages/FavoritePage/FavoritePage";
import MyOwnPage from "./../pages/MyOwnPage/MyOwnPage";

export const App = () => {
  return (
    <>
<BrowserRouter>
        {/* <NoticesPage /> */}
        <NoticesSearch />
        <NoticesCategoriesNav />
    <Routes>
          
        <Route path="/notices/sell" element={<SellPage />} />
        <Route path="/notices/lost-found" element={<LostFoundPage />} />
        <Route path="/notices/fo-free" element={<InGoodHandsPage />} />
        <Route path="/notices/favorite" element={<FavoritePage />} />
        <Route path="/notices/own" element={<MyOwnPage />} />

      </Routes>
  </BrowserRouter>
    </>
  );
};
         
    

