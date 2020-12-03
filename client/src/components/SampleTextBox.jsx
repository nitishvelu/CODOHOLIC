import React from 'react';
import './SampleTextBox.css';
import {Controller} from './Controller';
import javasnippet from '../data/data';

class SampleTextBox extends React.Component {
  
  
  constructor(props)
  {
    //useless constructor will add stuff later
    super(props);

    // const data = require('../data/languages.json');
    // console.log(data);
    this.sampleText = javasnippet;
    
    this.text = this.sampleText.replaceAll(/(\r\n|\n|\r)/gm,"⏎");
    this.text = this.text.replaceAll(/\s\s\s\s/gm,"↹");
    this.arr1 = this.text.split('');
    this.arr = this.arr1.map((ele, index) => {
        if (this.text[index] === '⏎' )
        {
        
          return (<span key={index} className='sampleText endOfLine'>⏎</span>)
        }
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
      <Controller sampleText = {this.text} / > 
      </div>
    );
  }
}


export default SampleTextBox;