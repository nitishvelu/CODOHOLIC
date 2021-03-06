/* eslint-disable react-hooks/exhaustive-deps */
import React,{Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../actions/profile';
import Spinner from './Spinner';
import {Line} from 'react-chartjs-2';
import gif from '../images/kermit.gif';
import java from '../images/java.svg';
import python from '../images/python.svg';
import cpp from '../images/cpp.svg';
import c from '../images/c.svg';
import eng from '../images/eng.svg';
import noob from '../images/noob.svg';

export const computeAverage  = arr => {
    console.log(arr);
    let sum = 0,i;
    for(i = 0; i<arr.length;i++)
        sum += arr[i];
    return (Math.round((sum/arr.length)));
}


const printLang = (ele) => {
  let arr = [],arr1 = [];
  let i;
  if(ele.java.length > 0)
     arr.push(java);
  if(ele.CPP.length > 0)
      arr.push(cpp);
  if(ele.python.length > 0)
      arr.push(python);
  if(ele.C.length > 0)
      arr.push(c);
  if(ele.english.length > 0)
      arr.push(eng);
  // return (
  //     <span>{JSON.stringify(arr)}</span>
  // )
  for(i = 0;i<arr.length;i++)
  arr1[i] = (<img src = {arr[i]} key={i} width={30} style={{padding: '1px', margin: '0'}} alt="lang"/>)
  if(arr1.length === 0)
  return (<a href="#leader-sheet" data-toggle="tooltip" title="NewBie!"><img src = {noob} width={30} style={{padding: '1px', margin: '0'}} alt="lang"/></a>)
  return arr1;
      
}

var plotter = (arr,str) => {
    let s = computeAverage(arr);
    s += str==="Accuracy" ? "%" : "WPM";
    str += " Average: " + s ;
    let i = 1;
    const label = arr.map(ele => {
        return i++;
    }) 

    return (
        <div  style={{padding: 20, backgroundColor: "#121212", borderColor: "white", borderWidth: 1, borderStyle: "solid", margin: 25, }} >
        <Line
        data={{
          labels: label,
          datasets: [
            {
              fill: false,
              label: str,
              data: arr,
              lineTension: 0.1,
              borderColor: '#fff',
              pointBorderColor: '#fff',
              pointBackgroundColor: '#00f',
              pointBorderWidth: 2,
              borderWidth: 2,
            },
          ],
        }}
        height={500}
        width={700}
        options={{
          scales: {
            xAxes: [{
                ticks: { display: false },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }],
            yAxes: [{
                ticks: { display: true },
                gridLines: {
                    display: false,
                    drawBorder: false
                }
            }]
        },
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontSize: 20,
              fontWeight: "bold",
              fontFamily : "JetBrains mono",
              fontColor: "#fff"
            },
          },
        }} />

      </div>
    )
}


const Profile = ({getCurrentProfile,auth:{user},profile:{profile,loading}}) => {
    useEffect(()=>{
        getCurrentProfile();
    },[]);
    
    return ( loading && profile === null ? <Spinner/>: 
    <div style={{width: 1000, margin: '0 auto'}}>
        

         {profile !== null? 
            profile.snippetsCompleted > 4 ? 
         <Fragment>

             <div style={{display: 'flex', padding: 20, }}>

             <img src={profile.user.avatar} alt='profile pic' style={{padding: 20, borderRadius: "50%", border: "#ccd1ff",
              borderWidth: "medium",
              borderStyle: "outset",
              }} width="250px" height="250px"/>

             <div style={{marginLeft: 40, lineHeight: '30px', fontWeight: "bold" ,fontSize: "20px"}}>
             <h1>{user && user.name}</h1>

             <div className = 'info' style={{lineHeight: "42px"}}>
             <span>Average coding speed : {profile.wpm== null? 0:profile.wpm}WPM</span><br / >
             <span>Average Accuracy: {computeAverage(profile.accuracy)}%</span><br / >
             <span>Snippets Completed: {profile.snippetsCompleted== null? 0:profile.snippetsCompleted}</span><br / >
             <span>Total Characters typed: {profile.noOfCharacters== null? 0:profile.noOfCharacters}</span><br / >
             <span>Coding Languages: {printLang(profile)}</span><br / >
             </div>
             </div>
             </div>
             
<hr/>
             {profile.accuracy.length > 4 ? plotter(profile.accuracy, 'Accuracy') : <div />}
             {(profile.java.length > 4 )  ? plotter(profile.java, 'Java') : <div />}
             {(profile.C.length > 4 )  ? plotter(profile.C, 'C') : <div />}
             {(profile.CPP.length > 4 )  ? plotter(profile.CPP, 'C++') : <div />}
             {(profile.python.length > 4 )  ? plotter(profile.python, 'Python') : <div />}
             {(profile.english.length > 4 )  ? plotter(profile.english, 'English') : <div />}
             <div style={{padding: 30}}></div>
         
         </Fragment>
         :<div> 
           <center>
           <div style = {{
             fontSize: 22,
             padding: 40,
             margin: 10,
             fontFamily: 'JetBrains mono',
           }}>
             Please type more samples to view your stats !
           </div>
           <img src={gif} alt='kermit tping'/>
           </center>



         </div>


         :<Fragment>
         <div> 
           <center>
           <div style = {{
             fontSize: 22,
             padding: 40,
             margin: 10,
             fontFamily: 'monospace',
           }}>
             Please type more samples to view your stats !
           </div>
           <img src={gif} alt='kermit typing'/>
           </center>
           </div>
            
        </Fragment>}

    </div>
       
        );
}

Profile.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}
const mapStateToProps= state =>({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps,{getCurrentProfile})(Profile)
                 
