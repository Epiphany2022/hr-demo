import React from 'react'
import classes from './OverView.module.css';
import OverviewSmallCards from '../../components/OverviewSmalCards/OverviewSmallCards';
import PerformanceChart from '../../components/PerformaceChart/PerformanceChart';
import StatisticsChart from '../../components/StatisticsChart/StatisticsChart'
export default function OverView() {
    return (
        <div className={classes.MainContainer}>
      <div className={classes.TopFlexWrapper}>
      <OverviewSmallCards/><OverviewSmallCards/><OverviewSmallCards/><OverviewSmallCards/>
      </div>
      <div className={classes.MiddleFlexWrapper}>
         <PerformanceChart/><StatisticsChart/>
      </div>
      <div className={classes.BottomFlexWrapper}>
      
      </div>
        </div>
    )
}
