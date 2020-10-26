import React from 'react';
import './App.css';
import Header from './components/Header';
import SampleTextBox from './components/SampleTextBox';
import KeyboardGuide from './components/KeyboardGuide';

function App(props) {
  return (
    <div>
      <Header />
      <SampleTextBox />
      <KeyboardGuide />
    </div>
  );
}

export default App;
