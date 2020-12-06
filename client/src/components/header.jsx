import React from 'react';
import NavBar from './Navbar';
import {Link} from 'react-router-dom';
import colors from '../utils/colors'
import logo from '../images/coding.svg';
const stylesheet = {
    logo: {
        height: 36,
        margin: '0 20px',
    },
    title: {
        fontFamily: 'monospace',
        fontSize: 25,
        textDecoration: 'none', 
        color: 'white' 
    },
    header: {
        background: colors.headerGradient,
        top: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
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
                    <Link to='/' style = {stylesheet.title}>Codoholic</Link>
                </div>
                <NavBar />
            </header>
                </div>
        )
    }
}

export default Header;
