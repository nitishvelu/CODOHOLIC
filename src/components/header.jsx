import React from 'react';
import NavBar from './Navbar';

class Header extends React.Component {
    // constructor ()
    // {
    //     // useless constructor will add stuff later
    //     super()
    // }

    render()
    {
        return (
            <header>
                <NavBar />
            </header>
        )
    }
}

export default Header;