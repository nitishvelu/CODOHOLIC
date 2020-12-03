import axios from 'axios';
import {GET_PROFILE,PROFILE_ERROR} from './types';
import {setAlert} from './alert';

// get current users profile
export const getCurrentProfile=()=> async dispatch =>{
    try{
        const res=await axios.get('/profile/me');
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });

    } catch(err){
        dispatch({
            type: PROFILE_ERROR,
            payload:{msg: err.response.statusText,status: err.response.status}
        });
    }
}

// create or update profile
export const createProfile= (formData,history,edit=false) =>async dispatch =>{
    try{
        const config={
            headers:{
                'Content-Type':'application/json'
            }
        };const res =await axios.post('/profile',formData,config);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        });
        dispatch(setAlert(edit?'profile updated':'profile created','success'))
        if(!edit){
            history.push('/');//redirection outside components
        }
    }catch(err){
        const errors = err.response.data.errors;
        if(errors){
            errors.forEach(error =>dispatch(setAlert(error.msg,'danger')));
         }
        dispatch({
            type: PROFILE_ERROR,
            payload:{msg: err.response.statusText,status: err.response.status}
        });
    }
}