import React, { Fragment } from 'react'
import load from '../images/load.gif'
export const spinner = () => {
    return (<Fragment>
        <img src={load}
            style={{width: '200px',margin:'auto',display:'bloc'}}
            alt='Loading.....'
            />
    </Fragment>
        
    )
};
