import React from 'react';
import './SampleTextBox.css';
import Controller from './Controller';
import snippet from '../data/data';



class SampleTextBox extends React.Component {
  
  
  constructor(props)
  {
    super(props);
    this.state = {value: 'java'};
    this.loadData(this.state.value);

    
  }

  loadData = (val) => {
    switch (val)
    {
      case 'java':
        this.sampleText = snippet.java;
      break;
      case 'C':
        this.sampleText = snippet.c;
      break;
      case 'CPP':
        this.sampleText = snippet.cpp;
      break;
      case 'python':
        this.sampleText = snippet.python;
      break;
      default:
        this.sampleText = snippet.java;
    }
    
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


  handleChange = (event) => {
    this.loadData(event.target.value)
    this.setState({value: event.target.value});
  }
  


  render ()
  {
    return (
      <div id = 'sampParent' >
        <span id ="select-container">
        <select value={this.state.value} onChange={this.handleChange} className='select-box'>
          <option value ="java">Java</option>
          <option value  ="C">C</option>
          <option value="CPP">C++</option>
          <option value="python">Python</option>
        </select>
        </span>

      <div id = 'sampBox' >
        {this.arr}
      </div>
      <Controller sampleText = {this.text}  lang = {this.state.value} / > 
      </div>
    );
  }
}


export default SampleTextBox;