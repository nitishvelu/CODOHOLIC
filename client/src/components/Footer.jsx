import React from 'react';
import { Link } from 'react-router-dom';


var style = {
    footer: {
        backgroundColor : '#1b1b1b',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 11,
        position: 'fixed',
        bottom: 0,
        color: 'white',
        textAlign: 'right',

    }
}

class Footer extends React.Component {
    // constructor ()
    // {
    //     // useless constructor will add stuff later
    //     super()
    // }



    render()
    {
        return (
           <footer style = {style.footer}>
               <Link to="/about">

               <span style={{marginRight: 40 ,color:'#ffff'}}>About</span>
               </Link>
               
               <span style={{marginRight: 40}} >
                   <a style={{color:'#ffff'}}href='mailto:nitishvelu@gmail.com;mehulbhandari20@gmail.com;srinivasvj01@gmail.com;'target="_blank"rel="noreferrer">Contact us</a>
                   </span>
           </footer>
        )
    }
}

export default Footer;