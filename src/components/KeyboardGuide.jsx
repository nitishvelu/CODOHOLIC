import React from 'react';
import keyboard from '../images/QWERTY_keyboard_diagram.svg'

const style = {
  width : '85%',
}
const divStyle = {
  display: 'flex',
  placeContent: 'center',
}


class KeyBoardGuide extends React.Component {
  // constructor()
  // {
  //   //useless constructor will add stuff later
  //   super();
  // }
  

  render ()
  {
    return (
      <div style={divStyle}>
          <img src ={keyboard} alt='keyboard' style={style}/>
      </div>
    )
  }
}
export default KeyBoardGuide;

