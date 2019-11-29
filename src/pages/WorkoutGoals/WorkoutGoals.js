import React, { Component } from 'react'
import './style.css'
class WorkoutGoals extends Component {
    constructor() {
        super();
        this.state = {
            goal: ""
        }
    }
    goalSelected = (e) => {
        let goal = e.target.id;
        console.log(goal)
    }

    render() {
        return <React.Fragment>
            <div className="row jumbotron bg-transparent h-100 m-1">
                <div className="container jumbotron text-center h4">Choose Your Goal</div>

                <button className="col-3 goals btn-light border p-5 jumbotron h3 text-center text-danger" data-toggle="collapse" data-target="#goal">
                    <label id="goal1">Goal 1</label></button>
                <div className="col-3 goals btn-light border p-5 jumbotron h3 text-center text-danger" onClick={this.goalSelected}>
                    <label id="goal2">Goal 2</label>
                </div>
                <div className="col-3 goals btn-light border p-5 jumbotron h3 text-center text-danger" onClick={this.goalSelected}>
                    <label id="goal3">Goal 3</label>
                    </div>
                <div className="col-3 goals btn-light border p-5 jumbotron h3 text-center text-danger" onClick={this.goalSelected}><label id="goal4">Goal 4</label></div>
                <div className="col-3 goals btn-light border p-5 jumbotron h3 text-center text-danger" onClick={this.goalSelected}><label id="goal5">Goal 5</label></div>
                <div className="col-3 goals btn-light border p-5 jumbotron h3 text-center text-danger" onClick={this.goalSelected}><label id="goal6">Goal 6</label></div>
                <div className="col-3 goals btn-light border p-5 jumbotron h3 text-center text-danger" onClick={this.goalSelected}><label id="goal7">Goal 7</label></div>
                <div className="col-3 goals btn-light border p-5 jumbotron h3 text-center text-danger" onClick={this.goalSelected}><label id="goal8">Goal 8</label></div>
            </div>

        </React.Fragment >
    }
}
export default WorkoutGoals;