import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useLocation } from 'react-router-dom';


import { Header, HeaderMargin } from './components/Header/Header';
import Footer from './components/Footer/Footer';

import MainPage from './Pages/MainPage';
import DashboardPage from './Pages/DashboardPage';
import FeaturePage from './Pages/FeaturePage';

import NftPage from './Pages/NftPage';
import SplashPage from './Pages/SplashPage';


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
import Metaverse from './components/Metaverse';
import Ecosystem from './components/Ecosystem';
import Lottery from './components/Lottery';

import ScrollToTop from './components/ScrollToTop';

function App() {
  const location = useLocation();
  useEffect(async () => {
    const path = location.pathname;

    const header = document.querySelector('#Header');
    const headerMargin = document.querySelector('#HeaderMargin');
    const footer = document.querySelector('#Footer');
    const debug = document.querySelector('#debug');
    if (path == '/') {
      header.style.cssText += 'display:none!important';
      headerMargin.style.cssText += 'display:none!important';
      footer.style.cssText += 'display:none!important';
      debug.style.cssText += 'display:none!important';
    } else {
      header.style.cssText += 'display:flex!important';
      headerMargin.style.cssText += 'display:block!important';
      footer.style.cssText += 'display:block!important';
      debug.style.cssText += 'display:block!important';

      //const clickVideo = document.getElementById('clickVideo');
      //clickVideo.play();
      //clickVideo.addEventListener('ended', function () {
      //  // hide video
      //  clickVideo.style.display = "none";
      //});
    }

    await window.runMain();
    await window.reinit(path.slice(1));
    // if (path == '/upfinity') }
  }, [location.pathname]);
  
  return (
    <Suspense fallback={<div>Loading...</div>}>

      <Header />
      <HeaderMargin />

      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<SplashPage />} />
        <Route exact path="/main" element={<MainPage />} />
        <Route exact path="/ecosystem" element={<Ecosystem />} />

        <Route exact path="/dashboard" element={<DashboardPage />} />
        <Route exact path="/upfinity" element={<FeaturePage />} />
        <Route exact path="/swap" element={<Swap />} />
        <Route exact path="/fiat" element={<Fiat />} />

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
        <Route exact path="/metaverse" element={<Metaverse />} />
        <Route exact path="/Lottery" element={<Lottery />} />

      </Routes>

      <Footer />

      <div id="debug"></div>

    </Suspense>
 
  );
}

export default App;
