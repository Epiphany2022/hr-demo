import React,{useState, useEffect} from 'react'
import { withRouter, useHistory } from 'react-router-dom';

function Auth(props) {


  const children = props.children

   const [authenticated, setAuthenticated] =useState(false);


   useEffect(() =>{
    const userDetail = localStorage.getItem('log');
    if (userDetail === null) {
      props.history.push('/login');
  } else {
    setAuthenticated(true)
  }
   },[])
   if (authenticated === false) {
    return (
        <div>loading....</div>
    );
}
return (
  <div>
      {children}
  </div>
);
}


export default withRouter(Auth);
