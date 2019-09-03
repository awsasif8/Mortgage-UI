import React, { Component } from 'react'

export class Step2 extends Component {
    
    render() {
        if (this.props.currentStep !== 2) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return (
            <div className="form-group">
                <label htmlFor="occupation">Occupation</label>
                <select
                    className="form-control" 
                    onChange={this.props.handleChange}
                    id="occupation"
                    name="occupation"
                    value={this.props.occupation}
                    >
                    <option value="">Select</option>
                    <option value="employed">Employed</option>
                    <option value="business">Private</option>
                </select>

                <br></br>
                <label htmlFor="firstName"></label>
                <input
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter first name"
                    value={this.props.firstName}
                    onChange={this.props.handleChange} // Prop: Puts data into state
                />
                <br></br>
                <label htmlFor="lastName"></label>
                <input
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter last name"
                    value={this.props.lastName}
                    onChange={this.props.handleChange} // Prop: Puts data into state
                />
                <br></br>
                <label htmlFor="dob"></label>
                <input
                    className="form-control"
                    id="dob"
                    name="dob"
                    type="date"
                    placeholder="Enter date of birth"
                    value={this.props.dob}
                    onChange={this.props.handleChange} // Prop: Puts data into state
                />

            </div>
        )
    }

}

export default Step2
