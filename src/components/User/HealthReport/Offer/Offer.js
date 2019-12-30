import React, { Component } from 'react'
import stamp from '../../../../assets/stamp.png'
class Offer extends Component {
    constructor() {
        super();
        this.getOffer = this.getOffer.bind(this);
        this.state = {
            valuesEntered: false
        }
    }
    focus = (e) => {
        console.log(e)
    }
    getOffer = (e) => {
        e.preventDefault();
        this.setState({valuesEntered:true})
    }
    render() {
        if (this.state.valuesEntered) {
            return <React.Fragment>
                <div className="offerBorder bg-dark text-white text-left rounded p-3 row m-2">
                    <div className="col-10 p-2 offset-1 container text-center text-white bg-offer h5">
                        Visit The Center And Apply Code: {"{codehere}"}
                    </div>
                    <div className="col-10  p-2 row offset-1">
                    <div className="col-6 ">Name: Full Name</div>
                    <div className="col-6 ">Email: useremail@email</div>
                    </div>
                    <div className="col-10  p-2 row offset-1">
                    <div className="col-6 ">City: City</div>
                    <div className="col-6 ">State: State</div>
                    </div>
                    <div className="col-10  p-2 row offset-1">
                    <div className="col-6">Center Address: center 1, This lane, this city, this state</div>
                    <div className="col-6 text-right"><img src={stamp} alt="stamp" className="h-75 w-50"/></div>
                    </div>
                </div>

            </React.Fragment>
        }
        else
            return (
                <div className="container-fluid">
                    <h4>Amazing Offer For You</h4>
                    <form onSubmit={this.getOffer}>
                        <div className="form-row text-center">
                            <div className="container-fluid p-2 border bg-light">User Details</div>
                            <div className="form-group offset-md-1 col-md-5">
                                <label htmlFor="userEmail">Email</label>
                                <input type="email" value={"useremail@email"} className="form-control bg-light" id="userEmail" placeholder="Email" readOnly />
                            </div>
                            <div className="form-group offset-md-1 col-md-5">
                                <label htmlFor="userName">Name</label>
                                <input type="text" value={"Full Name"} className="form-control bg-light" id="userName" placeholder="Full Name" readOnly />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="container-fluid p-2 border bg-light">Select Nearest Center</div>
                            <div className="form-group col-md-3">
                                <label htmlFor="inputState">State</label>
                                <div>
                                    <select id="inputState" className="text-secondary h5 p-1 rounded border w-100">
                                        <option value="">Select State</option>
                                        <option value="">Select State</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group col-md-5 offset-md-1">
                                <label htmlFor="inputCity">City</label>
                                <div>
                                    <select id="inputCity" className="text-secondary h5 p-1 rounded border w-100">
                                        <option value="">Select City</option>
                                        <option value="">Select City</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        <button type="submit" className="btn btn-theme btn-md m-2" >Submit</button>
                        <button type="reset" className="btn btn-dark btn-md m-2">Reset</button>
                    </form>
                </div>

            );
    }
}
export default Offer;