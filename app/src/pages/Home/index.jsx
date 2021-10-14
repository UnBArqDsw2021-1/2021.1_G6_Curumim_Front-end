import React, { Component } from 'react';
import './styles.css';

/* import loadADMProfile from "../../services/admAPIRequests" */

class Home extends Component {
    /* loadADM = async () => {
        const admProfile = await loadADMProfile();
    } */
    render() {
        return (
            <section class='home-page'>
                <h1>Home</h1>
                <div class="profile">

                </div>
                <div class="home-body">

                </div>
            </section>
        );
    }
}

export default Home;