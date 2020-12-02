/*import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout } from '../actions/auth'
var navStyle ={
  margin: 10,
  float: 'right',
  color:"white",
  textDecoration: 'none'
}
const Navbar =({auth:{isAuthenticated,loading},logout})=>{

  const authLinks=(<Fragment>
    <a onClick={logout}href='#!'>
     Logout
    </a>
   </Fragment>


  );
  const guestLinks=(<Fragment>
    <Link to="/login" style = {navStyle}>
     Login
    </Link>
    <Link to="/register" style = {navStyle}>
    Register
   </Link>
   </Fragment>

  );

 
    return (
        {!loading &&(<Fragment>{isAuthenticated? authLinks: guestLinks}<Fragment>)}
  
    );
  };

Navbar.propTypes={
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps= state =>({
  auth:state.auth
});

export default connect(mapStateToProps,{logout})(Navbar);
*/
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to="/leaderboard">leaderboard</Link>
      </li>
      <li>
        <Link to="/profile">profile</Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          Logout
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav >
      <h1>
        <Link to="/">
          CODOHOLIC
        </Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
