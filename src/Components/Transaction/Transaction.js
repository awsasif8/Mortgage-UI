import React, { Component } from 'react'
import config from '../../config.json'
import axios from 'axios'
import './Transaction.css'

export class Transaction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactionAccNo: '',
            transactionAccBalance: '',
            transactionStatement: [],
            viewStatement: false
        }
        this.handleGetStatment = this.handleGetStatment.bind(this)
    }
    componentDidMount() {
        let customerId = localStorage.getItem('customerId')
        axios.get(`${config.url}/summary/${customerId}`)
            .then(res => {
                console.log("res inside component did mount of transaction", res)
                this.setState({
                    transactionAccNo: res.data.transactionAccountNumber,
                    transactionAccBalance: res.data.transactionBalance
                }, () => {
                    console.log("all stock after set state", this.state.transactionAccNo)
                });
            })
    }
    handleGetStatment(e) {
        console.log("Inside handle get statement")
        e.preventDefault();
        this.setState({
            viewStatement: true
        })
        axios.get(`${config.url}/statements/${this.state.transactionAccNo}`)
            .then(res => {
                console.log("res inside get statemnet", res)
                this.setState({
                    transactionStatement: res.data.data
                }, () => {
                    console.log("all stock after set state", this.state.transactionAccNo)
                });
            })

    }
    render() {
        return (
            <div>
                <section className="balance">
                    <h6>Transaction Account Number : <span style={{ color: "blue" }}>{this.state.transactionAccNo}</span></h6>
                    <h6>Transaction Account Balance:<span style={{ color: "blue" }}>{this.state.transactionAccBalance}</span></h6>
                    <br></br>
                    <button type="submit" className="btn btn-primary" onClick={this.handleGetStatment}>Get Statement</button>
                </section>
                <br></br>
                <section >
                {
                    this.state.viewStatement ? (
                        <div>
                            <table >
                                <thead >
                                    <tr>
                                        <th scope="col">Transaction Date</th>
                                        <th scope="col">Amount</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Type</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.transactionStatement.map((each, index) => (
                                            <tr className="datarow" scope="row">
                                                <td> {each.transactionDate.slice(0,10)}</td>
                                                <td> {each.transactionAmount}</td>
                                                <td> {each.description}</td>
                                                <td> {each.transactionType}</td>

                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>

                    ) : (
                            <div></div>
                        )
                }

                </section> 
            </div>
        )
    }
}

export default Transaction
