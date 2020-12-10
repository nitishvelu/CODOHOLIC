import React ,{useEffect}from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Alert from './components/auth/Alert'
import Profile from './components/Profile';
import CreateProfile from './components/CreateProfile';
import {Mobile} from './components/Mobile';
import Leaderboard from './components/Leaderboard';
import About from './components/About';

//redux
import {Provider} from 'react-redux';
import store from './store'
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';
//private route
import PrivateRoute from './components/routing/PrivateRoute';

import { isMobile } from 'react-device-detect';
import Controller from './components/Controller';


if (localStorage.token){
  setAuthToken(localStorage.token);
}




function App(props) {
  useEffect(()=>{
    store.dispatch(loadUser());
  },[]);//basically a componentDidMount the '[]' parameter to ensure that it runs only once
  if (isMobile) {
    return <Mobile/>
}
return (
    <div>

    <Provider store= {store}>
    <Router>
      <Header />
      <div className='containevcr'>
    <Switch>
        <Route  path='/login' component={Login}/>
        <Route  path='/register' component={Register}/>
        <PrivateRoute  path='/profile' component={Profile}/>
        <PrivateRoute  path='/create-profile' component={CreateProfile}/>
        <Route  path='/leaderboard' component={Leaderboard}/>
        <Route  path='/about' component={About}/>


        <Route path='/' component={Controller}/>
    </Switch>
      </div>
    
      <Footer />

      </Router>
      <Alert />
      </Provider>
      </div>

  );
}

export default App;