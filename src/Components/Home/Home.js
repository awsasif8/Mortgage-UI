import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-web-tabs';
import "react-tabs/style/react-tabs.css";   



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
                        <Tab tabFor="vertical-tab-one">My Stock History</Tab>
                        <Tab tabFor="vertical-tab-two">Trending Stocks</Tab>
                        <Tab tabFor="vertical-tab-three">My Stock History</Tab>
                        <Tab tabFor="vertical-tab-four">Trending Stocks</Tab>
                    </TabList>

                    <TabPanel tabId="vertical-tab-one">
                        Stock History
                    </TabPanel>
                    <TabPanel tabId="vertical-tab-two">
                        
                    </TabPanel>
                    <TabPanel tabId="vertical-tab-three">
                        
                    </TabPanel>
                    <TabPanel tabId="vertical-tab-four">
                        
                    </TabPanel>
                </Tabs>
            </div>
        )
    }
}

export default Home
