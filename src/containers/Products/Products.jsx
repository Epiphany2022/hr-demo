import React,{useEffect,useState} from 'react'
import classes from './Products.module.css';
import { motion } from 'framer-motion'
import ProductCard from '../../components/ProductCard/ProductCard';
import {productListData} from '../../components/Constants/defaultValue'
export default function Products() {

   const[productList, setProductList]=useState([])

    useEffect(()=>{
        document.title="Easy Erp | Products";
        setProductList(productListData)
     },[])
    return (
        <motion.div 
        initial={{ y: "-120vw", transition: { type: "spring", duration: 1.5 } }}
        animate={{ y: 0, transition: { type: "spring", duration: 1.5 } }}
        className={classes.MainContainer}>
            <div className={classes.ProductCardContainer}>
                {
                    productList.map(item =>{
                        return <ProductCard key={item.id} id={item.id} name={item.name} quantity={item.quantity} img={item.img} />
                    })
                }
            
            </div>
          
        </motion.div>
    )
}
