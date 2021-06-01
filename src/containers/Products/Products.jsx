import React,{useEffect} from 'react'
import classes from './Products.module.css'
export default function Products() {
    useEffect(()=>{
        document.title="Easy Erp | Products"
     },[])
    return (
        <div className={classes.MainContainer}>
            Products
        </div>
    )
}
