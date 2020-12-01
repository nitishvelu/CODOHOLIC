import React,{Fragment} from 'react';

const Register = () => {
    return (
        <Fragment>
            <h1>Sign Up</h1>
      <p >Create Your Account</p>
      <form  action="create-profile.html">
        <div >
          <input type="text" placeholder="Name" name="name" required />
        </div>
        <div >
          <input type="email" placeholder="Email Address" name="email" />
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
          />
        </div>
        <div >
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
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