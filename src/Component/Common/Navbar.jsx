import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from '../../Context/Auth'
import { toast } from 'react-toastify'
import logo from "./logo.png";

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
          <h1 className="logo me-auto"><Link to='/'>
              <img src={logo}></img>
            </Link></h1>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><Link className="active" to='/'>Home</Link></li>
              <li><Link to='/course'>Courses</Link></li>
              <li><Link to='/trainer'>Trainer</Link></li>
              {/* <li><Link to='/blog'>Blogs</Link></li> */}
              <li><Link to='/blog2'>Blogs</Link></li>
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

                {/* <Link className="get-started-btn" to='/user'>{auth.user.name}</Link> */}

                <NavLink style={{marginLeft:"25px"}}><b>{(auth.user.name).toUpperCase()} </b></NavLink>
                <div>&nbsp;</div>
                <div>&nbsp;</div>


              <div className="dropdown">
                <button
                  className="nav-link dropdown-toggl"
                  href="/"
                  role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    style={{ width: "35px", borderRadius: "21px",  }}
                    src="assets/img/testimonials/testimonials-2.jpg"
                    alt="..."
                  />
                  </button>
                <div style={{ textAlign: "center",marginRight:"70px" }} className="dropdown-menu">
                  <Link to={"/user"} className="dropdown-item" aria-labelledby="dropdownMenuButton" href="userdetail">
                    {(auth.user.name).toUpperCase()}
                  </Link>
                  <a
                      style={{ color: "gray", }}
                    className="dropdown-item"
                    href="/userdashboard"
                  >
                    {auth.user.email}
                  </a>
                  <NavLink
                    to="/login"
                    onClick={handleLogout}
                    className="dropdown-item"
                    href="#"
                  >
                    {/* <AiOutlineLogout/> {" "} */}
                    Logout
                  </NavLink>
                </div>
              </div>

                {/* <Link onClick={handleLogout} className="get-started-btn" to="/login">Logout</Link> */}

              </>
            )
          }

        </div>
      </header>

    </>
  )
}

export default Navbar