import React from 'react'
import { useAuth } from '../Context/Auth'
import Layout from '../Component/Layout/Layout'

const Dashboard = () => {
    const[auth,setAuth]=useAuth()
  
  return (
    <>
    <Layout>
    <div className="breadcrumbs">
    <div style={{ marginTop: '55px',marginBottom:'45px', paddingTop: '53px'}} className="container dashboard">
                {/* <div className="row">  */}
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}} className="card-wrap">                  
                    <div className="card mb-3" style={{ maxWidth: '640px'}}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img style={{width:'100%', objectFit:"cover"}} src="assets/img/testimonials/testimonials-2.jpg" alt="..." />
                            </div>
                            <div className="col-md-8 card-bg">
                              <div style={{ textAlign: 'left' }} className="card-body ">
                                    <h2 className="card-title">Name : {(auth?.user?.name).toUpperCase()}</h2>
                                  <hr/>
                                    <h6 className="card-text">Email : {auth?.user?.email}</h6>
                                    <h6 className="card-text">Contact : {auth?.user?.phone}</h6>
                                    <h6 className="card-text">Address : {auth?.user?.address}</h6>
                                    
                                </div>
                            </div>
                        </div>
                    </div> 
              </div>
              </div>
    </div>
    </Layout>
    
    </>
  )
}

export default Dashboard