import React,{useEffect,useState} from 'react'
import classes from './Products.module.css';
import { motion } from 'framer-motion'
import ProductCard from '../../components/ProductCard/ProductCard';

import Axios from 'axios';


export default function Products() {

   const[productList, setProductList]=useState([])

    useEffect(()=>{
        document.title="Easy Erp | Products";
        
         
        Axios.get("https://5fe1862804f0780017de9d2e.mockapi.io/ProductList")
        .then(res =>{
            setProductList(res.data)
        }).catch(err =>{
            console.log(err)
        })

     },[])
    return (
        <motion.div 
        initial={{ x: "120vw", transition: { type: "spring", duration: 1.5 } }}
             animate={{ x: 0, transition: { type: "spring", duration: 1.5 } }}
        className={classes.MainContainer}>
            <div className={classes.ProductCardContainer}>
                {
                    productList.map(item =>{
                        return <ProductCard key={item.id} id={item.id} name={item.name} quantity={item.quantity} img={item.img} />
                    })
                }
            
            </div>
          <div className={classes.ProductInfoMainContainer}></div>
        </motion.div>
    )
}
