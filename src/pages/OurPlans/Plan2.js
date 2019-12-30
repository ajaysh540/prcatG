import React, { Component } from 'react'

class Plan2 extends Component {
    constructor() {
        super()
        this.state = {
            plan: "",
            plan1: {
                price: "xxxx",
                duration: "1"
            },
            plan2: {
                price: "xxxx",
                duration: "3"
            },
            plan3: {
                price: "xxxx",
                duration: "6"
            },
            plan4: {
                price: "xxxx",
                duration: "12"
            },
            planSelected: []
        }
    }
    handlePlan = (e) => {
        const value = e.target.value;
        this.setState({ plan: value })
        if (value === "plan101") { this.setState({ planSelected: this.state.plan1 }) }
        if (value === "plan102") { this.setState({ planSelected: this.state.plan2 }) }
        if (value === "plan103") { this.setState({ planSelected: this.state.plan3 }) }
        if (value === "plan104") { this.setState({ planSelected: this.state.plan4 }) }
    }
    render() {
        return <React.Fragment>
            <div className="shadow m-2 ml-lg-4 mr-lg-4 col-lg-3 col-10 offset-lg-0 offset-1 h4 pre-scrollable">
                <div className="h5 p-4 text-center text-dark">
                    <label className="sticky-top bg-dark text-white w-100 rounded p-2 ">Plan Details</label>
                    <label className=" row input-plan d-flex jumbotron p-3 border-plans" id="plan101">
                        <div className="col-12 d-flex justify-content-between">
                            <label>1 Month Plan</label>
                            <input type="radio" name="plan1" className="m-2" value="plan101" onChange={this.handlePlan} />
                        </div>
                        - The details of plan and offers
                <div className="col-12 p-4">
                            <div className="container d-flex justify-content-between">
                                <i>Price:</i>
                                Rs. xxxx
                    </div>
                        </div>
                    </label>
                    <label className=" row input-plan d-flex jumbotron p-3 border-plans" id="plan102">
                        <div className="col-12 d-flex justify-content-between">
                            <label>3 Month Plan</label>
                            <input type="radio" name="plan1" className="m-2" value="plan102" onChange={this.handlePlan} />
                        </div>
                        - The details of plan and offers
                <div className="col-12 p-4">
                            <div className="container d-flex justify-content-between">
                                <i>Price:</i>
                                Rs. xxxx
                    </div>
                        </div>
                    </label>
                    <label className=" row input-plan d-flex jumbotron p-3 border-plans" id="plan103">
                        <div className="col-12 d-flex justify-content-between">
                            <label>6 Month Plan</label>
                            <input type="radio" name="plan1" className="m-2" value="plan103" onChange={this.handlePlan} />
                        </div>
                        - The details of plan and offers
                <div className="col-12 p-4">
                            <div className="container d-flex justify-content-between">
                                <i>Price:</i>
                                Rs. xxxx
                    </div>
                        </div>
                    </label>
                    <label className="row input-plan d-flex jumbotron p-3 border-plans" id="plan104">
                        <div className="col-12 d-flex justify-content-between">
                            <label>12 Month Plan</label>
                            <input type="radio" name="plan1" className="m-2" value="plan104" onChange={this.handlePlan} />
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
            {this.state.plan !== "" ? (<React.Fragment>
                <div className="shadow m-2 ml-lg-5 col-lg-5 col-10 offset-lg-0 offset-1">
                    <PlanDetails plan={this.state.plan} planSelected={this.state.planSelected} />
                </div>
                <div className="w-100 m-3 h5 border text-left" >
                    <p className="h4">Selected Plan is {this.state.plan}</p>

                    <ul>
                        <li>Duration: {this.state.planSelected.duration} Months</li>
                    </ul>

                </div>
            </React.Fragment>) : ""}
        </React.Fragment>
    }
}
class PlanDetails extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <div className="text-left w-100 h-100 d-flex flex-column">
            <label className="h4 text-dark container"><i>Selected Plan</i><hr className="bg-dark" />
            </label>
            <h2>{this.props.plan.toUpperCase()}</h2><br />
            <h4>{this.props.planSelected.duration} Months Subscription</h4>
            <hr className="bg-light" />
            <h3>Order Summary</h3>
            <div>
                <h4 className="container d-flex justify-content-between">
                    <label>Membership Price</label>
                    <label>Rs. {this.props.planSelected.price}</label>
                </h4>
                <h4 className="container d-flex justify-content-between">
                    <label>Applicable Tax</label>
                    <label>Rs. {this.props.planSelected.price}</label>
                </h4>
                <hr className="bg-success" />
                <h4 className="container d-flex justify-content-between">
                    <label>Total Amount</label>
                    <label className="text-success"><i>Rs. {this.props.planSelected.price}</i></label>
                </h4>
            </div>
            <h4 className="container d-flex text-success mt-auto justify-content-between">
                <label className="border w-50 p-3 border-success">Total Rs. {this.props.planSelected.price}</label>
                <label className="bg-success w-50 p-3 text-white">Proceed To Payment</label>
            </h4>
        </div>
    }
}
export default Plan2;