import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

// -- routes
import Home from '@/pages/home';
import WhoWe from '@/pages/WhoWe';
import TermsAndConditions from '@/pages/termsAndConditions';
import OfferMonth from '@/pages/offerMonth';


function Navigation() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/about" Component={WhoWe} />
      <Route path="/terms-and-conditions" Component={TermsAndConditions} />
      <Route path="/offer-month" Component={OfferMonth} />
    

      <Route path='*' element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
  );
}

export default Navigation;