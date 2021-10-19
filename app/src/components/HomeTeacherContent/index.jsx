import React from 'react';
import { useHistory } from 'react-router-dom';

const HomeTeacherContent = () => {
    const history = useHistory()

    function Redirect () {
        history.push('/lista-turmas')
    }
    return (
        <div className='home-content'>
            <h3>Professor</h3>
            <div>
                <span>Atividades</span>
                <div id='sub-menu-1' className='home-content-buttons'>
                    <button className="button main-button home-content-first-button button option-button-margin">Criar Atividade</button>
                    <button className="button option-button option-button-margin" onClick={Redirect}>Listar</button>
                </div>
            </div>
        </div>
    )
}

export default HomeTeacherContent;