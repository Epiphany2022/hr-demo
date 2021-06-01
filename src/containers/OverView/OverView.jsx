import React,{ useEffect,useState } from 'react'
import classes from './OverView.module.css';
import OverviewSmallCards from '../../components/OverviewSmalCards/OverviewSmallCards';
import PerformanceChart from '../../components/PerformaceChart/PerformanceChart';
import StatisticsChart from '../../components/StatisticsChart/StatisticsChart';
import listIcon from '../../Assests/list.svg';
import listColor from '../../Assests/coloredList.svg';
import gridIcon from '../../Assests/grid.svg';
import gridColor from '../../Assests/coloredGrid.svg';
import OrderListCard from '../../components/OrderListCard/OrderListCard';
import { motion } from "framer-motion";
export default function OverView() {

    const [isGrid, setIsGrid] = useState(false);

    const handleGridClick = () =>{
        setIsGrid(true)
    };
    const handleListClick = () =>{
        setIsGrid(false)
    };


    useEffect(()=>{
       document.title="Easy Erp | Overview"
    },[])

    return (
        <div className={classes.MainContainer}>
      <motion.div   initial={{ y: "-120vw", transition: { type: "spring", duration: 1.5 } }}
             animate={{ y: 0, transition: { type: "spring", duration: 1.5 } }} className={classes.TopFlexWrapper}>
      <OverviewSmallCards/><OverviewSmallCards/><OverviewSmallCards/><OverviewSmallCards/>
      </motion.div>
      <motion.div    initial={{ x: "-120vw", transition: { type: "spring", duration: 1.5 } }}
                  animate={{ x: 0, transition: { type: "spring", duration: 1.5 } }} className={classes.MiddleFlexWrapper}>
         <PerformanceChart/><StatisticsChart/>
      </motion.div>
      <motion.div   initial={{ x: "120vw", transition: { type: "spring", duration: 1.5 } }}
             animate={{ x: 0, transition: { type: "spring", duration: 1.5 } }}  className={classes.BottomFlexWrapper}>
      <div className={classes.OrderHeader}>
         <div className={classes.HeaderLeft}>Order List</div> 
         <div className={classes.HeaderRight}>
             <div onClick={handleListClick}  className={classes.ListContainer}>
              <div className={classes.ListSvgContainer}>
                  <img src={isGrid?listIcon:listColor} alt="List"/>
              </div>
              <div className={classes.HeaderList}>
                  List
              </div>
             </div>
             <div onClick={handleGridClick} className={classes.GridContainer}>
             <div  className={classes.GridSvgContainer}>
                  <img src={isGrid?gridColor:gridIcon} alt="Grid"/>
              </div>
              <div className={classes.HeaderGrid}>
                 Grid
              </div>
             </div>
             </div> 
      </div>
      <div className={[isGrid?classes.OrderSecondHederHidden:classes.OrderSecondHeader]}>
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
      <div className={[isGrid?classes.OrderCardGrid:classes.OrderCardContainer]}>
 <OrderListCard isGrid={isGrid} />
 <OrderListCard isGrid={isGrid} />
 <OrderListCard isGrid={isGrid} />
 <OrderListCard isGrid={isGrid} />
 <OrderListCard isGrid={isGrid} />
      </div>
      </motion.div>
        </div>
    )
}
