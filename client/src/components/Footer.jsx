import React from 'react';


var style = {
    footer: {
        background : 'linear-gradient(90deg, rgb(2, 0, 36) 0%, rgb(5, 53, 68) 50%, rgb(8, 111, 133) 100%',
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
               
               <span style={{marginRight: 40}} >
                   <a style={{color:'#ffff'}}href='mailto:nitishvelu@gmail.com;mehulbhandari20@gmail.com;srinivasvj01@gmail.com;'target="_blank"rel="noreferrer">contact us</a>
                   </span>
           </footer>
        )
    }
}

export default Footer;