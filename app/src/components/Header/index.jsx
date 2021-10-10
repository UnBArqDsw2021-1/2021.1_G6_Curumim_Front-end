import React, { Component } from 'react';
import './styles.css';

import {logout} from '../../utils/storage'

class Header extends Component {
    render() {
        function activateLasers(event) {
            logout()
        }

        return (
            <div className="Header">
                <img src="../../assets/images/left-arrow-white.png" alt="" />
                <h2 onClick={activateLasers}>Curumim</h2>
                <div className="sidebar">
                </div>
            </div>
        );
    }
}

export default Header;