import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-web-tabs';
import "react-tabs/style/react-tabs.css";   
import Transaction from '../Transaction/Transaction';
import Mortgage from '../Mortgage/Mortgage';



export class Home extends Component {
    constructor(props){
        super(props)
        this.clickHome= this.clickHome.bind(this)
    }
    clickHome(){
        this.props.history.push('/login')
    }
    render() {
        return (
            <div>
                <Tabs defaultTab="vertical-tab-one" vertical >
                    <TabList>
                        <Tab tabFor="vertical-tab-one">Transaction Account</Tab>
                        <Tab tabFor="vertical-tab-two">Mortgage Account</Tab>
                    </TabList>

                    <TabPanel tabId="vertical-tab-one">
                        <Transaction></Transaction>
                    </TabPanel>
                    <TabPanel tabId="vertical-tab-two">
                        <Mortgage></Mortgage>
                    </TabPanel>
                  
                    </Tabs>
            </div>
        )
    }
}

export default Home
