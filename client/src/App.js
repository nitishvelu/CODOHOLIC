import React ,{Fragment,useEffect}from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Alert from './components/auth/Alert'
import SampleTextBox from './components/SampleTextBox';
//redux
import {Provider} from 'react-redux';
import store from './store'
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';


if (localStorage.token){
  setAuthToken(localStorage.token);
}




function App(props) {
  useEffect(()=>{
    store.dispatch(loadUser());
  },[]);//basically a componentDidMount the '[]' parameter to ensure that it runs only once
  return (
    <Provider store= {store}>
    <Router>
    <Fragment>
      <Navbar />
      <section className='container'>
      <Alert />
    <Switch>
        <Route  path='/login' component={Login}/>
        <Route  path='/register' component={Register}/>
        <Route path='/' component={SampleTextBox}/>
    </Switch>
    </section>
    
      <Footer />

      </Fragment>
      </Router>
      </Provider>
  );
}

export default App;
