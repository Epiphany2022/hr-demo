import React from 'react'
import classes from './OverView.module.css';
import OverviewSmallCards from '../../components/OverviewSmalCards/OverviewSmallCards';
import PerformanceChart from '../../components/PerformaceChart/PerformanceChart';
import StatisticsChart from '../../components/StatisticsChart/StatisticsChart';
import listIcon from '../../Assests/list.svg';
import gridIcon from '../../Assests/grid.svg';
import OrderListCard from '../../components/OrderListCard/OrderListCard'
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
      <div className={classes.OrderHeader}>
         <div className={classes.HeaderLeft}>Order List</div> 
         <div className={classes.HeaderRight}>
             <div className={classes.ListContainer}>
              <div className={classes.ListSvgContainer}>
                  <img src={listIcon} alt="List"/>
              </div>
              <div className={classes.HeaderList}>
                  List
              </div>
             </div>
             <div className={classes.GridContainer}>
             <div className={classes.GridSvgContainer}>
                  <img src={gridIcon} alt="List"/>
              </div>
              <div className={classes.HeaderGrid}>
                 Grid
              </div>
             </div>
             </div> 
      </div>
      <div className={classes.OrderSecondHeader}>
          <div className={classes.OrderId}>
              Order Id
          </div>
          <div className={classes.CustomerName}>
              Customer
          </div>
          <div className={classes.OrderDate}>
          Order Date
          </div>
          <div className={classes.OrderAmount}>
          Order Amount
          </div>
          <div className={classes.Status}>
          Status
          </div>
      </div>
      <div className={classes.OrderCardContainer}>
 <OrderListCard/>
 <OrderListCard/>
 <OrderListCard/>
 <OrderListCard/>
 <OrderListCard/>
      </div>
      </div>
        </div>
    )
}
