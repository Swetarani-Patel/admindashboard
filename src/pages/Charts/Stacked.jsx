import React from 'react';

import { Stacked as StackedChart ,Header} from '../../components';

const Stacked = () => (
  <div className="m-2 md:m-4 mt-24 p-6 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Stacked" title="Revenue Breakdown" />
    <div className="w-full">
      <StackedChart />
    </div>
  </div>
);

export default Stacked;