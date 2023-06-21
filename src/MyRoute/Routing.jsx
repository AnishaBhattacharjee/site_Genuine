import React from 'react'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Home from '../Pages/Home'
import Navbar from '../Component/Common/Navbar'
import Footer from '../Component/Common/Footer'
import Courses from '../Pages/Courses'
import Events from '../Pages/Events'
import Contact from '../Pages/Contact'
import Login from '../Pages/Authentication/Login'
import Registration from '../Pages/Authentication/Registration'
import ForgetPassword from '../Pages/Authentication/ForgetPassword';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';

const Routing = () => {
  function PrivateRoute({children}){
    const tokens=localStorage.getItem('auth')
    return tokens !==null && tokens !==undefined ?(
      children
    ):(
      <Navigate to='/login'/>
    )
  }

  const publicRouting=[
    {
      path:'/register',
      Component:<Registration/>
    },
    {
      path:'/login',
      Component:<Login/>
    },
    {
      path:'/forgetPassword',
      Component:<ForgetPassword/>
    },
    {
      path:'/',
      Component:<Home/>
    }
  ]

  const privateRouting=[
    {
      path:'/course',
      Component:<Courses/>
    },
    {
      path:'/event',
      Component:<Events/>
    },
    {
      path:'/contact',
      Component:<Contact/>
    },
    {
      path:'/user',
      Component:<Dashboard/>
    }
  ]

  return (
    <>
    <ToastContainer/>
        
        <Routes>
            {
              publicRouting?.map((route,index)=>{
                return(
                  <>
                  <Route
                  Key={index+1}
                  exact
                  path={route?.path}
                  element={route?.Component}
                  />
                  </>
                )
              })
            }
            {
              privateRouting?.map((proute,index)=>{
                return(
                  <>
                  <Route 
                  path={proute?.path}
                  element={<PrivateRoute>{proute?.Component}</PrivateRoute>}
                  />
                  </>
                )
              })
            }
        </Routes>
        
    </>
  )
}

export default Routing