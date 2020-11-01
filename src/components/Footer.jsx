import React from 'react';


var style = {
    footer: {
        backgroundColor: 'yellow',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding : 11,
        position: 'absolute',
        bottom: 0,
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