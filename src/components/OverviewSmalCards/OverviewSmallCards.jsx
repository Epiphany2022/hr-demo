import React from 'react'
import classes from './OverviewSmallCards.module.css';
import customer from '../../Assests/customerColor.png'
export default function OverviewSmallCards() {
    return (
        <div className={classes.Card}>
           <div className={classes.IconWrapper}>
               <img src={customer} alt="customer"/>
           </div>
           <div className={classes.DetailWrapper}>
               <div className={classes.Detail}>Total Customer</div>
               <div className={classes.Number}>510</div>
           </div>
        </div>
    )
}
