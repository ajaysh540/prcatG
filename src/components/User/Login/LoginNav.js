import React, { Component } from 'react'
import Logo from '../../../logo.png';
import './style.css'
import { NavLink } from 'react-router-dom';
class LoginNav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg login-nav container-fluid bg-light justify-content-between h6">
                
                <NavLink to="/" className="text-dark logofont">
                    <img src={Logo} className="navbar-brand nav-logo logofont" alt="Gymiz" />
                    GymIZ
                </NavLink>
                <div className="" id="navbarSupportedContent">
                    <ul className="navbar-nav header-ml">
                        <li className="nav-item dropdown">
                            <div className="nav-link">
                                Vendor Login
                        </div>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="nav-link ">
                                Admin Login
                        </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default LoginNav;