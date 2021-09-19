import React, { Component } from 'react';
import './styles.css';

import loadADMProfile from "../../utils/adm"

class Home extends Component {

    ADM = {
        name: 'Bruno Alves Félix',
    };
    
    loadADM = async () => {
        const postsAndPhotos = await loadADMProfile();
    }
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