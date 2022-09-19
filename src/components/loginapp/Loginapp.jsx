
import '../../App.css';
import {BrowserRouter as Router , Routes, Route , Link, Navigate, Outlet} from 'react-router-dom'
import Signup from '../signup/SignUp';
import Signin from '../signin/Signin';
import Home from '../../pages/Home';
import { useSelector } from 'react-redux';



function Loginapp () {

  return (
    <Router>
      <div className="App">
        {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
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
        </nav> */}
        <div className="">
          <div className="">
            <Routes>
              <Route exact path="/sign-in" element={< Signin/>} />
              <Route exact path="/sign-up" element={<Signup />} />
              </Routes>
              <Routes>
              <Route path="/" element={<Outlet />} >
                <Route index element={<Home/>} />
              </Route>
              </Routes>
            
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Loginapp;
