import React from 'react'
import classes from './SideBarLeft.module.css';
import { Link } from 'react-router-dom';
import MainLogo from '../../Assests/MainLogo.png'
export default function SideBarLeft() {
    return (
        <div className={classes.HeaderContent}>
        <div className={classes.LogoContainer}>
          <img src={MainLogo} alt="company logo"/>
        </div>
        <nav className={classes.NavMainContainer}>
            <div className={classes.NavLinkContainer}>
               
            </div>
        </nav>
    </div>
    )
}
