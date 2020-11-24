import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';

var navStyle ={
  margin: 10,
  float: 'right',
  color:"white",
  textDecoration: 'none'
}
class NavBar extends React.Component {
  // constructor()
  // {
  //   //useless constructor will add stuff later
  //   super();
  // }

  //style
  
  render ()
  {
    return (<Fragment>
      <Link to="/login" style = {navStyle}>
       Login
      </Link>
      <Link to="/register" style = {navStyle}>
      Register
     </Link>
     </Fragment>
    )
  }
}
export default NavBar;