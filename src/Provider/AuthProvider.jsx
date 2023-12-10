import {
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.confige";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //singIn user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google signIn
  const provider = new GoogleAuthProvider();

  const googleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);

        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  //   const handelLogOut = () => {
  //     signOut(auth)
  //       .then((result) => {
  //         setUser(null);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  //github singIn

  const githubProvider = new GithubAuthProvider();

  const handelGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const logUser = result.user;
        console.log(logUser);
        setUser(logUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /// twitter
  const twitterProvider = new TwitterAuthProvider();
  const handelTwitter = () => {
    signInWithPopup(auth, twitterProvider)
      .then((result) => {
        const logUser = result.user;
        setUser(logUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //observe auth state change (show user details on top)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("auth state change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //signOut

  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    auth,
    user,
    createUser,
    signInUser,
    googleSignIn,
    handelGithubSignIn,
    handelTwitter,
    logOut,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
