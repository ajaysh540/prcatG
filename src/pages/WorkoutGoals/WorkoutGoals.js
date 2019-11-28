import React, { Component } from 'react'

class WorkoutGoals extends Component {
    render() {
        return <React.Fragment>
            <div className="row border border-danger m-1">
                <div className="container text-center h4">Choose Your Goal</div>
                <div className="col-3 m-2 jumbotron border text-center text-danger">Goal 1</div>
                <div className="col-3 m-2 jumbotron border text-center text-danger">Goal 2</div>
                <div className="col-3 m-2 jumbotron border text-center text-danger">Goal 3</div>
                <div className="col-3 m-2 jumbotron border text-center text-danger">Goal 4</div>
                <div className="col-3 m-2 jumbotron border text-center text-danger">Goal 5</div>
                <div className="col-3 m-2 jumbotron border text-center text-danger">Goal 6</div>

            </div>
        </React.Fragment>
    }
}
export default WorkoutGoals;