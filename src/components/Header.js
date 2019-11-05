import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class Header extends Component {

    render() {

        return (
            
            <div className='header'>
                    <div>
                        <Link to='/homepage'><img className='logo' alt='logo' src={require('../Images/Logo.png')} /></Link>
                    </div>
                    <div className='navbar'>
                        <Link to='/info' className='link' > Info </Link>
                        <Link to='/map' className='link'> Map </Link>
                        <Link to='/data' className='link'> Data </Link>
                    </div>
            </div>
        )
    }
}

export default Header 