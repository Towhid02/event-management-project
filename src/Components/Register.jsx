import logo from "../assets/Screenshot 2023-10-08 011047.png"

const Register = () => {

  const handleRegister = e =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const phone = form.get('phone')
    const email = form.get('email')
    const password = form.get('password')
    console.log( name, phone, email, password);
  }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center p-5">
      <img className=" py-4" src={logo} alt="" />
      <h1 className="text-5xl font-bold">Registration</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input 
          type="text" 
          name="name"
          placeholder="Your name" 
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input 
          type="number" 
          name="phone"
          placeholder="phone" 
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input 
          type="email" 
          name="email"
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
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;