import React from 'react'
import gif from '../images/mobile.gif'

export const Mobile = () => {
    return (
        <div style={{width:'250px',padding:'20px'}}>
        <center>
        <div>
            <h1>THIS WEBSITE IS NOT FOR MOBILE USERS</h1>
            <center>
            <img src={gif} alt="NO MOBILE"/>
            </center>
        </div>
        </center>
        </div>
    )
}
