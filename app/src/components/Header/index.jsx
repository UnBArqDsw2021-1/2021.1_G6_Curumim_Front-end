import React, { Component } from 'react';
import './styles.css';
import SideBar from '../SideBar';
import { useHistory } from "react-router-dom";
import Back from "../../assets/images/left-arrow-white.png"

class Header extends Component {
    render() {

        return (
            <div className="Header">
                <img src={Back} alt="" />
                <h2>Curumim</h2>
                <SideBar/>
            </div>
        );
    }
}

export default Header;