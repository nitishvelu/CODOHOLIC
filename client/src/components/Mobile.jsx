import React from 'react'
import gif from '../images/mobile.gif'

export const Mobile = () => {
    return (
        <div style={{width:'200px'}}>
        <center>
        <div>
            <h1>THIS WEBSITE IS NOT FOR MOBILE USERS</h1>
            <img src={gif} alt="NO MOBILE"/>
        </div>
        </center>
        </div>
    )
}
