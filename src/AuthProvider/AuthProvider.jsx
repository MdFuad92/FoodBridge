import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";







const auth = getAuth(app)
export const AuthContext = createContext(null)
const provider =  new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loader,setLoader] = useState(true)

    const createEmail = (email,password) =>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
    
    }
    
    const login = (email,password) =>{
    setLoader(true)
    return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = ()=>{
        setLoader(true)
        return signOut(auth)
       }

       const update = (fullname,image)=> {
        setLoader(false)
     return updateProfile(auth.currentUser,{
      
         displayName:fullname,
         photoURL:image
      
         
      })
   }

   const google = () =>{
    setLoader(true)
    return signInWithPopup(auth,provider)
   }
 
     useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        const userEmail = currentUser?.email || user?.email
        const loggedUser = {email: userEmail}
          console.log(currentUser)
          setUser(currentUser)
          setTimeout(() => setLoader(false), 1500)

          if(currentUser){
          
            axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials:true})
            .then(res=>{
                console.log('token',res.data)
            })
          }
          else{
            axios.post('http://localhost:5000/logout',loggedUser,{withCredentials:true})
            .then(res=>{
                console.log('token response',res.data)
            })
          }
         
      });
     
      return ()=>{
          unSubscribe()
        
      }
      
     },[])   

    const authInfo = {user,createEmail,login,logOut,update,google,loader}
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;