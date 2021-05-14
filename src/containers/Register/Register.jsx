import React, { useState } from 'react';
import classes from './Register.module.css';
import MainLogo from '../../Assests/Easy.png';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;
export default function Register() {

    const [passwordShownColor, setPasswordShownColor] = useState("inActive");
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = (e) => {

        setPasswordShown(passwordShown ? false : true);
        if (passwordShownColor === "inActive") {
            setPasswordShownColor("ActivePassword")

        }
        else {
            setPasswordShownColor("inActive")

        }
    };

    return (
        <div
    
        className={classes.MainContainer}>
            <div className={classes.MainLogoContainer}>
                <motion.div 
                  initial={{ x: "-120vw", transition: { type: "spring", duration: 1.5 } }}
                  animate={{ x: 0, transition: { type: "spring", duration: 1.5 } }}
                className={classes.LogoSpinner}>
                <img src={MainLogo} alt="Company Logo"/>
                </motion.div>
            
            </div>
            <div className={classes.SecondaryContainer}>
            <motion.div 
             initial={{ x: "120vw", transition: { type: "spring", duration: 1.5 } }}
             animate={{ x: 0, transition: { type: "spring", duration: 1.5 } }}
            className={classes.HeaderContainer}>
                <h1>Welcome !</h1>
                <h2>Let's get started</h2>
            </motion.div >
            <motion.div 
              initial={{ x: "120vw", transition: { type: "spring", duration: 2 } }}
              animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
            className={classes.FormContainer}>
                <form autoComplete="off" className={classes.RegisterForm}>
                <div className={classes.InputBox}>
                   <input
                                            className={classes.InputTag}
                                            name="username"
                                            type="text"
                                            placeholder="Name"
                                          
                                            required
                                        />
                   </div>
                  <div className={classes.InputBox}>
                  <input
                                      className={classes.InputTag}
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                         
                                        required
                                    />
                  </div>
                  <div className={classes.InputBox}>
                   <input
                                       className={classes.InputTag}
                                            name="password"
                                            type={passwordShown ? "text" : "password"}
                                            placeholder="Password"
                                           
                                            required
                                        />
                                         <i onClick={(e) => { togglePasswordVisiblity(e) }} className={passwordShownColor === "inActive" ? classes.EyeIcons : [classes.EyeIcons, classes.ActivePassword].join(' ')}>{eye}</i>
                   </div>
                </form>
            </motion.div>
            </div>
           
        </div >
    )
}
