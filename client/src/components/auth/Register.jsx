import React,{Fragment,useState} from 'react';
//import axios from 'axios';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const Register = () => {

    const [formData, setFormData]= useState({
        name: '',
        email:'',
        password:'',
        password2:''
    });

    const{name,email,password,password2}=formData;

    const onChange = e =>setFormData({...formData,[e.target.name]: e.target.value});

    const onSubmit =async e =>{
        e.preventDefault();
        if(password !== password2){
            console.log('passwords do not match');

       }else{

            console.log('success');
          /*   const newUser ={
                name,
                email,
                password
            }
            try{
                const config={
                    headers: {
                        'content-Type': 'application/json'
                    }
                }
                const body =JSON.stringify(newUser);
                const res =await axios.post('/users',body,config);
                console.log(res.data);

            }catch(err){
                    console.error(err.response.data);
            }
            */
        }
    }
    return (
        <Fragment>
            <h1>Sign Up</h1>
      <p >Create Your Account</p>
      <form  onSubmit={e =>onSubmit(e)}>
        <div >
          <input type="text" placeholder="Name" name="name" value={name}onChange={e=> onChange(e)}required />
        </div>
        <div >
          <input type="email" placeholder="Email Address" name="email"value={email}onChange={e=> onChange(e)} required />
          <small
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small
          >
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
        <div >
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={e=> onChange(e)}
            minLength="6"
          />
        </div>
        <input type="submit"  value="Register" />
      </form>
      <p >
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </Fragment>
    )
}
export default connect()(Register);