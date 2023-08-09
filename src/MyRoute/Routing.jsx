import React from 'react'
import { ToastContainer} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Home from '../Pages/Home'
import Blogs from '../Pages/Blogs'
import Courses from '../Pages/Courses'
import Contact from '../Pages/Contact'
import Login from '../Pages/Authentication/Login'
import Registration from '../Pages/Authentication/Registration'
import ForgetPassword from '../Pages/Authentication/ForgetPassword';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Trainer from '../Pages/Trainer';
import Blog from '../Pages/Blog';

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
    // {
    //   path:'/blog',
    //   Component: <Blogs/>
    // },
    {
      path:'/blog2',
      Component: <Blog/>
    },
    {
      path:'/contact',
      Component:<Contact/>
    },
    {
      path:'/user',
      Component:<Dashboard/>
    },
    {
      path:'/trainer',
      Component:<Trainer/>
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