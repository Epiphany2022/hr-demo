import React,{useEffect} from 'react'
import classes from './Customers.module.css'
export default function Customers() {
    useEffect(()=>{
        document.title="Easy Erp | Customers"
     },[])
    return (
        <div className={classes.MainContainer}>
            Customers
        </div>
    )
}
