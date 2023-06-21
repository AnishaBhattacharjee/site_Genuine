import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../Context/Auth';
import Layout from '../../Component/Layout/Layout';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth,setAuth]=useAuth()

  const navigate = useNavigate()

const handleSubmit=async (e)=>{
    e.preventDefault();
        try{
            const res = await axios.post(`https://ecom23-i2q2.onrender.com/api/auth/login`, {
                email,
                password,
              });
              if (res && res.data.success) {
                toast(res.data && res.data.message);
                setAuth({
                  ...auth,
                  user: res.data.user,
                  token: res.data.token,
                });
                console.log(res);
                navigate('/')
                localStorage.setItem('auth', JSON.stringify(res.data));
              } else {
                toast.error(res.data.message);
              }

        }catch(error){
            console.log(error);
          toast.error(error.response.data.message);
        }
}

  return (
    <>
    <Layout>
    <div className="breadcrumbs">
    <div className='resigter'>
        <form onSubmit={handleSubmit}>
          <div id="feedback-form">
            <h2 className="header">User Login</h2>
            <div>
              <input className="input" type="email" placeholder="Enter Your Email"
                name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="input" type="password" placeholder="Enter Your Password"
                name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type="submit">Login</button>
              <div style={{marginTop:"10px", textAlign:"center"}}>
              <Link to="/forgetPassword" >Forget Password</Link>
              <br/><Link to="/register">
                <h6 style={{color:"darkgray",marginTop:"15px"}}>Don't have an account? <b>Register Today</b></h6>
                
              </Link>
              </div>
              
            </div>
          </div>
        </form>
      </div>
    </div>
    </Layout>
    
      
    </>
  )
}

export default Login