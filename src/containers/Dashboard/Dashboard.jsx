import React from 'react'
import { useHistory } from 'react-router-dom';

export default function Dashboard() {

    const history = useHistory()
   
    const handleLogout = () =>{
        localStorage.removeItem('log');
        history.push("/login")
    }


    return (
        <div>
           <h1>Dashboard</h1>
           <button onClick={handleLogout} >Logout</button>
        </div>
    )
}
