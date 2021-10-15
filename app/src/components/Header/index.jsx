import React, { Component } from 'react';
import './styles.css';
import SideBar from '../SideBar';
import { useHistory } from "react-router-dom";
import Back from "../../assets/images/left-arrow-white.png"

import {logout} from '../../utils/storage'

class Header extends Component {
    render() {
        function activateLasers(event) {
            logout()
        }

        return (
            <div className="Header">
                <img src={Back} alt="" />
                <h2 onClick={activateLasers}>Curumim</h2>
                <SideBar/>
            </div>
        );
    }
}

export default Header;