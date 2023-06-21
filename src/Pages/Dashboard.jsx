import React from 'react'
import { useAuth } from '../Context/Auth'
import Layout from '../Component/Layout/Layout'

const Dashboard = () => {
    const[auth,setAuth]=useAuth()
  return (
    <>
    <Layout>
    <div className="breadcrumbs">
        <div className='resigter'>
        <div id="feedback-form">
        <h2 className="header">User Details</h2>
        <pre style={{color:'darkgrey'}}>{JSON.stringify(auth,null,4)}</pre>
        </div>
        </div>
    </div>
    </Layout>
    
    </>
  )
}

export default Dashboard