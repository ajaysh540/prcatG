import React, { Component } from 'react';
import './style.css'
import Profile from './Profile';
import ManageAddress from './Account/ManageAddress';
import ResetPswd from './Account/ResetPswd';
import { Route, Switch,Redirect} from 'react-router-dom'
import WorkoutGoals from '../../../pages/WorkoutGoals/WorkoutGoals';

class Content extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
    this.state={
      url:this.props.url
    }
  }
componentDidMount(){
  
  // console.log(this.state.url)
}
  render() {
    return (
      <div className="content-area5 dashboard-content">
      <div className="content-scroll">
        <Switch>
          <Route exact path={`${this.state.url}`} render={()=><Redirect to={`${this.state.url}/profile`}/>}/>
          <Route path={`${this.state.url}/profile`} component={Profile} />
          <Route path={`${this.state.url}/manage-address`} component={ManageAddress} />
          <Route path={`${this.state.url}/reset-pswd`} component={ResetPswd} />
          <Route path={`${this.state.url}/dashboard`} component={ResetPswd} />
          <Route path={`${this.state.url}/notification`} component={ResetPswd} />
          <Route path={`${this.state.url}/membership`} component={ResetPswd} />
          <Route path={`${this.state.url}/health-report`} component={ResetPswd} />
          <Route path={`${this.state.url}/workout-goals`} component={WorkoutGoals} />
          <Route path={`${this.state.url}/workout-history`} component={ResetPswd} />
        </Switch>
        </div>
      </div>
    )
  }
}

export default Content;