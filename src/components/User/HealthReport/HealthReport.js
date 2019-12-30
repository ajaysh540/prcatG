import React, { Component } from 'react'
import Offer from './Offer/Offer'
import UploadReport from './UploadReport/UploadReport'
class HealthReport extends Component {
    constructor() {
        super();
        this.state = {
            offerSelected: false
        }
    }
    getOffer = () => {
        this.setState({ offerSelected: !this.state.offerSelected })
    }
    render() {
        return <React.Fragment>
            <div className="h4 p-3 border border-dark text-center">

                {
                    this.state.offerSelected
                        ?
                        (<React.Fragment>
                            <Offer />
                            <div className="container text-right h5">
                                <p className="text-right w-100 text-danger">Had Health Checkup Already?</p>
                                <button className="btn btn-md btn-dark text-white" onClick={this.getOffer}>Upload Report</button></div>
                        </React.Fragment>)
                        :
                        (<React.Fragment>
                            <div className="jumbotron mt-5 text-center shadow btn w-100 border" onClick={this.getOffer}><h1> Get an Offer </h1></div>
                            <UploadReport />
                        </React.Fragment>)
                }
            </div>
        </React.Fragment>
    }
}
export default HealthReport;