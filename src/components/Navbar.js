import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export const Navbar = (props) => {

  const { currentUser } = useAuth();
  const handleLogin = () => {
    props.signIn();
  }

  const handleLogout = () => {
    props.signOut();
  }

  return (
    <nav className="container navbar navbar-light bg-light override-header">
            <a className="navbar-brand nav-logo" href=".">
              <img src="https://via.placeholder.com/318x76" alt="" />
            </a>
              <ul>
                {
                 !currentUser
                 ?
                 <li>
                  <Link onClick={ () => handleLogin() } to="" id='login-btn' className="float-right btn">LOGIN|REGISTER</Link>
                </li>
                 :
                 <li>
                  <Link onClick={ () => handleLogout() } to="" id='login-btn' className="float-right btn">LOGOUT</Link>
                </li>
                }
              </ul>
              <div className="col-md-12"><hr /></div>
              <div className="col-md-12" id="navbarSupportedContent">
                <ul className="list-unstyled list-inline d-flex list-dash nav-menu  h">
                  <li className="list-inline-item header-list nav-item">
                    <Link to='/' className="foot-nav-link nav-link  h">WHO WE ARE</Link>
                  </li>
                  <p className="h">|</p>
                  <li className="list-inline-item header-list nav-item">
                    <Link to='/whatwedo' className="foot-nav-link nav-link h">WHAT WE DO</Link>
                  </li>
                  <p className="h">|</p>
                  <li className="list-inline-item header-list nav-item">
                    <Link to='/newsevents' className="foot-nav-link nav-link h">NEWS & EVENTS</Link>
                  </li>
                  <p className="h">|</p>
                  <li className="list-inline-item header-list nav-item">
                    <Link to='/wherewework' className="foot-nav-link nav-link h">WHERE WE WORK</Link>
                  </li>
                  <p className="h">|</p>
                  <li className="list-inline-item header-list nav-item">
                    <Link to='/contactus' className="foot-nav-link nav-link h">CONTACT US</Link>
                  </li>
                </ul>  
                <div className="hamburger">
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </div> 
              </div>
              <div className="col-md-12"><hr /></div>
          </nav>
  )
}

