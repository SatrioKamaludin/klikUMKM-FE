import React, { Component } from 'react';
import '../Header/Header.css'
import { ReactComponent as Logo } from '../Header/logo.svg'

class Header extends Component {
    render(){
        return (
            <div className='Headerstyle'>
                <Logo className='logo'/>
            </div>
        )
    }
}

export default Header;
