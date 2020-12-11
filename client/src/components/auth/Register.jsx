import React,{useState} from 'react';
//import axios from 'axios';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';
import PropTypes from 'prop-types'

const Register = ({setAlert,register,isAuthenticated}) => {

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
            setAlert('passwords do not match','danger');

       }else{
            register({name,email,password});
            //console.log('success');
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
    };
    if(isAuthenticated){
      return <Redirect to='/'/>;
    }

    return (
        <div style={{ width: 1000, margin: '0 auto',marginTop: 160, display: "flex", flexDirection:'column', justifyContent:'center', alignItems: 'center'}}>
            <h1>Sign Up</h1>
      <form  onSubmit={e =>onSubmit(e)}>
        <div >
          <input type="text" placeholder="Name" name="name" value={name}onChange={e=> onChange(e)} />
        </div>
        <div >
          <input type="email" placeholder="Email Address" name="email"value={email}onChange={e=> onChange(e)}  />
          {/* <div
            >This site uses Gravatar so if you want a profile image, use a
            Gravatar email </div> */}
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
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        <button type="submit" >Register</button>
        <span style={{paddingLeft: 10}}>
        Already have an account? <Link to="/login">Sign In</Link>
      </span>
        </div>
      </form>

    </div>
    );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}
const mapStateToProps = state =>({
  isAuthenticated: state.auth.isAuthenticated
})
export default connect(mapStateToProps,{setAlert,register})(Register);