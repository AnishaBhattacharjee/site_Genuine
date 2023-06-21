import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../Context/Auth'
import { toast } from 'react-toastify'

const Navbar = () => {
  const [auth, setAuth] = useAuth()

  const handleLogout = async () => {
    setAuth({
      ...auth,
      user: null,
      token: ""
    })
    localStorage.removeItem('auth')
    toast.success("Successfully Logged Out")

  }

  return (
    <>
    <header id="header" className="fixed-top">
  <div className="container d-flex align-items-center">
    <h1 className="logo me-auto"><Link to='/'>WHITETROOP</Link></h1>
    <nav id="navbar" className="navbar order-last order-lg-0">
      <ul>
        <li><Link className="active" to='/'>Home</Link></li>
        <li><Link to='/course'>Courses</Link></li>
        <li><Link to='/event'>Events</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
      <i className="bi bi-list mobile-nav-toggle" />
    </nav>
    {
              !auth.user ? (
                <>
                   <Link to='/login' className="get-started-btn">Login</Link>
                </>) : (
                <>
                    <Link className="get-started-btn" to='/user'>{auth.user.name}</Link>
                    <Link onClick={handleLogout} className="get-started-btn" to="/login">Logout</Link>
                </>
              )
            }
    
  </div>
</header>

    </>
  )
}

export default Navbar