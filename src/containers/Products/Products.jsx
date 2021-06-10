import React,{useEffect,useState, Suspense} from 'react'
import classes from './Products.module.css';
import { motion } from 'framer-motion'
import ProductCard from '../../components/ProductCard/ProductCard';
import cross from '../../Assests/PurpleCross.svg'

import Axios from 'axios';
import { accessTotalStock } from '../../Redux/reducer';
import { useDispatch } from 'react-redux'


export default function Products() {



  const dispatch = useDispatch()

   const[productList, setProductList]=useState([]);
   const[productInfo, setProductInfo]=useState({});
   const [quantity, setQuantity]=useState("");
   const [clickId, setClickId]=useState();
   const [productInfoVisible, setProductInfoVisible]=useState(false)
     

   const handleCrossClick = () =>{
    setProductInfoVisible(false)
   }

   const handleIdFetching = (id) =>{
     setClickId(id);
     setProductInfoVisible(true)
    
    Axios.get(`https://5fe1862804f0780017de9d2e.mockapi.io/ProductList/${id}`)
    .then(res =>{
        setProductInfo(res.data);
        
        setQuantity(res.data.quantity)
    }).catch(err =>{
        console.log(err)
    })
};


const handleChangedQuantity = ()=>{
   
   const changedData = {
    "quantity":205
   }

     Axios.post(`https://5fe1862804f0780017de9d2e.mockapi.io/ProductList/5`, changedData).then(res =>{
        if(res.status === 201){
            
       
          
               
           
           }
           
     })
  
}


const quantityChange = (e) =>{
  
    setQuantity(e.target.value)
}

    useEffect(()=>{
        document.title="Easy Erp | Products";
        
         
        Axios.get("https://5fe1862804f0780017de9d2e.mockapi.io/ProductList")
        .then(res =>{
            setProductList(res.data);
           
            const allQuantityList = (res.data.map((item) => item.quantity)).reduce((a,b) => a+b, 0);
         
            dispatch(
                accessTotalStock(
                    allQuantityList
                )
            )
        }).catch(err =>{
            console.log(err)
        })

     },[])
    return (
        <motion.div 
        initial={{ x: "120vw", transition: { type: "spring", duration: 1.5 } }}
             animate={{ x: 0, transition: { type: "spring", duration: 1.5 } }}
        className={classes.MainContainer}>
            <Suspense fallback={<div>Loading...</div>}>
            <div className={classes.ProductCardContainer}>
                {
                    productList.map(item =>{
                        return <ProductCard key={item.id} id={item.id} name={item.name} quantity={item.quantity} img={item.img} handleIdFetching={handleIdFetching} />
                    })
                }
            
            </div>
            </Suspense>
          <div className={[productInfoVisible?classes.ProductInfoMainContainer:classes.ProductInfoMainContainerHidden]}>
              <h3 className={classes.ProductInfoName}>{productInfo.name}</h3>
              <div className={classes.ProductInfoDetails}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ab quo veniam. Nam excepturi cum eligendi distinctio facere beatae esse. Aperiam similique iste quidem officia labore temporibus magnam quisquam doloremque.
              </div>
              <div className={classes.QuantityMainWrapper}>
                  Quantity : {productInfo.quantity}
                  {/* Quantity:<input  onChange={quantityChange} value={quantity}  className="QuantityInput" type="number"/>
                  <button onClick={handleChangedQuantity}>Submit</button> */}
              </div>
              <div onClick={handleCrossClick} className={classes.CossWrapper}>
                  <img src={cross} alt="cross"/>
              </div>
          </div>
        </motion.div>
    )
}
