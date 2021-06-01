import React from 'react'
import { useHistory,useLocation } from 'react-router-dom';
import classes from './Dashboard.module.css';
import SideBarLeft from '../../components/SideBarLeft/SideBarLeft'
import { Route,  BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Products from '../Products/Products';
import Customers from '../Customers/Customers';
import TopBar from '../../components/TopBar/TopBar';
import OverView from '../OverView/OverView';
import Notification from '../../components/Notification/Notification'


export default function Dashboard() {

    const location = useLocation();
    console.log(location)


    return (
        <div className={classes.MainContainer}>
            <header className={classes.SideBarLeftContainer}>
           <SideBarLeft/>
           
            </header>
            <div className={classes.MainContentContainer}>
            <TopBar/>
             
                  <Switch>
                  <Route exact path="/dashboard" component={OverView} />
                  <Route  path="/dashboard/product" component={Products} />
                  <Route path="/dashboard/customer" component={Customers} />
              </Switch>
               
               
                </div>
                <div className={classes.SideBarRightContainer}>
                <Notification/>
                </div>
        </div>
    )
}
