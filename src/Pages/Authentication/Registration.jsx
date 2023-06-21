import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from '../../Component/Layout/Layout';

const Registration = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate = useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const res = await axios.post(`https://ecom23-i2q2.onrender.com/api/auth/register`, 
            {name,email,password,phone,address,answer});
              console.log(res);
              
              if (res && res.data.success) {
                toast(res.data && res.data.message);
                navigate("/login");
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
  <h2 className="header">Register Today</h2>
  <div>
      <input className="input" type="text" placeholder=" Enter Your Name"
                name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <input className="input" type="email" placeholder="Enter Your Email"
    name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input className="input" type="password" placeholder="Enter Your Password"
                name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <input className="input" type="text" placeholder="Enter Your Phone"
                name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input className="input" type="text" placeholder="Enter Your Address"
                name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
      <input className="input" type="text" placeholder="What is Your Favorite sports"
                name="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <button type="submit">Register</button>
      <div style={{marginTop:"10px", textAlign:"center"}}>
              <Link to="/login">
                <h6 style={{color:"darkgray",marginTop:"15px"}}>Already have an account? <b>Login Now</b></h6>
                
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

export default Registration