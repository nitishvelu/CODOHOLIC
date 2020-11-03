import React from 'react';
import './SampleTextBox.css';


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


class Controller extends React.Component {
  constructor(props)
  {
    //useless constructor will add stuff later
    super(props);
    this.state = {
      sampleIndex : 0,
    };
    
  }

  shiftCursor = pos =>
  {
      let division = document.getElementById('sampBox');
      division.children[pos].classList.add('activeSpan');
      if (this.state.sampleIndex  !== 0)
      {
        division.children[pos - 1].classList.remove('activeSpan');
        division.children[pos - 1].classList.add('typedSpan');
      }

  }

  handleKey = event =>
  {
    console.log(`type - ${this.props.sampleText[this.state.sampleIndex + 1]}`);
    if(event.key === this.props.sampleText[this.state.sampleIndex])
    {
      
      this.setState({
        sampleIndex : this.state.sampleIndex + 1,
      });
      if (this.state.sampleIndex === 0)
      {
        document.getElementById('sampBox').children[0].classList.remove('activeSpan');
        document.getElementById('sampBox').children[0].classList.add('typedSpan');
      }

      this.shiftCursor(this.state.sampleIndex + 1);
      
    }
  }

  clickHandler = event => {
    document.getElementById('sampBox').children[0].classList.add('activeSpan');
    event.target.style.display = 'none';
  }


   render()
    {
      return (
      <div onKeyPress={this.handleKey} tabIndex = '0' onClick={this.clickHandler} style = {{ fontSize : 18, backgroundColor: '#282828' }}>
        <center>click to activate</center>
      </div>
      );
    }
}


export default SampleTextBox;