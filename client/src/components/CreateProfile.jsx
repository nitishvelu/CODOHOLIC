import React,{Fragment,useState} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createProfile} from '../actions/profile'

const CreateProfile = ({createProfile,history}) => {
    const [formData,setFormData]=useState({
        preferredLanguages:''
    });
    const onChange = e =>setFormData({...formData,[e.target.name]: e.target.value});
    const onSubmit= e =>{
        e.preventDefault();
        createProfile(formData,history);

    }

    return (
        <Fragment>

        <form onSubmit={e=> onSubmit(e)}>
        <div >
          <input type="text" placeholder="[c++,C,lua,javascript,haskell]" name="preferredLanguages" 
          value={formData.preferredLanguages}onChange={e=> onChange(e)} />
          <input type="submit"  value="les code" />
        </div>
        </form>
        </Fragment>
    )
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,

};


export default connect(null,{createProfile})(withRouter(CreateProfile))//for history object
