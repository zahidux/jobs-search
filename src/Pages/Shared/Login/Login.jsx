import React, { useContext, useRef, useState } from "react";
import login from "../../../assets/images/login.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    user,
    auth,
    signInUser,
    googleSignIn,
    handelGithubSignIn,
    handelTwitter,
    logOut,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";

  const emailRef = useRef();

  // singIn user authentication
  const handelFrom = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //forget password
  const handelForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please provide your email address");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then((result) => {
        alert("Please check your email");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container md:my-28 grid grid-cols-1 md:grid-cols-2 gap-20   ">
      <img className="md:w-[600px]" src={login} alt="" />

      <div className="w-full mx-auto bg-slate-200 rounded-lg grid shadow-xl py-16 ">
        <div className="">
          <form onSubmit={handelFrom} className=" grid  justify-center  ">
            <h3 className="text-3xl font-bold mb-8 text-slate-600">
              Please Login!
            </h3>
            <div>
              <h3 className="mb-2 text-lg">Email</h3>
              {user && (
                <div>
                  <h1>User Name: {user.displayName}</h1>
                  <img src={user.photoURL} alt="" />
                </div>
              )}

              <input
                className=" px-3 rounded-md mb-4 py-2 w-[400px]"
                type="email"
                name="email"
                id=""
                ref={emailRef}
                placeholder="Enter your email"
              />
            </div>
            <div>
              <h3 className="mb-2 text-lg">Password</h3>
              <input
                className=" px-3 rounded-md mb-2 py-2 w-[400px]"
                type={showPassword ? "text" : "password"}
                name="password"
                id=""
                placeholder="Enter your password"
              />
              <p
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <span>Hide</span> : <span>Show</span>}
              </p>
            </div>
            <button className="text-base mb-5" onClick={handelForgetPassword}>
              Forget password
            </button>

            <input
              className="bg-cyan-300 py-3 rounded-2xl text-white font-bold text-2xl hover:bg-teal-600"
              type="submit"
              value="Login"
            />
          </form>
          <Link to={"/singUp"}>
            <span className=" grid text-center mt-3 text-sm">
              New to Job Search!! Please Sign Up{" "}
            </span>
          </Link>
        </div>
        {user ? (
          <button onClick={logOut}>Log Out</button>
        ) : (
          <div className="text-center text-2xl ">
            <button onClick={googleSignIn} className="text-rose-500 ">
              <FaGoogle />
            </button>
            <button className="m-4" onClick={handelGithubSignIn}>
              <FaGithub />
            </button>
            <button onClick={handelTwitter}>
              <FaTwitter />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
