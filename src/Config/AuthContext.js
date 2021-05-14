import React,{useContext,useEffect,useState} from 'react';
import fire from './fire'


const AuthContext = React.createContext(); 

export  function AuthProvider({ children }) {
   const [currentUser, setCurrentUser] = useState();

     const signUp = (email, password) =>{
       return fire.auth().createUserWithEmailAndPassword(email, password)
     };
     
     useEffect(() =>{
       const unsubscribe = fire.auth().onAuthStateChanged(user =>{
            setCurrentUser(user)
        });

        return unsubscribe
     }, [])

    

   const value ={
       currentUser,
       signUp
   }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
