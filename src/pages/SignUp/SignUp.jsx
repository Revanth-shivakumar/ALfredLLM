import React, { useState } from 'react'
import NavBar from '../../Components/NavBar/NavBar';
import PasswordInput from '../../Components/Input/PasswordInput';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
const SignUp = () => {
 
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setpassword]=useState("");
    const [error,setError]=useState(null);
    const handleSignUp = async (e) =>{
        e.preventDefault();

        if(!name){
          setError("Please enter your name");
          return;
        }
        if(!validateEmail(email)){
          setError("Please enter a valid email");
          return;
        }
        if(!password){
          setError("Please enter the password")
          return;
        }

        setError("");
    };


  return (
        <>
         <NavBar/>
         <div className='flex items-center justify-center mt-28'>
          <div className='w-96 border rounded bg-white px-7 py-10'>
            <form onSubmit={handleSignUp}>
              <h4 className='text-2xl mb-7'>SignUp</h4>
              <input type='text' value= {name} placeholder='Name' className='input-box' onChange={(e)=>setName(e.target.value)}/>
              <input type='text' value= {email} placeholder='Email' className='input-box' onChange={(e)=>setEmail(e.target.value)}/>
              <PasswordInput></PasswordInput>
    
              {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}
              <button type='submit' className='btn-primary'>
                Create Account
              </button>
              <p className='text-sm text-center mt-4'>
              Already have an Account?{" "}
              <Link to="/login" className=" font-medium text-primary underline">
                Login
              </Link>
              </p>
            </form>
          </div>
         </div>
         </>
      
  );
};
export default SignUp; 