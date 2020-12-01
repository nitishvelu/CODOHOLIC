import React,{Fragment,useState} from 'react';

const Register = () => {

    const [formData, setFormData]= useState({
        name: '',
        email:'',
        password:'',
        password2:''
    });

    const{name,email,password,password2}=formData;

    const onChange = e =>setFormData({...formData,[e.target.name]: e.target.value});

    const onSubmit = e =>{
        e.preventDefault();
        if(password !== password2){
            console.log('passwords do not match');

        }else{
            console.log(formData);
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
        Already have an account? <a href="login.html">Sign In</a>
      </p>
    </Fragment>
    )
}
export default Register;