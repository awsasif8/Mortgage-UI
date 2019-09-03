import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { withTranslation } from 'react-i18next';
import './Login.css'
import config from '../../config.json'
import { withRouter } from 'react-router-dom';
// import validate from '../../Utils/Validator'

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customerId: '',
            customerIdError: '',
            password: '',
            passwordError: '',
            isValid: false,
            alert: null
        }
        console.log("props of login constructor", this.props)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value }, () => {
        });

    }

    handleSubmit(e) {
        e.preventDefault()

        this.validate().then((res) => {
            console.log("res", res)
            if (res) {
                const { customerId, password } = this.state
                const user = {
                    customerId: customerId,
                    password: password
                };
                console.log(this.props)
               
                this.getData(user).then((response) => {
                    if (response.status === 200 ) {
                        this.props.validateUser(true);
                        localStorage.setItem('customerId',this.state.customerId)
                        this.props.history.push('/home')
                    }
                }).catch(err => {
                    swal(`Error in login ${err}`)
                });

            } else {

            }
        });
    }
   
    getData(user) {
        return new Promise((resolve, reject) => {
            axios.post(`${config.url}/user/login`, user)
                .then(res => {
                    return resolve(res)
                }).catch(err => {
                    return reject(err)
                })
        });

    }
    validate() {
        console.log("Inside validate", this.state)
        let isValid = true;
        const errors = {
            customerIdError: '',
            passwordError: ''
        }

            if (this.state.password.length > 4) {
                isValid = true;
            } else {
                isValid = false;
                errors.passwordError = 'Password should be more than 4 characters'
            }
       
        if (this.state.customerId === '' || this.state.password === '') {
            isValid = false;
            errors.customerIdError = "Customer Id and password are mandatory fields."
        }

        this.setState({
            ...this.state,
            ...errors
        })
        console.log("isValid inside validate", isValid)
        return Promise.resolve(isValid);

    }
    render() {
        return (
            <div>
                <div className="container">
                    <h2 style={{ marginLeft: "-5%", marginTop: "1%", color: "orangered" }}>Login</h2>
                    <form style={{ marginLeft: '30%', marginTop: "5%", textAlign: "left" }} >
                        <span className="text-danger " ><small>{this.state.customerIdError}</small></span>
                        <span className="text-danger " ><small>{this.state.passwordError}</small></span>
                        <br></br>
                        <div className="form-group row">
                            <label htmlFor="customerId" className="col-sm-2 col-form-label " >Customer Id</label>
                            <div className="col-sm-4" >
                                <input
                                    type="customerId"
                                    className="form-control"
                                    id="customerId"
                                    placeholder="Enter Customer Id"
                                    onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="password" className="col-sm-2 col-form-label " >Password</label>
                            <div className="col-sm-4  ">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Enter Password"
                                    onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-sm-4 offset-sm-2">
                                <button id="submit" type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Login</button>
                            </div>
                        </div>

                    </form>
                 
                </div>
            </div>
        )
    }
}


export default withTranslation()(withRouter(Login));