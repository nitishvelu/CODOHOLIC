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
  return 'This is the sample text that has to be typed. Take typing speed test, practice your touch typing skills, learn to type faster and with fewer errors with this free online typing tutor.Touch typing is the ability to use muscle memory to find keys fast, without using the sense of sight, and with all the available fingers, just like piano players do. It significantly improves typing speed and eliminates errors. Touch typing simply makes you more productive and it is a skill worth learning. However, many people engage in the bad habit of ‘hunt-and-peck’ typing, even those seasoned professionals with years and decades of computer experience. It  is easy to understand, though, as touch typing requires dedicated practice to  learn it well.'

}


sampleText = generateSampleText();


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

export default App;
