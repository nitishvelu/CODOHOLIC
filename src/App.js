import React from 'react';
import './App.css';
import SampleTextBox from './components/SampleTextBox';
import Header from './components/Header';
import KeyboardGuide from './components/KeyboardGuide';

function App(props) {
  return (
    <div className="App" >
      {/* <!-- components go here--> */}
      <Header />
      <SampleTextBox />
      <KeyboardGuide />
    </div>
  );
}

export default App;
