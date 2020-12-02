import React,{Fragment,useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect } from 'react-redux';
import PropTypes from 'prop-types';
import {login } from '../../actions/auth';
const Login = ({login,isAuthenticated}) => {

    const [formData, setFormData]= useState({       
        email:'',
        password:''
    });

    const{email,password}=formData;

    const onChange = e =>setFormData({...formData,[e.target.name]: e.target.value});

    const onSubmit =async e =>{
        e.preventDefault();
        login(email,password);

       };
    //Redirect if logged in
    if(isAuthenticated){
      return<Redirect to='/'/>
    }
    return (
        <Fragment>
            <h1>Sign In</h1>
      <p >Sign In To Your Account</p>
      <form  onSubmit={e =>onSubmit(e)}>
       
        <div >
          <input type="email" placeholder="Email Address" name="email"value={email}onChange={e=> onChange(e)} required />
         
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={e=> onChange(e)}
          />
        </div>
        
        <input type="submit"  value="Login" />
      </form>
      <p >
        Dont have an account? <Link to="/register">Sign Up</Link>
      </p>
    </Fragment>
    )
}
Login.propTypes={
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}
const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps,{login})(Login);