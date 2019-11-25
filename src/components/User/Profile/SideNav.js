import React, { Component } from 'react';
import {  NavLink} from 'react-router-dom';
import './style.css'

class SideNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuItem: null,
            url:this.props.url
        }
        this.handleMenuClick = this.handleMenuClick.bind(this);
        
      }
    
      handleMenuClick = (menuItemClicked) => {
          console.log(menuItemClicked);
        this.setState({menuItem: menuItemClicked});
      }

  render() {
    return (
                <div className="dashboard-nav d-xl-block d-lg-block">

                    <div className="dashboard-inner">
                        <h4>Main</h4>
                        <ul>
                            <li> <NavLink to={`${this.state.url}/dashboard`}  ><i className="fa fa-dashboard"></i> Dashboard</NavLink></li>
                            <li><NavLink to={`${this.state.url}/notification`}  ><i className="fa fa-envelope"></i> Notifications <span className="nav-tag">6</span></NavLink></li>
                            <li><NavLink to={`${this.state.url}/membership`}  ><i className="fa fa-calendar"></i> Membership</NavLink></li>
                        </ul>
                        <h4>Workout Manager</h4>
                        <ul>
                            <li><NavLink to={`${this.state.url}/health-report`}  ><i className="fa fa-heartbeat"></i> Health Report</NavLink></li>
                            <li><NavLink to={`${this.state.url}/workout-goals`}  ><i className="fa fa-bullseye"></i> Workout Goal</NavLink></li>
                            <li><NavLink to={`${this.state.url}/workout-history`}  ><i className="fa fa-pie-chart"></i> Workout History</NavLink></li>
                        </ul>
                        <h4>Account</h4>
                        <ul>
                            <li className="active"><NavLink to={`${this.state.url}/profile`}> <i className="fa fa-user"></i> My Profile</NavLink></li>
                            <li> <NavLink to={`${this.state.url}/manage-address`}  > <i className="fa fa-map-marker"></i> Manage Address </NavLink></li>
                            <li><NavLink to={`${this.state.url}/reset-pswd`} > <i className="fa fa-eye fa"></i> Change Password</NavLink></li>
                            <li><a href="#"><i className="fa fa-sign-out"></i> Logout</a></li>
                        </ul>
                    </div>
                </div>
            );
        }
        }
        
        export default SideNav;