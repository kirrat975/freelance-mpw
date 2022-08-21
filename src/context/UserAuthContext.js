import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  //FacebookAuthProvider,
  onAuthStateChanged,
  signOut,
  FacebookAuthProvider
} from "firebase/auth";
import { auth } from "../firebase.config";

const userAuthContext = createContext();

//const fprovider=new FacebookAuthProvider();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
   
  }

  function signInwG(){
  const gprovider=new GoogleAuthProvider();
  gprovider.setCustomParameters({ prompt: 'select_account' });
    signInWithPopup(auth, gprovider)
        .then((result) => {
           
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            console.log({ credential, token, user });
        })
        .catch((error) => {
      
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log({ errorCode, errorMessage, email, credential });
        });
  }
  
  function signInwF(){
    const fprovider= new FacebookAuthProvider();
    fprovider.setCustomParameters({ prompt: 'select_account' });
    signInWithPopup(auth, fprovider)
        .then((result) => {
           
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const token = credential?.accessToken;
            const user = result.user;
            console.log({ credential, token, user });
        })
        .catch((error) => {
      
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = FacebookAuthProvider.credentialFromError(error);
            console.log({ errorCode, errorMessage, email, credential });
        });
  }
  
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user,signInwG,signInwF, logIn,signUp, logOut }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}