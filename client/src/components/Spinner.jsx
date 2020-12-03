/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment } from 'react'
import load from '../images/load.gif'
export default () => {
    return (<Fragment>
        <img src={load}
            style={{width: '200px',margin:'auto',display:'block'}}
            alt='Loading.....'
            />
    </Fragment>
        
    )
};
