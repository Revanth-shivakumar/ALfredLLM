import React, { useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import { Link } from 'react-router-dom';
import PasswordInput from '../../Components/Input/PasswordInput';
import { validateEmail } from '../../utils/helper.js';

const Login = () => {

  
  const [email,setEmail]=useState("")
  const [password,setpassword]=useState("");
  const [error,setError]=useState(null);
  
  const handleLogin= async (e)=>{
    e.preventDefault();
    if (!validateEmail(email)){
      setError("Enter Valid Email Address.");
      return;
    }

    if(!password){
      setError("Please Enter the Password");
      return;

    }
    setError("");
  };


  return (
    <>
     <NavBar/>
     <div className='flex items-center justify-center mt-28'>
      <div className='w-96 border rounded bg-white px-7 py-10'>
        <form onSubmit={handleLogin}>
          <h4 className='text-2xl mb-7'>Login</h4>
          <input type='text' value= {email} placeholder='Email' className='input-box' onChange={(e)=>setEmail(e.target.value)}
          />
          <PasswordInput value={password} onChange={(e)=>setpassword(e.target.value)}/>

          {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}
          <button type='submit' className='btn-primary'>
            Login
          </button>
          <p className='text-sm text-center mt-4'>
          Not Registered yet?{" "}
          <Link to="/signUp" className=" font-medium text-primary underline">
            Create an Account
          </Link>
          </p>
        </form>
      </div>
     </div>
     </>
  );
};

export default Login