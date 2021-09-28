import React, { Component } from 'react';
import './styles.css';
import admPerfil from '../../assets/images/home/garota.png'

/* import loadADMProfile from "../../services/admAPIRequests" */

class Home extends Component {
    /* loadADM = async () => {
        const admProfile = await loadADMProfile();
    } */
    render() {
        return (
            <section className='home-page'>
                <h1>Home</h1>
                <div className="home-profile">
                    <div className="profile-components">
                        <img className="profile-image" src={admPerfil} alt=''/>
                        <span>Nome do Adm</span>
                    </div>
                </div>
                <div className="home-body">

                </div>
            </section>
        );
    }
}

export default Home;