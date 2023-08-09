import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
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
    <div >
    <section className="background-radial-gradient overflow-hidden">
  <style dangerouslySetInnerHTML={{__html: "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  " }} />
  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex: 10}}>
        <h1 className="my-4 display-5 fw-bold ls-tight" style={{color: 'hsl(218, 81%, 95%)'}}>
          Lost Password ?  <br />
          <span style={{color: 'hsl(218, 81%, 75%)'}}>Reset Here 👉</span>
        </h1>
        <p className="mb-4 opacity-70" style={{color: 'hsl(218, 81%, 85%)'}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
        </p>
      </div>
      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong" />
        <div id="radius-shape-2" className="position-absolute shadow-5-strong" />
        <div className="card bg-glass" style={{margin:"50px"}} >
          <div className="card-body px-5 py-5 px-md-5" >
            <form>
              {/* 2 column grid layout with text inputs for the first and last names */}
              {/* Email input */}
              <div className="form-outline mb-1">
                <input value={email}
                    onChange={(e) => setEmail(e.target.value)} type="email" id="form3Example3" className="form-control" />
                <label className="form-label" htmlFor="form3Example3">Email address</label>
              </div>
              {/* Password input */}
              <div className="form-outline mb-1">
                <input value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)} type="password" id="form3Example4" className="form-control" />
                <label className="form-label" htmlFor="form3Example4">New Password</label>
                                      </div>
                                      {/* Answer input */}
              <div className="form-outline mb-1">
                <input value={answer}
                    onChange={(e) => setAnswer(e.target.value)} type="text" id="form3Example3" className="form-control" />
                <label className="form-label" htmlFor="form3Example3">Enter Answer Key</label>
              </div>
              <div className="text-center">
                      <div className="text-center text-lg-start mt-1 pt-1">
            <button onClick={handleSubmit} type="button" className="btn btn-primary btn-md" style={{paddingLeft: '1.5rem', paddingRight: '1.5rem'}}>Reset</button>
            <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <Link to={"/login"} className="link-danger">Click Here</Link></p>
          </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
    </Layout>
    
    
    </>
  )
}

export default ForgetPassword