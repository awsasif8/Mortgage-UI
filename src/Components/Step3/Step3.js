import React, { Component } from 'react'

export class Step3 extends Component {
    render() {
        if (this.props.currentStep !== 3) { // Prop: The current step
            return null
          }
          // The markup for the Step 1 UI
          return(
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                className="form-control"
                id="email"
                name="email"
                type="text"
                placeholder="Enter email"
                value={this.props.email} // Prop: The email input data
                onChange={this.props.handleChange} // Prop: Puts data into state
              /><br></br>
               <label htmlFor="mobile">Mobile Number</label>
              <input
                className="form-control"
                id="mobile"
                name="mobile"
                type="text"
                placeholder="Enter mobile number"
                value={this.props.mobile} 
                onChange={this.props.handleChange} 
              />
            </div>
          )
        }
    }

export default Step3
