import React from 'react';


var style = {
    footer: {
        backgroundColor: '#2d6187',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding : 11,
        position: 'fixed',
        bottom: 0,
        color:"white"
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
               contact us
           </footer>
        )
    }
}

export default Footer;