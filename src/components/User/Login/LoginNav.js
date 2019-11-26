import React, { Component } from 'react'
import Logo from '../../../logo.png';
import './style.css'
import { NavLink } from 'react-router-dom';
class LoginNav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg  container-fluid text-white justify-content-between h6">
                
                <NavLink to="/" className="text-white logofont">
                    <img src={Logo} className="navbar-brand nav-logo logofont" alt="Gymiz" />
                    GymIZ
                </NavLink>
                <div className="text-white" id="navbarSupportedContent">
                    <ul className="navbar-nav header-ml">
                        <li className="nav-item dropdown">
                            <div className="nav-link font text-white">
                                Vendor Login
                        </div>
                        </li>
                        <li className="nav-item dropdown">
                            <div className="nav-link font text-white">
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