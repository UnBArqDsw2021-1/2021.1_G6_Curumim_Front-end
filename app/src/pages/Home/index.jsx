import React, { useState } from 'react';
import './styles.css';
import admPerfil from '../../assets/images/home/garota.png'

import Header from '../../components/Header';
import HomeADMContent from '../../components/HomeADMContent'
import HomeGuardianContent from '../../components/HomeGuardianContent'
import HomeTeacherContent from '../../components/HomeTeacherContent'

const Home = () => {
    var userLogged = JSON.parse(localStorage.getItem('user'))
    const [user] = useState(userLogged)
    
    let loginLoading
    if(userLogged) {
        if (userLogged.usertype === 0) {
            loginLoading = <HomeGuardianContent/>
        } else if (userLogged.usertype === 1) {
            loginLoading = <HomeTeacherContent/>
        } else if (userLogged.usertype === 2) {
            loginLoading = <HomeADMContent/>
        }
    }

    return (
        <section className='home-page'>
            <Header />
            <div className="home-profile">
                <div className="profile-components">
                    <img className="profile-image" src={admPerfil} alt=''/>
                    <h3>{user.name}</h3>
                </div>
            </div>
            <div className="home-body">
                {loginLoading}
            </div>
        </section>
    )
}

export default Home;