/* eslint-disable react-hooks/exhaustive-deps */
import React,{Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCurrentProfile} from '../actions/profile';
import Spinner from './Spinner';

const Profile = ({getCurrentProfile,auth:{user},profile:{profile,loading}}) => {
    useEffect(()=>{
        getCurrentProfile();
    },[]);
    
    return ( loading && profile === null ? <Spinner/>: 
    <Fragment>
         <h1>Profileeee</h1>
         <h2>Welcome {user && user.name}</h2>
         {profile !==null? 
         <Fragment>
             has
         </Fragment>
         :<Fragment>
             <p>you have not set up the preferred languages please set it up</p>
            <Link to='/create-profile'>create profile</Link>
        </Fragment>}

    </Fragment>
       
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
