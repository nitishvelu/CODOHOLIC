import React from 'react';


var style = {
    footer: {
        backgroundColor: '#020d2c',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 11,
        position: 'fixed',
        bottom: 0,
        color: 'white',
        textAlign: 'center',

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
               
               <span>
                   contact us
                   </span>
           </footer>
        )
    }
}

export default Footer;