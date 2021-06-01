import React,{useState} from 'react'
import classes from './OverviewSmallCards.module.css';
import customer from '../../Assests/customerColor.png'
export default function OverviewSmallCards() {
   
    const[active, setActive] = useState(false);

    const handleActive = () =>{
        setActive(!active)
    }

    return (
        <div onClick={handleActive} className={classes.Card}>
           
           <div className={classes.IconWrapper}>
               <img src={customer} alt="customer"/>
           </div>
           <div className={classes.DetailWrapper}>
               <div className={classes.Detail}>Total Customer</div>
               <div className={classes.Number}>510</div>
           </div>
           <div className={[active?classes.BorderWrapper:classes.NonBorder]}></div>
        </div>
    )
}
