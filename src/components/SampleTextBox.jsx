import React from 'react';
import './SampleTextBox.css';
import {Controller} from './Controller';

class SampleTextBox extends React.Component {
  constructor(props)
  {
    //useless constructor will add stuff later
    super(props);
    this.arr = this.props.sampleText.split('');
    this.arr = this.arr.map((ele, index) => {
      return (<span key={index} className='sampleText'>{ele}</span>)
      });
  }
  


  render ()
  {
    return (
      <div id = 'sampParent' >
      <div id = 'sampBox' >
        {this.arr}
      </div>
      <Controller sampleText = {this.props.sampleText} / > 
      </div>
    );
  }
}


export default SampleTextBox;