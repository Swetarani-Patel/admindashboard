import React from 'react'
import { LineChart ,Header} from '../../components';

const Line = () => {
  return (
    <div className="m-3 md:m-6 mt-24 p-6 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Line" title="Inflation Rate" />
    <div className="w-full">
      <LineChart />
    </div>
  </div>
  )
}

export default Line