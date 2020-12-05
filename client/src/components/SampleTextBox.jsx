import React from 'react';
import './SampleTextBox.css';
import Controller from './Controller';
// import javasnippet from '../data/data';



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
        this.sampleText = `1234567890asdfghjkl;`;
      break;
      case 'C':
        this.sampleText = `C language samples are yet to be converted by mehul`;
      break;
      case 'CPP':
        this.sampleText = `C++ language samples are yet to be converted by mehul`;
      break;
      case 'python':
        this.sampleText = `python and html are programming languages`;
      break;
      default:
        this.sampleText = `1234567890`;
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