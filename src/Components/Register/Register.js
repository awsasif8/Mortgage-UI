import React, { Component } from 'react'
import axios from 'axios'
import { withTranslation } from 'react-i18next';

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
            firstName: '',
            firstNameError: '',
            lastName: '',
            lastNameError: '',
            mobile: '',
            mobileError: '',
            isValid: true
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value }, () => {
        });

    }
    handleSubmit(e) {
        // e.preventDefault()
        // this.validate().then(res=>{
        //     console.log("isvalid inside validate submit", res)
        //     if (res) {
        //         const accountHolder = {
        //             email_id: this.state.email,
        //             first_name: this.state.firstName,
        //             last_name: this.state.lastName,
        //             mobile_no: this.state.mobile,
        //             password: this.state.password
        //         };
        //         console.log(accountHolder)
        //         // axios.post(`${url}/register`, { accountHolder })
        //         //     .then(res => {
        //         //         if (res.status === 200) {
        //         //             alert("Registration is successful")
        //         //             this.props.history.push({
        //         //                 pathname: '/confirmation',
        //         //                 search: '?query=confirmation',
        //         //                 //state:{data: response.data}
        //         //                 state: { acc_no: res.data.acc_no }
        //         //             })
        //         //         } else {
        //         //             console.log(res.status)
        //         //         }
        //         //     }).catch((err) => {
        //         //         alert("Error in registration", err)
        //         //     })
    
        //     }
        // })
       
    }
    validate() {
        return new Promise((resolve, reject) => {
            console.log("Inside validate")
            let isValid = true;
            const errors = {
                emailError: '',
                mobileError: '',
                passwordError: '',
                firstNameError: '',
                lastNameError: ''
            }
            if (this.state.email.indexOf('@') != -1) {
                if (this.state.firstName.length > 4) {
                    if (this.state.lastName.length > 4) {
                        if (this.state.mobileNo.length === 10) {
                            isValid = true;
                        } else {
                            isValid = false;
                            errors.mobileError = 'Mobile Number should be 10 digits and should be a number'
                        }
                    } else {
                        isValid = false;
                        errors.lastNameError = 'Last name should be more than 4 characters'
                    }
                } else {
                    isValid = false;
                    errors.firstNameError = 'first name should be more than 4 characters'
                }
            } else {
                console.log("is valid is false")
                isValid = false;
                errors.emailError = "Email should have @ and password should have more than 4 characters"
            }

            this.setState({
                ...this.state,
                ...errors
            })
            return resolve(isValid)

        })

    }
    render() {
        let {t} = this.props;
        console.log("t inside register", t)
        return (
            <div className="container">
                <h2 style={{ marginLeft: "-5%", marginTop: "1%", color: "orangered" }}>{t('registerTitle')}</h2>
                <form style={{ marginLeft: '30%', marginTop: "5%", textAlign: "left" }} >

                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-2 col-form-label " >{t('email')}</label>
                        <div className="col-sm-4" >
                            <input type="email" className="form-control" id="email" placeholder="Enter Email" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="firstName" className="col-sm-2 col-form-label" >{t('firstName')}</label>
                        <div className="col-sm-4 ">
                            <input type="text" className="form-control" id="firstName" placeholder="Enter First Name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="lastName" className="col-sm-2 col-form-label" >{t('lastName')}</label>
                        <div className="col-sm-4 ">
                            <input type="text" className="form-control" id="lastName" placeholder="Enter First Name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="mobile" className="col-sm-2 col-form-label " >{t('mobile')}</label>
                        <div className="col-sm-4 ">
                            <input type="text" className="form-control" id="mobile" placeholder="Enter Mobile Number" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label htmlFor="password" className="col-sm-2 col-form-label " >{t('password')}</label>
                        <div className="col-sm-4  ">
                            <input type="password" className="form-control" id="password" placeholder="Enter Password" />
                        </div>
                    </div>
                    {/* <div className="form-group row">
                        <div className="col-sm-4 offset-sm-2 ">
                            <label className="form-check-label"><input type="checkbox" /> Remember me</label>
                        </div>
                    </div> */}
                    <div className="form-group row">
                        <div className="col-sm-4 offset-sm-2">
                            <button type="submit" className="btn btn-primary">{t('registerTitle')}</button>
                            {/* <button type="login" className="btn btn-primary">Existing User? SignIn</button> */}
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default withTranslation()(Register)
