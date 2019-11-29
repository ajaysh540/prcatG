import React, { Component } from 'react'

class Goals extends Component {
    constructor(props){
        super(props);
        this.state={
            goal:props.goal
        }
    }
    render() {
        return (<React.Fragment>
            <h3>Description for {this.state.goal}</h3>
         </React.Fragment>)
    }
}
export default Goals;