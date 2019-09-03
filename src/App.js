import React , {Component} from 'react';
import './App.css';
import {withTranslation} from 'react-i18next';
import { withRouter, HashRouter, Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Logout from './Components/Logout/Logout';
import MasterForm from './Components/MasterForm/MasterForm';


class App extends Component {
  constructor(props) {
    super(props);
    // const { i18n } = this.props;
    // i18n.changeLanguage('en');
    this.state={
      isLoggedIn: false,
      data:{}
    }
  }
  redirect=(page, history)=> {
    history.push(page);
  }

  validateUser = (isLoggedIn)=> {
    this.setState({isLoggedIn});
  }
  getuserData =(data,props)=>{
    this.setState({data});
    console.log(data);
  }
  logout(){
    this.props.validateUser(false);
    localStorage.removeItem('customerId')
  }

  render(){
    return (
      <div className="App">  
        <HashRouter>
         <Header isLoggedIn={this.state.isLoggedIn} redirect={this.redirect}/>
          <Switch>
             <Route path='/register' exact component={MasterForm} /> 
             <Route path='/home' exact component={Home} /> 
             <Route path='/login' component={()=><Login validateUser={this.validateUser}/>}></Route>
             <Route path='/logout' component={()=><Logout logout={this.logout}/>}></Route>
          </Switch>    
        </HashRouter>
      </div>
    );

  }
  
}


export default App;
