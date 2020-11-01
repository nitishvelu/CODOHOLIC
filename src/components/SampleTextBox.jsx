import React from 'react';
import './SampleTextBox.css'
var style = {
  text : {
    // padding : 0.05,
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
  compute
 
  handleKey = event =>
  {
    //this.addHighlight(this.arr[this.state.sampleIndex])
    if(event.key === this.props.sampleText[this.state.sampleIndex])
    {
          this.arr = this.arr.map((ele, index) => {
            return (<span style={style.text} key={index} className={`sampleText ${index<(this.state.sampleIndex + 1)? 'typedSpan': ''}`}>{ele}</span>)
          });
      this.setState( (prevState) => {
        return {
          sampleIndex : prevState.sampleIndex + 1
        }
      });
    }
    // console.log(this.state.sampleIndex)

  }
 
  

  render ()
  {
    
    


    return (
      <div style={style.block} onKeyPress={this.handleKey} tabIndex = '0'>
      {this.arr}
      </div>
    )
  }
}
export default SampleTextBox;