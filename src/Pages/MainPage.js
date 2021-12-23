import React from 'react';

import Notice from '../components/Notice';
import Banner from '../components/Banner';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Ecosystem from '../components/Ecosystem';
import Audits from '../components/Audits';
import Listings from '../components/Listings';
import Team from '../components/Team';

function MainPage() {
  return (
    <div>
      <Notice />
      <Banner />
      <Hero />
      
      <Stats />
      
      <Ecosystem />
      
      <Audits />
      
      <Listings />
      
      <Team />
    </div>
 
  );
}

export default MainPage;