import React, { useEffect, useState } from 'react';
import './App.scss';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage';
import { CatalogPage } from './components/CatalogPage/CatalogPage';
import { PlantPage } from './components/PlantPage/PlantPage';
import { FavoritePage } from './components/FavoritePage/FavoritePage';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { Authorization } from './components/Authorization/Authorization';

export const App: React.FC = () => {
  const [loginAccess, setLoginAccess] = useState(false);
  const [loginAccessToken, setLoginAccessToken] = useState('');

  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');

    setLoginAccess(!!storedToken);
    setLoginAccessToken(storedToken || '');
  }, []);

  function logOut() {
    localStorage.removeItem('accessToken');
    setLoginAccessToken('');
    setLoginAccess(false);
  }

  return (
    <>
      {!loginAccess && (
        <Authorization
          setLoginAccess={setLoginAccess}
          setLoginAccessToken={setLoginAccessToken}
        />
      )}
      {localStorage.getItem('accessToken') === loginAccessToken && (
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage logOut={logOut} />} />
            <Route path="/Catalog" element={<CatalogPage />} />
            <Route path="/FavoritePage" element={<FavoritePage />} />
            <Route path="/PlantPage" element={<PlantPage />} />
          </Routes>
        </Router>
      )}

      {/* <CategoriesModal /> */}
      {/* <FilteringModal /> */}
      {/* <NewCommentModal /> */}
    </>
  );
};
