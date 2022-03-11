import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/LoginPage/Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);
  const [isloading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  //google sign in

  const signInGoogle = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setAuthError("");
        const user = result.user;
        saveUser(user.email, user.displayName, "PUT");
        setUser(user);
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //new user sign in

  const signUpUser = (email, password, name, location, navigate) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // const user = res.user;
        const newUser = { email, displayName: name };
        setUser(newUser);
        //send user to db
        saveUser(email, name, "POST");
        //save to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //existing user sign in

  const signInUser = (email, password, location, navigate) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError("");
        setUser(user);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
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
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
      return () => unsubscrive;
    });
  }, []);


  // chceck user admin or not =>

    useEffect(()=>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
    },[user.email])

  // user save to db

  const saveUser = (email, name, method) => {
    const user = {
      email,
      displayName: name,
    };
    fetch("http://localhost:5000/users", {
      method: method,
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return {
    user,
    signInGoogle,
    signUpUser,
    signInUser,
    logOut,
    isloading,
    authError,
    admin
  };
};
export default useFirebase;
