import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/LoginPage/Firebase/firebase.init";
initializeAuthentication();


const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isloading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState('');
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

        //google sign in

  const signInGoogle = (location, navigate) => {
      setIsLoading(true)
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setAuthError('');
        const user = result.user;
        setUser(user)
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(()=>setIsLoading(false));
  };

    //new user sign in

  const signUpUser = (email, password, name, location, navigate) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        const newUser = {email, displayName:name};
        setUser(newUser);
        //save to firebase
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
        });
        const destination = location?.state?.from || "/";
        navigate(destination)
        setAuthError('');
        
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(()=> setIsLoading(false));
  };

        //existing user sign in

  const signInUser = (email, password, location,navigate) => {
    setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const destination = location?.state?.from || "/";
        navigate(destination)
        setAuthError('');
        setUser(user)
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(()=>setIsLoading(false));
  };

        // user log out

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {});
  };

        // observer
        
  useEffect(() => {
    const unsubscrive = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({});
      }
      setIsLoading(false)
      return () => unsubscrive;
    });
  }, []);

  return {
    user,
    signInGoogle,
    signUpUser,
    signInUser,
    logOut,
    isloading,
    authError
  };
};
export default useFirebase;
