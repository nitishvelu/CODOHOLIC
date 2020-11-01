import React from 'react';
import NavBar from './Navbar';
import logo from '../images/coding.svg';
const stylesheet = {
    logo: {
        height: 36,
        margin: '0 20px',
    },
    title: {
        fontFamily: 'monospace',
        fontSize: 25,
    },
    header: {
        backgroundColor: 'yellow',
        top: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    }
}


class Header extends React.Component {
    // constructor ()
    // {
    //     // useless constructor will add stuff later
    //     super()
    // }



    render()
    {
        return (
            <div >
            <header style = {stylesheet.header}>
                <div style={{flexDirection:'row', display: "flex", alignItems: 'center'}}>
                    <img 
                    style = {stylesheet.logo}
                    id = 'logo' 
                    src={logo} 
                    alt="logo"
                    />
                    <h1 id = 'title' style = {stylesheet.title}>Codoholic</h1>
                </div>
                <NavBar />
            </header>
            </div>
        )
    }
}

export default Header;