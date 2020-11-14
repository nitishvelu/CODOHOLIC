import React from 'react';
import './App.css';
import Header from './components/Header';
import SampleTextBox from './components/SampleTextBox';
import KeyboardGuide from './components/KeyboardGuide';
import Footer from './components/Footer';

var sampleText;

function generateSampleText()
{
  // this function has to generate sample text for now just returning text
  const arr = ['Touch typing is the ability to use muscle memory to find keys fast, without using the sense of sight, and with all the available fingers, just like piano players do. It significantly improves typing speed and eliminates errors. Touch typing simply makes you more productive and it is a skill worth learning.','However, many people engage in the bad habit of ‘hunt-and-peck’ typing, even those seasoned professionals with years and decades of computer experience. It  is easy to understand, though, as touch typing requires dedicated practice to  learn it well.','That is why we created this website, a free online typing tutorial, to give you the most advanced learning experience and let you develop your typing skills faster.','1234567890'];
  
  let index = Math.random()<= 0.33 ? 0 : (Math.random()< 0.66 ? 1 : 2);
  return arr[index];
}

sampleText = generateSampleText();

var startTime;


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
    // shifts the cursor when text is typed
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
    // handle key event on the controller component
    if(this.state.sampleIndex === this.props.sampleText.length - 1)
      {
        // end of sample computing time
        this.computeSampleSpeed();
      }
    
    if(event.key === this.props.sampleText[this.state.sampleIndex])
    {
      if(this.state.sampleIndex === 0)
        this.startTimer();// starting timer

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

  controllerClickHandler = event => {
    // handles click of controller
    // activates text
    document.getElementById('sampBox').children[0].classList.add('activeSpan');
    document.getElementById('controller').children[0].innerHTML = '';
  }

   controllerHandleBlur = event => {
    // handles loosing focus
    let i;
    for(i = 0;i<this.state.sampleIndex;i++)
      document.getElementById('sampBox').children[i].classList.remove('typedSpan');
    document.getElementById('sampBox').children[i].classList.remove('activeSpan');

    this.setState({
      sampleIndex : 0,
    });
    document.getElementById('controller').children[0].innerHTML = 'Click to start';
   }

   startTimer = () => {startTime = new Date()} //starts timer

   computeSampleSpeed = () => {
    const elapsedTime = (new Date() - startTime) / 1000;
    const words = (this.props.sampleText.length - 1)/5;
    const speed = Math.round(words/(elapsedTime/60));
    
    console.log(`elapsed time - ${elapsedTime}\nno of words = ${words} \nspeed - ${speed}WPM`);

   }

   render()
    {
      return (
      <div id = 'controller' onBlur = {this.controllerHandleBlur}onKeyPress={this.handleKey} tabIndex = '0' onClick={this.controllerClickHandler} style = {{ fontSize : 22, backgroundColor: '#282828' }}>
        <center>Click to start</center>
      </div>
      );
    }
}



function App(props) {
  return (
    <div>
      <Header />

      <SampleTextBox sampleText={sampleText}/>

      <KeyboardGuide />

      <Footer />

    </div>
  );
}

export {
  App,
  Controller
};
