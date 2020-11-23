import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


import SampleTextBox from './components/SampleTextBox';

var sampleText;

function generateSampleText()
{
  // this function has to generate sample text for now just returning text
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
  return arr[3];
}



sampleText = generateSampleText();




function App(props) {
  return (
    <div>
      <Header />

      <SampleTextBox sampleText={sampleText}/>

      <Footer />

    </div>
  );
}

export default App;
