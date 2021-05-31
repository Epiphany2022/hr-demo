import React from 'react'
import classes from './SideBarLeft.module.css';
import { Link } from 'react-router-dom';
import MainLogo from '../../Assests/MainLogo.png';
import OverView from '../../Assests/overview.svg';
import Purchase from '../../Assests/purchase.svg';
import Customer from '../../Assests/customer.svg';
import Product from '../../Assests/product.svg';
export default function SideBarLeft() {
    return (
        <div className={classes.HeaderContent}>
        <div className={classes.LogoContainer}>
          <img src={MainLogo} alt="company logo"/>
        </div>
        <nav className={classes.NavMainContainer}>
            <div className={classes.NavLinkContainer}>
               <Link to="/dashboard" className={classes.NavLinkFlexWrapper}>
                  <img className={classes.NavLinkIcons} src={OverView} alt="overview" />
                   <p>Overview</p>
               </Link>
               <Link to="/dashboard/customer" className={classes.NavLinkFlexWrapper}>
                  <img className={classes.NavLinkIcons} src={Customer} alt="customer" />
                   <p>Customer</p>
               </Link>
               <Link to="/dashboard/product" className={classes.NavLinkFlexWrapper}>
                  <img className={classes.NavLinkIcons} src={Product} alt="product" />
                   <p>Products</p>
               </Link>
               <Link to="/dashboard/purchase" className={classes.NavLinkFlexWrapper}>
                  <img className={classes.NavLinkIcons} src={Purchase} alt="purchase" />
                   <p>Purchase</p>
               </Link>
            </div>
        </nav>
      
    </div>
    )
}
