import React from 'react';
import './SampleTextBox.css';
import {Controller} from './Controller';

class SampleTextBox extends React.Component {
  
  
  constructor(props)
  {
    //useless constructor will add stuff later
    super(props);

    const arr = [`Touch typing is the ability to use muscle memory to find keys fast, without using the sense of sight, and with all the available fingers, just like piano players do.`,`However, many people engage in the bad habit of hunt-and-peck typing, even those seasoned professionals with years and decades of computer experience..`,`That is why we created this website, a free online typing tutorial, to give you the most advanced learning experience and let you develop your typing skills faster.`,`body {
      background-color: lightblue;
    }
    
    h1 {
      color: white;
      text-align: center;
    }
    
    p {
      font-family: verdana;
      font-size: 20px;
    }
    Just ChecKing if \\ is working`,`122345`];
    //let index = Math.random()<= 0.33 ? 0 : (Math.random()< 0.66 ? 1 : 2);
    this.sampleText = arr[3];
    
    this.text = this.sampleText.replaceAll(/(\r\n|\n|\r)/gm,"⏎");
    this.text = this.text.replaceAll(/\s\s\s\s/gm,"↹");
    this.arr1 = this.text.split('');

    // this.arr = this.arr.map((ele, index) => {
    //   return (<span key={index} className='sampleText'>{ele}</span>)
    //   });

    
    
   


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