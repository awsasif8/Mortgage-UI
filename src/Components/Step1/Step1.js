import React, { Component } from 'react'

export class Step1 extends Component {
    render() {
        if (this.props.currentStep !== 1) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return (
            <div className="form-group">
                <span className="text-danger " ><small>{this.props.propertycostError}</small></span><br></br>
                <label htmlFor="mortgageType">I'm thinking about</label>
                    <select
                        className="form-control"
                        id="mortgageType"
                        onChange={this.props.handleChange} 
                        value={this.props.mortgageType}>
                        <option value="newhome">Buy a new home</option>
                        <option value="refurbish">Buy a refurbished home</option>
                    </select>
                    <br></br>
                <label htmlFor="propertycost">How much do you think the property will cost?</label>
                <input
                    className="form-control"
                    id="propertycost"
                    name="propertycost"
                    type="text"
                    value={this.props.propertycost}
                    placeholder="Enter property cost"
                    onChange={this.props.handleChange} // Prop: Puts data into state
                />
                <br></br>
                <label htmlFor="deposit">How much deposit you have?</label>
                <input
                    className="form-control"
                    id="deposit"
                    name="deposit"
                    type="text"
                    value={this.props.deposit}
                    placeholder="Enter deposit amount"
                    onChange={this.props.handleChange} // Prop: Puts data into state
                />

            </div>
        )
    }
}

export default Step1
