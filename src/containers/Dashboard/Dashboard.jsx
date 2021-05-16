import React from 'react'
import { useHistory } from 'react-router-dom';
import classes from './Dashboard.module.css';
import SideBarLeft from '../../components/SideBarLeft/SideBarLeft'
import { Route,  BrowserRouter, Switch, Redirect } from 'react-router-dom';
import TempOne from '../TempOne';
import TempTwo from '../TempTwo'


export default function Dashboard() {




    return (
        <div className={classes.MainContainer}>
            <header className={classes.SideBarLeftContainer}>
           <SideBarLeft/>
            </header>
            <div className={classes.MainContentContainer}>
                <Switch>
                    <Route  path="/dashboard/tempone" component={TempOne} />
                    <Route path="/dashboard/temptwo" component={TempTwo} />
                </Switch>
                </div>
                <div className={classes.SideBarRightContainer}>
                h
                </div>
        </div>
    )
}
