/* eslint-disable import/no-anonymous-default-export */
import React, { Fragment } from 'react'
import load from '../images/load.svg'
export default () => {
    return (<Fragment>
        <img src={load}
            style={{width: '100px',margin:'auto',display:'block',padding:'100px'}}
            alt='Loading.....'
            />
    </Fragment>
        
    )
};
