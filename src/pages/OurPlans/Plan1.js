import React, { Component } from 'react'

class Plan1 extends Component {
    handlePlan = (e) => {
        console.log(e.target.id)
        document.getElementById("1").classList.remove("selectedPlan")
        document.getElementById("2").classList.remove("selectedPlan")
        document.getElementById("3").classList.remove("selectedPlan")
        e.target.classList.add("selectedPlan")
    }
    render() {
        return <React.Fragment>
            <div className="shadow m-2 col-lg-3 col-10 offset-lg-0 offset-1  pre-scrollable">
            <div className="h5 p-4 text-center text-dark">
                <label className="sticky-top bg-dark text-white w-100 rounded p-2">Plan Details</label>
                <label className=" row input-plan d-flex jumbotron p-3 border border-primary" id="3">
                    <div className="col-12 d-flex justify-content-between">
                        <label>1 Month Plan</label>
                        <input type="radio" name="plan1" className="m-2" value="plan101" />
                    </div>
                    - The details of plan and offers
                <div className="col-12 p-4">
                        <div className="container d-flex justify-content-between">
                            <i>Price:</i>
                            Rs. xxxx
                    </div>
                    </div>
                </label>
                <label className=" row input-plan d-flex jumbotron p-3 border border-primary" id="1">
                    <div className="col-12 d-flex justify-content-between">
                        <label>3 Month Plan</label>
                        <input type="radio" name="plan1" className="m-2" value="plan101" />
                    </div>
                    - The details of plan and offers
                <div className="col-12 p-4">
                        <div className="container d-flex justify-content-between">
                            <i>Price:</i>
                            Rs. xxxx
                    </div>
                    </div>
                </label>
                <label className=" row input-plan d-flex jumbotron p-3 border border-primary" id="2">
                    <div className="col-12 d-flex justify-content-between">
                        <label>6 Month Plan</label>
                        <input type="radio" name="plan1" className="m-2" value="plan101" />
                    </div>
                    - The details of plan and offers
                <div className="col-12 p-4">
                        <div className="container d-flex justify-content-between">
                            <i>Price:</i>
                            Rs. xxxx
                    </div>
                    </div>
                </label>
                <label className=" row input-plan d-flex jumbotron p-3 border border-primary" id="3">
                    <div className="col-12 d-flex justify-content-between">
                        <label>12 Month Plan</label>
                        <input type="radio" name="plan1" className="m-2" value="plan101" />
                    </div>
                    - The details of plan and offers
                <div className="col-12 p-4">
                        <div className="container d-flex justify-content-between">
                            <i>Price:</i>
                            Rs. xxxx
                    </div>
                    </div>
                </label>
                
            </div>
        </div>
        <div className="container border">hkdfhiagdfhavbfhgvah</div>
        </React.Fragment>
    }
}
export default Plan1;