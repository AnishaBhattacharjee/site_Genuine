import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Layout from '../../Component/Layout/Layout';

const ForgetPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
          const res=await axios.post(`https://ecom23-i2q2.onrender.com/api/auth/forgot-password`,{
            email,newPassword,answer
          });
          if(res && res.data.success){
            toast.success(res.data && res.data.message)
            navigate("/login");
          }else{
            toast.error(res.data.message)
          }
        }catch(error){
          toast.warning(error.response.data.message)
        }
      };

  return (
    <>
    <Layout>
    <div className="breadcrumbs">
    <div className='resigter'>
        <form onSubmit={handleSubmit}>
          <div id="feedback-form">
            <h2 className="header">Update Password</h2>
            <div>
              <input className="input" type="email" placeholder="Enter Your Email"
                name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="input" type="password" placeholder="Enter Your Password"
                name="newpassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                <input className="input" type="text" placeholder="What is Your Favorite sports"
                name="answer" value={answer} onChange={(e) => setAnswer(e.target.value)} />
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </Layout>
    
    
    </>
  )
}

export default ForgetPassword