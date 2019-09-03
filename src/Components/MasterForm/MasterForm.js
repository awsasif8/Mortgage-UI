import React, { Component } from 'react'
import Step1 from '../Step1/Step1'
import Step2 from '../Step2/Step2'
import Step3 from '../Step3/Step3'
import './MasterForm.css'
export class MasterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1, // Default is Step 1
            email: '',
            username: '',
            password: '',
            propertycost: '',
            mortgageType: 'newhome',
            deposit: '',
            mobileNo: '',
            firstName: '',
            lastName: '',
            dob: '',
            email: '',
            occupation: 'employed'

        }
        this.handleChange = this.handleChange.bind(this);
        // Bind new functions for next and previous
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }
    
    // Use the submitted data to set the state
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        },()=>{
            console.log("state", this.state)
        })
    }

    // Trigger an alert on form submission
    handleSubmit = (event) => {
        event.preventDefault()
        const { email, username, password } = this.state
        alert(`Your registration detail: \n 
      Email: ${email} \n 
      Username: ${username} \n
      Password: ${password}`)
    }

    _next() {
        let currentStep = this.state.currentStep
        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }
    _prev() {
        let currentStep = this.state.currentStep
        // If the current step is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    // The "next" and "previous" button functions
    get previousButton() {
        let currentStep = this.state.currentStep;
        // If the current step is not 1, then render the "previous" button
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary float-left"
                    type="button" onClick={this._prev}>
                    Previous
        </button>
            )
        }
        // ...else return nothing
        return null;
    }

    get nextButton() {
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if (currentStep < 3) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={this._next}>
                    Next
        </button>
            )
        }
        // ...else render nothing
        return null;
    }
    render() {
        return (
            <React.Fragment>
                <h2>Signup </h2>
                <p><h4> Step {this.state.currentStep}</h4> </p>

                <form  className="master" onSubmit={this.handleSubmit}>
                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        email={this.state.email}
                    />
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        username={this.state.username}
                    />
                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        password={this.state.password}
                    />
                     {this.previousButton}
                     {this.nextButton}
                </form>
            </React.Fragment>
        )
    }
}

export default MasterForm
