import React from 'react';

var navStyle ={
  margin: 10,
  float: 'right'
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
    return (
      <a href="https://a.wattpad.com/cover/110852044-352-k23308.jpg" style = {navStyle}>
       Login/Sign up
      </a>
    )
  }
}
export default NavBar;