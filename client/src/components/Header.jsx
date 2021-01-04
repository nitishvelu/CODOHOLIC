import React from 'react';
import NavBar from './Navbar';
import {Link} from 'react-router-dom';
import './Header.css';
import Lottie from 'react-lottie';
import animationData from '../images/logofile.json';


var defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};


const stylesheet = {
    logo: {
        height: 36,
        margin: '0 20px',
    },
    title: {
        fontFamily: "Source Code Pro",
        fontSize: 25,
        textDecoration: 'none',
        color: 'white',
        marginLeft: 100
    },
    header: {
        background: "rgba(255, 255, 255, 0.04)",
        top: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
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
                <div style={{flexDirection:'row', display: "flex", alignItems: 'center', position:'relative' }}>
                    <Lottie 
                options={defaultOptions}
                height={120}
                width={120}
                style={{position:'absolute' , marginBottom: '8px'}}
                />
                    {/* <img className = "codelogo"
                    style = {stylesheet.logo}
                    id = 'logo'
                    src={logo}
                    alt="logo"
                    /> */}
                    <Link to='/' className="title" style = {stylesheet.title}>Codoholic</Link>
                </div>
                <NavBar />
            </header>
                </div>
        )
    }
}

export default Header;