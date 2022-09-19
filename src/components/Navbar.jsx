import React from 'react'
import '../App.css';
import { Router ,Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <div className='App'>
      <Router>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              کارگزاری تدبیرگران فردا
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    ورود به سامانه
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    ثبت نام
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </Router>
  </div>
  )
}

export default Navbar