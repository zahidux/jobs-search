import React, { useContext, useRef, useState } from "react";
import signUp from "../../../assets/images/login.jpg";
import { Link } from "react-router-dom";
import { getAuth, sendEmailVerification } from "firebase/auth";
import app from "../../../Firebase/Firebase.confige";
import { AuthContext } from "../../../Provider/AuthProvider";

const auth = getAuth(app);

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { user, createUser } = useContext(AuthContext);

  // from function
  const handelFrom = (event) => {
    event.preventDefault();

    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const confirmPassword = from.confirmPassword.value;
    // console.log(name, email, password);
    //create user
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        from.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });

    // password validate
    setSuccess("");
    setError("");
    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Please add");
      return;
    } else if (!/[a-z][A-Z][0-9]{8,}/.test(password)) {
      setError("PLease add thoese");
      return;
    } else if (password.length < 6) {
      setError("Please add 30 cha");
      return;
    } else if (password !== confirmPassword) {
      setError("Your password didn't match");
      return;
    }
  };

  // user email varification

  const sendEmailVerific = (user) => {
    sendEmailVerification(user).then((result) => {
      console.log(result);
      alert("Please verify is your email");
    });
  };

  //   //update user name and picture

  const updateUserData = (user, name) => {
    updateProfile(user, {
      displayName: name,
    })
      .then(() => {
        console.log("User updated");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="container md:my-28 grid grid-cols-1 md:grid-cols-2 gap-20   ">
      <img className="md:w-[600px]" src={signUp} alt="" />

      <div className="bg-slate-200 rounded-lg grid items-center">
        <div className="w-1/2 mx-auto p-10">
          <form
            onSubmit={handelFrom}
            className=" grid  justify-center items-center gap-3 "
          >
            <h3 className="text-4xl font-bold text-center mb-8 text-slate-800">
              Please Sign Up!
            </h3>
            <div>
              <h3 className="mb-2 text-xl">Name</h3>

              <input
                className=" px-3 rounded-md mb-2 py-2 w-[400px]"
                type="name"
                name="name"
                id=""
                required
                placeholder="Enter your email"
              />
            </div>
            <div>
              <h3 className="mb-2 text-xl">Email</h3>

              <input
                className=" px-3 rounded-md mb-2 py-2 w-[400px]"
                type="email"
                name="email"
                id=""
                required
                placeholder="Enter your email"
              />
            </div>
            <div>
              <h3 className="mb-2 text-xl">Password</h3>
              <input
                className=" px-3 rounded-md mb-2 py-2 w-[400px]"
                type="password"
                name="password"
                id=""
                placeholder="Enter your password"
                required
              />
            </div>
            <div>
              <h3 className="mb-2 text-xl">Confirm Password</h3>
              <input
                className=" px-3 rounded-md mb-2 py-2 w-[400px]"
                type="password"
                name="confirmPassword"
                id=""
                placeholder="Enter your confirm password"
                required
              />
            </div>
            confirmPassword
            <input
              className="bg-cyan-300 py-3 rounded-2xl text-white font-bold text-2xl hover:bg-teal-600"
              type="submit"
              value="SignUp"
            />
            <small className="text-red-500">{error}</small>
            <p className="text-green-700">{success}</p>
          </form>
          <Link to={"/login"}>
            <span>Already have an account!! Login </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
