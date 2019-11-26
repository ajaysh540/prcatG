import React from 'react';
import SideNav from './SideNav';
import Content from './Content';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Dashboard = (props) => {
    // console.log(props)
    const pathname = props.match.url
    // console.log(pathname)
    return (

        <div className="dashboard">
            <div className="container-fluid">
                <div className="row">
                    <Router>
                        
                        <div className="col-lg-3 col-md-12 col-sm-12 p-1 sideNav rounded sticky-top">
                            {/* <Route path="/" component={SideNav} /> */}
                            <Route path="/" render={() => <SideNav url={`${pathname}`} />} />
                        </div>
                        <div className="col-lg-9 col-md-12 col-sm-12 sticky-top col-pad">
                             {/* <Route to="/" component={Content}/>  */}
                            <Route path="/" render={() => <Content url={`${pathname}`} />} />
                        </div>

                    </Router>
                </div>

            </div>
        </div>
    )
}

export default Dashboard;