import React from 'react'
import classes from './TopBar.module.css';
import Search from '../../Assests/search.png';
import Calendar from '../../Assests/calendar.svg';
import {  Link, useHistory } from 'react-router-dom'
import Profile from '../../Assests/profile.jpg';
import { useSelector } from 'react-redux'


export default function TopBar() {

    // const name = useSelector( state => state.userEmail.email );
    // const userName = name.split('@')[0];

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

   let todayDate = dd + '/' + mm + '/' + yyyy;
   const history = useHistory();

   const logoutHandler = () =>{
    localStorage.removeItem('log')
    history.push('/login')
   }

    return (
        <div className={classes.MainContainer}>
           <div className={classes.SearchContainer}>
               <img src={Search} alt="search"/>
               <input className={classes.SearchBar} type="text" placeholder="Search"/>
               </div> 


               <div className={classes.RightAlignContainer}>
                    <div className={classes.DateContainer}>
                   <img src={Calendar} alt="calendar"/>
                   <div className={classes.TodayDate}>{todayDate}</div>
               </div>
               <div className={classes.ProfileMainWrapper}>
                   <div className={classes.ProfilePic}>
                       <img src={Profile} alt="profile"/>
                   </div>
                   <div onClick={logoutHandler} className={classes.NameWrapper}>Logout</div>
               </div>
               </div>
        </div>
    )
}
