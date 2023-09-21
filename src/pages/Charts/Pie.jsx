import React from 'react';

import { pieChartData } from '../../data/dummy';
import { Pie as PieChart,Header } from '../../components';

const Pie = () => (
  <div className="m-2 md:m-7 mt-24 p-8 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Pie" title="Project Cost Breakdown" />
    <div className="w-full">
      <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
  </div>
);

export default Pie;