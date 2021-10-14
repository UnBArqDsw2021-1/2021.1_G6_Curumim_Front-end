import React, { Component } from 'react';
import './styles.css';
import SideBar from '../SideBar';

class Header extends Component {
    render() {
        return (
            
            <div className="Header">
                <img src="../../assets/images/left-arrow-white.png" alt="" />
                <h2>Curumim</h2>
                {/* <div className="header">  */}
                    <SideBar></SideBar>
                {/* </div> */}
            </div>
        );
    }
}

export default Header;