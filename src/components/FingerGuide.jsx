import React from 'react'
import './FingerGuide.css';

//const styles = {
//    rectangle: {
//        display: 'inline-block',
//        width: '50px',
 //       height: '50px',
 //       backgroundColor: "red"
//    }
//}

class FingerGuide extends React.Component {
  //constructor(props)
  //{
    //useless constructor will add stuff later
  //  super(props);
  //  this.arr = this.props.sampleText.split('');
  //  this.arr = this.arr.map((ele, index) => {
   //   return (<span key={index} className='sampleText'>{ele}</span>)
   //   });
  //}
  


  render ()
  {
    return (
        <div className= "Fguide" >
            <div className="l1"></div>
            <div className="l2"></div>
            <div className="l3"></div>
            <div className="l4"></div>
            <div className="lt"></div>
            <div className="lp"></div>
            <div className="r1"></div>
            <div className="r2"></div>
            <div className="r3"></div>
            <div className="r4"></div>
            <div className="rt"></div>
            <div className="rp"></div>
        </div>
    );
  }
}


export default FingerGuide;