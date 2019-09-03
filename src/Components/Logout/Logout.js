import React, { Component } from 'react'
import './Logout.css'
export class Logout extends Component {
    constructor(props) {
        super(props)
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.validateUser(false);
    }
    render() {
        return (
            <div>
                <h3 style={{ 'margin-top': '10%' }}>Thank you for using ING online banking. Please confirm if you need to logout</h3>
                <div class="btn-group" role="group" aria-label="Basic example">
                      <button id="submit" type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Confirm</button>
                      <button id="cancel" type="cancel" className="btn btn-primary" onClick={this.handleSubmit}>Cancel</button>
                </div>
                
            </div>
        )
    }
}

export default Logout
