import React,{Fragment,useState} from 'react';
import {Link} from 'react-router-dom';
const Login = () => {

    const [formData, setFormData]= useState({       
        email:'',
        password:''
    });

    const{email,password}=formData;

    const onChange = e =>setFormData({...formData,[e.target.name]: e.target.value});

    const onSubmit =async e =>{
        e.preventDefault();
        console.log('success');

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


export default Login;