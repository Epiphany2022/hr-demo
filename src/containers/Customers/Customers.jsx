import React,{useEffect} from 'react'
import classes from './Customers.module.css';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
export default function Customers() {
    useEffect(()=>{
        document.title="Easy Erp | Customers"
     },[]);


     const { register, handleSubmit } = useForm(
       
        );


        
        const onSubmit  = (data) =>{
           console.log(data);

           var config = {
            method: 'post',
            url: "https://5fe1862804f0780017de9d2e.mockapi.io/OrderList",

            data: data
        };

        Axios(config)
        

         
        }


    return (
        <div className={classes.MainContainer}>
           <form  autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
               <input 
               name="name" 
               type="text"
               placeholder="Customer Name"
               {...register("name")}
               />
               <input 
               name="date"
               type="date"
               placeholder="Order Date"
               pattern="\d{2}\\d{2}\\d{4}"
               {...register("date")}
               />
               <input 
               name="amount"
               type="number"
               placeholder="Order Amount"
               {...register("amount")}
               />
               <input 
               name="status"
               type="text"
               placeholder="Status"
               {...register("status")}
               />
               <button type="submit">Submit</button>
           </form>
        </div>
    )
}
