import React from 'react';
import { Route, Switch, withRouter, BrowserRouter as Router } from 'react-router-dom';
import { notification } from 'antd';
//import logo from '../../../src/logo.svg';

import { getCurrentUser } from '../../components/Utils/APICalls';
import { ACCESS_TOKEN } from '../../components/Constants';
import HomePage from '../../pages/Home/HomePage';
import UserDashboard from '../../components/User/Profile/Dashboard';
import TestComponent from '../../components/testarea/TestComponent';
import UserProfile from '../../components/User/Profile/Profile';
import ManageAddress from '../../components/User/Profile/Account/ManageAddress';
import Login from '../../components/User/Login/Login';
import Signup from '../../components/User/Signup/Signup';
import PageNotFound from '../../pages/Errors/404';
import PageLoader from '../../components/PageLoader/PageLoader';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './default.css';
import './App.css'
import NavBar from '../../components/Header/NavBar/NavBar';
import ResetPswd from '../../components/User/ResetPswd/ResetPswd';
import Footer from '../../components/Footer/Footer/footer';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false,
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    });
  }

  loadCurrentUser() {
    this.setState({
      isLoading: true
    });
    getCurrentUser()
      .then(response => {
        this.setState({
          currentUser: response,
          isAuthenticated: true,
          isLoading: false
        });
      }).catch(error => {
        this.setState({
          isLoading: false
        });
      });
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

  handleLogout(redirectTo = "/", notificationType = "success", description = "You're successfully logged out.") {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      currentUser: null,
      isAuthenticated: false
    });
    this.props.history.push(redirectTo);
    notification[notificationType]({
      message: 'Gymiz App',
      description: description,
    });
  }

  handleLogin() {
    notification.success({
      message: 'Gymiz App',
      description: "You're successfully logged in.",
    });
    this.loadCurrentUser();
    this.props.history.push("/");
  }


  render() {
    if (this.state.isLoading) {
      return <PageLoader />
    }
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/login" render={(props) => <Login onLogin={this.handleLogin} {...props} />} />
            <Route path="/signup" component={Signup} />
            <Route
              path="/"
              render={() => (<React.Fragment>
                <div className="main-header App-header">
                  <NavBar isAuthenticated={this.state.isAuthenticated}
                    currentUser={this.state.currentUser}
                    onLogout={this.handleLogout} />
                </div>
                <div className="App-content">
                  <Switch>
                    <Route exact path="/">
                      <HomePage isAuthenticated={this.state.isAuthenticated}
                        currentUser={this.state.currentUser} handleLogout={this.handleLogout} /></Route>
                    <Route path="/test" component={TestComponent} />
                    <Route path="/users/:user"
                      render={(props) => <UserDashboard isAuthenticated={this.state.isAuthenticated}
                        currentUser={this.state.currentUser} {...props} />} />
                    <Route path="/user/profile" component={UserProfile} />
                    <Route path="user/manageAddress" component={ManageAddress} />
                    <Route path="/resetPassword" component={ResetPswd} />
                    <Route path="/404" component={PageNotFound} />
                  </Switch>
                  <Footer />
                </div>
              </React.Fragment>
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default withRouter(App);