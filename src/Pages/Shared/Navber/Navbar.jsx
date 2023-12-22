import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import ActiveLink from "./Activelink";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <nav className=" container md:flex justify-between items-center my-16 ">
      <Link to={"/"}>
        <img className="w-[300px] " src={logo} alt="jobs-search" />
      </Link>
      <div className="md:flex gap-4 items-center">
        <ul className=" text-lg font-bold  text-[#757575] flex gap-5">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/statistics">Statistics</ActiveLink>
          {user && <ActiveLink to="/applied-jobs">Applied Jobs</ActiveLink>}
          {/* <HashLink to="/#features-job">Blog</HashLink> */}
        </ul>
        <button className="shadow hover:shadow-lg hover:bg-teal-400 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 px-4 text-lg font-extrabold text-white rounded-lg">
          Start Applying
        </button>
        {user ? (
          <>
            {" "}
            <span className="text-red-600">{user.email}</span>
            <button
              className=" bg shadow hover:shadow-lg hover:bg-teal-400 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 px-4 text-lg font-extrabold text-white rounded-lg"
              onClick={handelLogOut}
            >
              Log Out
            </button>
          </>
        ) : (
          <button className=" bg shadow hover:shadow-lg hover:bg-teal-400 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-3 px-4 text-lg font-extrabold text-white rounded-lg">
            <Link to={"/login"}>Login</Link>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
