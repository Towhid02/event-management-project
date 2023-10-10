import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import Navbar from "../Pages/Navbar";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "./AuthProvider";


const Register = () => {

  const [registerError, setRegisterError] = useState('');
  const [success, setSuccess] = useState('')
    const [show, setShow] = useState('')

  const {createUser, setUser, signInWithGoogle} = useContext(AuthContext)

  const navigate = useNavigate()

  const handleRegister = e => {

    

    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = form.get('email')
    const password = form.get('password')
    const accepted = e.target.terms.checked;
    console.log(email, password);

    if (password.length < 6) {
      setRegisterError('Password at least 6 characters');
      return;
  }
  else if(!/[A-Z]/.test(password)){
      setRegisterError('Password must be have an uppercase')
      return;
  }
  else if(!accepted){
      setRegisterError('Please accept our terms & condition')
      return;
  }

    setRegisterError('')
    setSuccess('');
    

    createUser(email, password)
    .then( result => {
      console.log(result.user);
      setUser(result.user)
     
      navigate("/")
      setSuccess('Account Created Successfully')
      
     
    })
    .catch(error =>{
           console.error(error);
           setRegisterError(error.message)
         })
  
  }


   const handleGoogle = () => {
    console.log("clicked");
    signInWithGoogle()
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
      <form className="card-body" onSubmit={handleRegister}>
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
          type={show ? "text" :"password" }
          name="password"
          placeholder="password" 
          className="input input-bordered" required />
          <span onClick={() => setShow(!show)}>Show</span>
          </div>
     
          <label className="label">
            <a  href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        
        <div className="mt-4">
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms"> Terms & Condition</label>
         </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p>Already have account <button className="google-btn btn-link" ><Link to={'/login'}>Log in</Link></button></p>
      <button className="btn btn-accent" onClick={handleGoogle}><FaGoogle></FaGoogle>Sign in With Google</button>
    </div>
   {
    setRegisterError && <p>{registerError}</p>
   }
    {
        success && <p className="text-green-700">{success}</p>
      }
  </div>
  
</div>

</div>
    );
};

export default Register;