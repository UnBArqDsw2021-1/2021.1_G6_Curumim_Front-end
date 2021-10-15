import React from 'react';
import './styles.css';
import SideBar from '../SideBar';
import Back from '../../assets/images/left-arrow-white.png'
import { useHistory } from "react-router-dom";
import {logout} from '../../utils/storage'

const Header = () => {
    function activateLasers(event) {
        logout()
    }

    let history = useHistory();

    return (
        <div className="Header">
            <img src={Back} onClick={() => history.goBack()} alt="voltar" />
            <h2 onClick={activateLasers}>Curumim</h2>
            <div className="header">
            <SideBar/>
            </div>
        </div>
    );

}

export default Header;