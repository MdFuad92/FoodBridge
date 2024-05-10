import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth/cordova";





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
   const github = ()=>{
    setLoader(true)
    return signInWithPopup(auth,githubProvider)
   }
     useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth,currentUser =>{
          console.log(currentUser)
          setUser(currentUser)
         
         
           setTimeout(() => setLoader(false), 1500)
      });
     
      return ()=>{
          unSubscribe()
        
      }
      
     },[])   

    const authInfo = {user,createEmail,login,logOut,update,google,github,loader}
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;