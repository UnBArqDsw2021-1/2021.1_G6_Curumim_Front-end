import React from 'react';

const HomeADMContent = () => {

    return (
        <div className='home-content'>
            <h3>Administrador</h3>
            <div>
                <span>Atividades</span>
                <div id='sub-menu-1' className='home-content-buttons'>
                    <button className="button main-button home-content-first-button button option-button-margin">Criar Atividade</button>
                    <button className="button option-button option-button-margin">Listar</button>
                </div>
            </div>
            <hr />
            <div>
                <span>Eventos</span>
                <div id='sub-menu-2' className='home-content-buttons'>
                    <button className="button main-button home-content-first-button option-button-margin">Criar Evento</button>
                    <button className="button option-button option-button-margin">Listar</button>
                </div>
            </div>
            <hr />
            <div>
                <span>Turmas</span>
                <div id='sub-menu-3' className='home-content-buttons'>
                    <button className="button main-button home-content-first-button option-button-margin">Criar Turma</button>
                    <button className="button option-button option-button-margin">Listar</button>
                </div>
            </div>
            <hr />
            <div>
                <span>Pessoas</span>
                <div id='sub-menu-3' className='home-content-buttons'>
                    <button className="button main-button home-content-first-button option-button-margin">Cadastrar Criança</button>
                    <button className="button main-button home-content-first-button option-button-margin">Cadastrar Professor</button>
                </div>
            </div>
        </div>
    )
}

export default HomeADMContent;