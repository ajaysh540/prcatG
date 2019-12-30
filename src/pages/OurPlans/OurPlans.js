import React, { Component } from 'react'
import './style.css'
import Plan1 from './Plan1'
import Plan2 from './Plan2'
import Plan3 from './Plan3'
class OurPlans extends Component {
    constructor(){
        super()
        this.state={
            planDetails:""
        }
    }
    planSelected=(e)=>{
        this.setState({planDetails:e.target.id})
        document.getElementById("plan1").classList.remove("selectedPlan")
        document.getElementById("plan2").classList.remove("selectedPlan")
        document.getElementById("plan3").classList.remove("selectedPlan")
        e.target.classList.add("selectedPlan")
    }
    render() {
        return <div className="container-fluid text-center">
            <div className="jumbotron row plans-head border m-4 justify-content-between">
                <div className="h2 text-white col-12 text-left">GymIZ</div><br />
                <div className="col-lg-6 col-md-10 offset-md-1 offset-lg-0 h4 text-white">Smarter Way to Gym</div>
                <div className="col-lg-6 col-md-10 offset-md-1 offset-lg-0 h5 text-white text-left">
                    <div>How It Works</div>
                    <div className="h6 text-secondary">Watch a Video</div>
                </div>
                <div className="col-12 text-left">
                    <ul className="text-white">
                        <li>Some description</li>
                        <li>Some description</li>
                        <li>Some description</li>
                        <li>Some description</li>
                    </ul>
                </div>
            </div>
            <div className="text-center plan-details m-4 bg-white text-center row">
                <div className="shadow col-lg-3 col-10 mr-lg-4 offset-lg-0 offset-1 text-left h4">
                    <label className="mt-3">Choose Plan</label>
                    <div className="container p-2">
                        <div className="border-plans plans shadow jumbotron" id="plan1" onClick={this.planSelected}>Plan 1</div>
                        <div className="border-plans plans shadow jumbotron" id="plan2" onClick={this.planSelected}>Plan 2</div>
                        <div className="border-plans plans shadow jumbotron" id="plan3" onClick={this.planSelected}>Plan 3</div>
                    </div>
                </div>
                
                    {this.state.planDetails===""?<div className="col-8 text-center h2">Select a Plan</div>:""}
                    {this.state.planDetails==="plan1"?<Plan1/>:""}
                    {this.state.planDetails==="plan3"?<Plan3/>:""}
                    {this.state.planDetails==="plan2"?<Plan2/>:""}
               

            </div>
        </div>
    }
}
export default OurPlans;