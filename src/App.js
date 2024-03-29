import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/hompage.component';
import ShopPage from './pages/shop/shoppage.components';
import Header from './components/header/header.component';
import  SignInAndSignUpPage from './pages/sign-in-sing-out/sign-in-sign-out.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser:null
    }
  }
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
      console.log(user)
    })
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
    <Switch>
  <Route exact path='/' component={HomePage}/>
  <Route  path='/shop' component={ShopPage}/>
  <Route  path='/signin' component={SignInAndSignUpPage}/>
    </Switch>
      </div>
    );
  }

}

export default App;
