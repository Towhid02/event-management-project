import { Link } from "react-router-dom";
import logo from "../assets/Screenshot 2023-10-08 011047.png";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const Links = (
    <>
      <li className=" hover:text-red-700 hover:border-b-4 hover:border-red-800">
        <Link to={"/"}>Home</Link>
      </li>
      <li className=" hover:text-red-700 hover:border-b-4 hover:border-red-800">
        <Link to={"/aboutus"}>About Us</Link>
      </li>
      <li className=" hover:text-red-700 hover:border-b-4 hover:border-red-800">
        <Link to={"/services"}>Services</Link>
      </li>

      {!user ? (
        <li className="btn ">
          <Link to={"/login"}>log In</Link>
        </li>
      ) : (
        <li className="btn ">
          <button
            onClick={() =>
              logOut()
                .then((result) => {
                  console.log(result);
                 
                })
                .catch((error) => {
                  console.error(error);
                })
            }
          >
            log out
          </button>
        </li>
      )}
    </>
  );

  return (
    <div className="  top-0 left-0 right-0 navbar bg-blue-300 justify-center items-center rounded-xl p-6">
      <div className="flex-1">
        <img className="w-52" src={logo} alt="" />
      </div>
      <div className="flex-none ">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
