
import React from 'react'
import classes from './ProductCard.module.css';
import productImg from '../../Assests/pro.jpg'
export default function ProductCard(props) {
    return (
        <div 
     
        className={classes.MainContainer}>
            <div className={classes.TopContainer}>
               <img src={props.img} alt="product"/>
            </div>
            <div className={classes.BottomContainer}>
                <div className={classes.Name}>{props.name}</div>
                <div className={classes.Quantity}>Quantity:{props.quantity}</div>
            </div>
        </div>
    )
}
