
import React from 'react';
import axios from 'axios';
import Results from './Results';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createProfile} from '../actions/profile'
import FingerGuide from './FingerGuide';
import {getCurrentProfile} from '../actions/profile';
import snippet from '../data/data';
import './SampleTextBox.css';
import reload from '../images/reload.svg';
import on from "../images/sound-on.svg";
import off from "../images/sound-off.svg";




export var userResults = {
  wpm: 0,
  accuracy: 0,
  errors: 0,
  elapsedTime : 0,
  words: 0,
  characters: 0,
  lang: ''
}




class Controller extends React.Component {
    constructor(props)
    {
      super(props);
      this.state = {
        sampleIndex : 0,
        data : false,
        ready: false,
        selectedLang: 'java', 
        allowAudio: true,
      };
      this.startTime = 0;

      

      
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
        case 'english':
          this.sampleText = snippet.english;
        break;
        default:
          this.sampleText = snippet.java;
      }
      
      this.text = this.sampleText.replaceAll(/(\r\n|\n|\r)/gm,"⏎");
      this.text = this.text.replaceAll(/\s\s\s\s/gm,"↹");
      this.arr1 = this.text.split('');
      this.arr = this.arr1.map((ele, index) => {
          if(this.arr1[index] === '•')
          {
            return (<span key={index} className='sampleText endOfLine'>.</span>)
          }
          if (this.text[index] === '⏎' )
          {
            return (<span key={index} className='sampleText endOfLine'>⏎</span>)
          }
          return (<span key={index} className='sampleText'>{ele}</span>)
          });
        
    }


    handleChange = (event) => {

      axios.post('/lang',{lang: event.target.value})
      .then(response => console.log(response.data))
      .catch(err =>  console.log(err));
      this.loadData(event.target.value)
      this.setState({selectedLang: event.target.value});


    }

    componentDidMount()
    {
      //console.log('entered mount function')
      //document.getElementById('results').style.display = 'none';

      //cookies
      axios.get('/lang').then( res => {
        if(res!= null)
        {
          this.loadData(res.data);
          this.setState({selectedLang: res.data});
        }
        else {
          this.loadData(this.state.selectedLang);
        }
      }).catch(err => {
        console.log(err);
        this.loadData(this.state.selectedLang);
      });


      this.setState({
        data: false,
        sampleIndex: 0,
      })
     

      this.div = document.getElementById('controller');
      //adding event listeners
      this.div.addEventListener('blur',this.controllerHandleBlur);
      this.div.addEventListener('click',this.controllerClickHandler);
      this.div.addEventListener('keypress',this.handleKey);
      this.div.addEventListener('keydown',this.handleKeydown);


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


    handleKeydown = event => {
     ///event.preventDeafault();
     

        if (event.keyCode === 9) {
          event.preventDefault();
          this.handleKey(event);
        }

      }



      writeData = () => {
        this.props.createProfile(userResults,this.props.history,true);

    }
        
  


    handleKey = event =>
    {
      // handle key event on the controller component
      event.preventDefault();
      
        //auto-scroller experimental
        if (event.keyCode === 13 && this.text.charCodeAt(this.state.sampleIndex) === 9166)
        {
          let div = document.getElementById('sampBox')

          var hasVerticalScrollbar = div.scrollHeight > div.clientHeight;

          let ele = document.getElementById('sampBox').children[this.state.sampleIndex];
          if(hasVerticalScrollbar)
          {
            ele.parentNode.scrollTop = ele.offsetTop - ele.parentNode.offsetTop;
          }
        }


        

      
      
      
        if( (String.fromCharCode(event.keyCode) === this.text[this.state.sampleIndex]) 
              || (event.keyCode === 13 && this.text.charCodeAt(this.state.sampleIndex) === 9166)
              || (event.keyCode === 9 && this.text.charCodeAt(this.state.sampleIndex) === 8633) )
      {
        if(this.state.allowAudio)
        {
          let snd = new Audio("data:audio/wav;base64,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");
            snd.play();
        }

        if((this.state.sampleIndex === this.text.length - 1))
        {
          // end of sample computing time
          this.ready = false;
          this.computeSampleSpeed();

          //removing event listeners
          this.div.removeEventListener('blur',this.controllerHandleBlur);
          this.div.removeEventListener('click',this.controllerClickHandler);
          this.div.removeEventListener('keydown',this.handleKeydown);

          this.div.removeEventListener('keypress',this.handleKey);

          document.getElementById('sampBox').style.display = 'none';
          

          this.setState({
            data: true,
            sampleIndex: 0,
            ready: false,
          })

          return;
        }
        
        if(this.state.sampleIndex === 0)
          this.startTimer();// starting timer
  
        this.setState({
          sampleIndex : this.state.sampleIndex + 1,
        });
  
        this.shiftCursor(this.state.sampleIndex);
        
        
      }
      else{
        //wrong key entered
        if (this.state.allowAudio)
        {
        let snd = new Audio("data:audio/wav;base64,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");
        snd.play();
        }

        let pos = this.state.sampleIndex;
        document.getElementById('sampBox').children[pos].classList.add('error');
        setTimeout( () => {
          document.getElementById('sampBox').children[pos].classList.remove('error');
          document.getElementById('sampBox').children[pos].classList.add('typed-error');
        }, 100);

        userResults.errors++;
      }
    }
  
    controllerClickHandler = () => {
      // handles click of controller
      // activates text
      this.setState({
        ready: true,
      })
      document.getElementById('sampBox').children[0].classList.add('activeSpan');
      document.getElementById('controller').children[0].style.display = 'none';
    }
  
     controllerHandleBlur = () => {
      // handles loosing focus
      let i;
      for(i = 0;i<this.state.sampleIndex;i++)
      {
        document.getElementById('sampBox').children[i].classList.remove('typedSpan');
        document.getElementById('sampBox').children[i].classList.remove('typed-error');

      }
      document.getElementById('sampBox').children[i].classList.remove('activeSpan');
      document.getElementById('sampBox').children[i].classList.remove('typed-error');
  
      this.setState({
        sampleIndex : 0,
        ready: false,
      });

      document.getElementById('controller').children[0].style.display = 'block';
      userResults.errors = 0;

     }
  
     startTimer = () => {this.startTime = new Date()} //starts timer
  
     computeSampleSpeed = () => {
      
      userResults.elapsedTime = (new Date() - this.startTime) / 1000;
      userResults.words = (this.text.length - 1)/5;
      userResults.wpm = Math.round(userResults.words/(userResults.elapsedTime/60));
      userResults.accuracy = Math.round(this.text.length / (this.text.length + userResults.errors)*100);
      userResults.characters = this.text.length;
      userResults.lang = this.state.selectedLang;

      // put true to make it work log in to see
      // this.props.profile.profile not working
      if(this.props.isAuthenticated){
        this.writeData();
        }
   
     }
  
     render()
      {
        if(this.state.data){
          return (<Results userResults = {userResults} data = {this.state.data}/> )
        }
        
        
        return (
          <div id = 'sampParent' >
        <span id ="select-container">
            <img width = "22px" id="sound" alt="on" src={on} onClick={ (e) => {
              this.state.allowAudio ? e.target.setAttribute("src",off) : e.target.setAttribute("src",on) 
              this.setState( prevState => {
                return ({
                  allowAudio: !prevState.allowAudio,
                })
              })
            }}/>
            <img width = "22px" id="reload" alt="reload" src={reload} onClick={() => window.location.reload()}/>
        <select value={this.state.selectedLang} onChange={this.handleChange} className='select-box'>
          <option value ="java">Java</option>
          <option value  ="C">C</option>
          <option value="CPP">C++</option>
          <option value="python">Python</option>
          <optgroup label="Non-Programming : Practise mode">
          <option value="english">English</option>
          </optgroup>
        </select>
        </span>

      <div id = 'sampBox' >
        {this.arr}
      </div>
      <div key = 'res' id='result'>
        <div id = 'controller' tabIndex = '0' style = { {
          backgroundColor: '#273e59',
          fontFamily:  "JetBrains Mono",
          fontSize: 22,
          color: 'white',
        } } >
          
          <center style={{
                      padding: 10, backgroundColor: '#1b1b1b', cursor : 'pointer'

          }}>Click to start</center>
        </div>
          <FingerGuide letter={this.state.ready ? this.text[this.state.sampleIndex]: '⎈' } />
        </div>
      </div>
          
        );
      }
  }


  Controller.propTypes = {
    createProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool

};
const mapStateToProps= state =>({
  auth: state.auth,
  profile: state.profile,
  isAuthenticated : state.auth.isAuthenticated,
});
  
  export default connect(mapStateToProps,{createProfile,getCurrentProfile})(withRouter(Controller));//for history object








