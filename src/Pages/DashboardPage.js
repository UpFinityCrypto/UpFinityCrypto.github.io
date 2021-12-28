import React from 'react';

import Status from '../components/Status';
import Stats from '../components/Stats';
import Rewards from '../components/Rewards';
import Staking from '../components/Staking';

function DashboardPage() {
  return (
    <div>
      <Status />
      <Stats />
      <Rewards />
      <Staking />
    </div>
 
  );
}

export default DashboardPage;