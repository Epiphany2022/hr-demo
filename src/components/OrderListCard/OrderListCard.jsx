import React,{useState} from 'react'
import classes from './OrderListCard.module.css';
import profilePic from '../../Assests/nishant.jpg';
export default function OrderListCard(props) {
    
   

    return (
        <div className={[props.isGrid?classes.MainContainerGrid:classes.MainContainer]}>
            <div className={classes.OrderIdContainer}>
                s-1248
            </div>
            <div className={classes.CustomerMainContainer}>
                <div className={classes.ImageContainer}>
                    <img src={profilePic} alt="profile"/>
                </div>
                <div className={classes.Name}>
                    Derek Birdhouse
                </div>
            </div>
            <div className={classes.DateContainer}>
                01/25/2020
            </div>
            <div className={classes.OrderAmount}>
                $4,750.00
            </div>
            <div className={classes.Status}>
                Confirm
            </div>
        </div>
    )
}
