/* eslint-disable react-hooks/exhaustive-deps */
import React,{Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../actions/profile';
import Spinner from './Spinner';
import {Line} from 'react-chartjs-2';

export const computeAverage  = arr => {
    console.log(arr);
    let sum = 0,i;
    for(i = 0; i<arr.length;i++)
        sum += arr[i];
    return (Math.round((sum/arr.length)));
}

var plotter = (arr,str) => {
    let i = 1;
    const label = arr.map(ele => {
        return i++;
    }) 

    return (
        <div >
        <Line
        data={{
          labels: label,
          datasets: [
            {
              label: str,
              data: arr,
              backgroundColor: 'rgba(255, 159, 64, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
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

             <div style={{display: 'flex', padding: 20}}>

             <img src={profile.user.avatar} alt='profile pic'/>
             <div style={{marginLeft: 40, lineHeight: '30px'}}>
             <h1>{user && user.name}</h1>

             <div className = 'info'>
             <span>Average coding speed : {profile.wpm== null? 0:profile.wpm}WPM</span><br / >
             <span>Average Accuracy: {computeAverage(profile.accuracy)}%</span><br / >
             <span>Snippets Completed: {profile.snippetsCompleted== null? 0:profile.snippetsCompleted}</span><br / >
             <span>Preferred Languages: {profile.preferredLanguages}</span><br / >
             <span>Total Characters typed: {profile.noOfCharacters== null? 0:profile.noOfCharacters}</span><br / >
             </div>
             </div>
             </div>
             
<hr/>
             {profile.accuracy.length > 4 ? plotter(profile.accuracy, 'Accuracy') : <div />}
             {(profile.java.length > 4 )  ? plotter(profile.java, 'Java') : <div />}
             {(profile.C.length > 4 )  ? plotter(profile.java, 'Java') : <div />}
             {(profile.CPP.length > 4 )  ? plotter(profile.java, 'Java') : <div />}
             {(profile.python.length > 4 )  ? plotter(profile.java, 'Java') : <div />}
             
             


             
             
             
             
             <p>wanna change the preferred languages??</p>
            <Link to='/create-profile'>edit</Link>
         
         </Fragment>
         :<Fragment> <p>please type more samples to see your data </p></Fragment>
         :<Fragment>
             <p>you have not set up the preferred languages please set it up</p>
            <Link to='/create-profile'>create profile</Link>
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
