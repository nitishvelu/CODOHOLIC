//simple utility function to check if token is present in the localstorage and send it in the header request
import axios from 'axios';

const setAuthToken = token =>{
    if(token){
        axios.defaults.headers.common['x-auth-token'] = token;
    }else{
        delete axios.defaults.headers.common['x-auth-token'];
    }
}
export default setAuthToken;