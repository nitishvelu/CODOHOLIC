import React from 'react';
import './SampleTextBox.css';
import {Controller} from '../App';

var style = {
  text : {
    padding : 1,
    fontSize : 28
    },
  block : {
    backgroundColor: '#000',
    padding : 35,
    fontFamily : 'monospace',
    border: 'solid 11px #ffff01ed',
    color: 'white',
  }
}


class SampleTextBox extends React.Component {
  constructor(props)
  {
    //useless constructor will add stuff later
    super(props);
    this.state = {
      sampleIndex : 0,
    };
    this.arr = this.props.sampleText.split('');
    this.arr = this.arr.map((ele, index) => {
      return (<span style={style.text} key={index} className='sampleText'>{ele}</span>)
      });
  }

  render ()
  {
    return (
      <div style = {style.block} id = 'sampBox' >
        {this.arr}
        <Controller sampleText = {this.props.sampleText} / > 
      </div>
    );
  }
}


export default SampleTextBox;