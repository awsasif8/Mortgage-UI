import React, { Component } from 'react'
import Step1 from '../Step1/Step1'
import Step2 from '../Step2/Step2'
import Step3 from '../Step3/Step3'
import './MasterForm.css'
import config from '../../config.json'
import axios from 'axios'
import swal from 'sweetalert'
export class MasterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentStep: 1, // Default is Step 1
            email: '',
            emailError: '',
            propertycost: '',
            propertycostError: '',
            mortgageType: 'newhome',
            mortgageTypeError: '',
            deposit: '',
            depositError: '',
            mobile: '',
            mobileError: '',
            firstName: '',
            firstNameError: '',
            lastName: '',
            lastNameError: '',
            dob: '',
            dobError: '',
            age: '',
            ageError: '',
            email: '',
            emailError: '',
            occupation: '',
            occupationError: ''

        }
        this.handleChange = this.handleChange.bind(this);
        // Bind new functions for next and previous
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }
    
    get_age(time){
        var MILLISECONDS_IN_A_YEAR = 1000*60*60*24*365;
        var date_array = time.split('-')
        var years_elapsed = (new Date() - new Date(date_array[0],date_array[1],date_array[2]))/(MILLISECONDS_IN_A_YEAR);
        return years_elapsed; 
    }
    validate() {
        let isValid = true
        const errors = {
            propertycostError:'',
            depositError:'',
            occupationError: '',
            ageError: '',
            emailError:'',
            mobileError:'',
            lastNameError: '',
            firstNameError: '',
            emailError:'',
            mobileError: ''
        }
        return new Promise((resolve, reject) => {
            if (this.state.propertycost === '' || this.state.propertycost < 100000) {
                isValid = false
                errors.propertycostError='Property cost should be more than 1 lakh'
            } else if(this.state.deposit === '' || this.state.deposit <0){
                isValid = false
                errors.depositError= 'Deposit amount should be greater than zero'
            } else if(parseInt(this.state.deposit) >= parseInt(this.state.propertycost)){
                isValid = false
                errors.depositError= 'Deposit amount cannot be more than property cost'
            } 

            if(this.state.currentStep === 2 && this.state.occupation===''){
                isValid = false
                errors.occupationError= 'Occupation is a mandatory field'
            } 
            if(this.state.currentStep === 3 && this.state.email===''){
                isValid = false
                errors.emailError='Email is a mandatory field'
            } 
            if(this.state.currentStep === 2 && this.state.firstName===''){
                isValid = false
                errors.emailError='First Name is a mandatory field'
            } 
            if(this.state.currentStep === 2 && this.state.lastName===''){
                isValid = false
                errors.emailError='Last Name is a mandatory field'
            } 
           
            if(this.state.currentStep === 3 && this.state.mobile===''){
                isValid = false
                errors.emailError='Mobile number is a mandatory field'
            } 
           
            if(parseInt(this.get_age(this.state.dob))<18){
                isValid = false
                errors.ageError='Age should be more than 18 years to grant mortgage '
            }
            this.setState({
                ...this.state,
                ...errors
            })
            return resolve(isValid)
        })

    }

    // Use the submitted data to set the state
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        }, () => {
            console.log("state", this.state)
        })
    }

    // Trigger an alert on form submission
    handleSubmit = (event) => {
        event.preventDefault()
        this.validate().then(res=>{
            if(res){
                let customer={
                    email: this.state.email,
                    mobile: this.state.mobile,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    dob: this.state.dob,
                    deposit: this.state.deposit,
                    occupation: this.state.occupation,
                    mortgageType: this.state.mortgageType,
                    propertycost: this.state.propertycost
                }
                console.log("Customer details", customer)
                this.getData(customer).then((response) => {
                    console.log(response)
                    if (response.status === 201 ) {
                       swal(`Congratulations. Your mortgage has been granted .Please find below the details.
                            Your Login ID: ${response.data.customerId} 
                            Your password is: ${response.data.password}
                            Your Mortgage Account Number is: ${response.data.mortgageAcc}
                            Your Transaction Account Number is: ${response.data.transactionAcc}`)
                    }
                }).catch(err => {
                    swal(`Error in login ${err}`)
                });
    

            }
            
        })
    }
    getData(customer) {
        return new Promise((resolve, reject) => {
            axios.post(`${config.url}/register`, customer)
                .then(res => {
                    return resolve(res)
                }).catch(err => {
                    return reject(err)
                })
        });

    }
    _next() {
        this.validate().then((res) => {
            if (res) {
                let currentStep = this.state.currentStep
                // If the current step is 1 or 2, then add one on "next" button click
                currentStep = currentStep >= 2 ? 3 : currentStep + 1
                this.setState({
                    currentStep: currentStep,
                    propertycostError:'',
                    depositError:'',
                    occupationError: '',
                    ageError: '',
                    emailError:'',
                    mobileError:''
                })
            }
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
      

         // If the current step is not 1, then render the "previous" button
         if (currentStep == 3) {
            return (
                <button
                    className="btn btn-primary float-right"
                    type="button" onClick={this.handleSubmit}>
                    Submit
        </button>
            )
        }
        return null;
    }

    render() {
        return (
            <React.Fragment>
                <h2>Signup </h2>
                <p><h4> Step {this.state.currentStep}</h4> </p>
                <span className="text-danger " ><small>{this.state.depositError}</small></span>
                <span className="text-danger " ><small>{this.state.occupationError}</small></span>
                <span className="text-danger " ><small>{this.state.propertycostError}</small></span>
                <span className="text-danger " ><small>{this.state.ageError}</small></span>
                <span className="text-danger " ><small>{this.state.emailError}</small></span>
                <span className="text-danger " ><small>{this.state.firstNameError}</small></span>
                <span className="text-danger " ><small>{this.state.lastNameError}</small></span>
                <form className="master" onSubmit={this.handleSubmit}>
                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        mortgageType={this.state.mortgageType}
                        propertycost={this.state.propertycost}
                        deposit={this.state.deposit}
                    />
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        occupation={this.state.occupation}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        dob={this.state.dob}
                    />
                    <Step3
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        mobile={this.state.mobile}
                        email={this.state.email}
                    />
                    {this.previousButton}
                    {this.nextButton}
                </form>
            </React.Fragment>
        )
    }
}

export default MasterForm
