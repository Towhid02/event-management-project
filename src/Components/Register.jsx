import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../assets/Screenshot 2023-10-08 011047.png"
import Navbar from "../Pages/Navbar";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";


const LogIn = () => {

  const {createUser, setUser} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogIn = e => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    console.log(email, password);

    createUser(email, password)
    .then( result => {
      console.log(result.user);
      setUser(result.user)
      navigate("/")
      
     
    })
    .catch(error =>{
           console.error(error);
         })
  
  }

    return (
    <div>
      <Navbar></Navbar>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left"> 
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleLogIn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input 
          type="email" 
          name= "email"
          placeholder="email" 
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input 
          type="password"
          name="password"
          placeholder="password" 
          className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p>Don't have account <button className="btn btn-link"><Link to={'/login'}>Log in</Link></button></p>
      <button className="btn btn-accent">Google</button>
    </div>
   
  </div>
  
</div>

</div>
    );
};

export default LogIn;