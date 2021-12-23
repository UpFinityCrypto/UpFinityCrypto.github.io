import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useLocation } from 'react-router-dom';


import { Header, HeaderMargin } from './components/Header/Header';
import Footer from './components/Footer/Footer';

import MainPage from './Pages/MainPage';
import DashboardPage from './Pages/DashboardPage';
import FeaturePage from './Pages/FeaturePage';
import NftPage from './Pages/NftPage';

import Rewards from './components/Rewards';
import Staking from './components/Staking';
import P2egame from './components/P2egame';
import Mysterybox from './components/Mysterybox';
import Swap from './components/Swap';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import FAQs from './components/FAQs';

import Community from './components/Community';
import Donations from './components/Donations';
import Airdrops from './components/Airdrops';
import Fiat from './components/Fiat';

function App() {
  const location = useLocation();
  useEffect(async () => {
    const path = location.pathname;
    
    await window.runMain();
    await window.reinit(path.slice(1));
    // if (path == '/upfinity') }
  }, [location.pathname]);
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
   
    <Header />
    <HeaderMargin />
    
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route exact path="/dashboard" element={<DashboardPage />} />
      <Route exact path="/upfinity" element={<FeaturePage />} />
      <Route exact path="/swap" element={<Swap />} />


      <Route exact path="/nft" element={<NftPage />} />
      <Route exact path="/mysterybox" element={<Mysterybox />} />
      <Route exact path="/p2egame" element={<P2egame />} />
      
      <Route exact path="/rewards" element={<Rewards />} />
      <Route exact path="/staking" element={<Staking />} />
      
      <Route exact path="/roadmap" element={<Roadmap />} />
      <Route exact path="/team" element={<Team />} />
      <Route exact path="/FAQs" element={<FAQs />} />
      
      <Route exact path="/community" element={<Community />} />
      
      <Route exact path="/donations" element={<Donations />} />
      <Route exact path="/airdrops" element={<Airdrops />} />
      <Route exact path="/fiat" element={<Fiat />} />
      
    </Routes>
    
    <Footer />
    
    <div id="debug"></div>
    
    </Suspense>
 
  );
}

export default App;
