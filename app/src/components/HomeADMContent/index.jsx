import React from 'react';

const HomeADMContent = () => {

    function showMenu1() {
        let element1 = document.getElementById('sub-menu-1')
        let element2 = document.getElementById('sub-menu-2')
        let element3 = document.getElementById('sub-menu-3')

        console.log(element1.style.display)

        if(element1.style.display === 'none') {
            element1.style.display = "flex"

            element2.style.display = "none"
            element3.style.display = "none"
        } else {
            element1.style.display = "none"
        }
    }

    function showMenu2() {
        let element1 = document.getElementById('sub-menu-1')
        let element2 = document.getElementById('sub-menu-2')
        let element3 = document.getElementById('sub-menu-3')

        if(element2.style.display === 'none') {
            element2.style.display = "flex"

            element1.style.display = "none"
            element3.style.display = "none"
        } else {
            element2.style.display = "none"
        }
    }

    function showMenu3() {
        let element1 = document.getElementById('sub-menu-1')
        let element2 = document.getElementById('sub-menu-2')
        let element3 = document.getElementById('sub-menu-3')

        if(element3.style.display === 'none') {
            element3.style.display = "flex"

            element1.style.display = "none"
            element2.style.display = "none"
        } else {
            element3.style.display = "none"
        }
    }

    return (
        <div className='home-content'>
            <h3>Administrador</h3>
            <div>
                <div className='teste-aqui' onClick={showMenu1}>Atividades</div>
                <div id='sub-menu-1' className='home-content-buttons' style={{display: "none"}}>
                    <button className="button main-button home-content-first-button button option-button-margin">Criar Atividade</button>
                    <button className="button option-button button option-button-margin">Listar</button>
                </div>
            </div>
            <hr />
            <div>
                <div className='teste-aqui' onClick={showMenu2}>Eventos</div>
                <div id='sub-menu-2' className='home-content-buttons' style={{display: "none"}}>
                    <button className="button main-button home-content-first-button button option-button-margin">Criar Evento</button>
                    <button className="button option-button option-button-margin">Listar</button>
                </div>
            </div>
            <hr />
            <div>
                <div className='teste-aqui' onClick={showMenu3}>Centro Educacional</div>
                <div id='sub-menu-3' className='home-content-buttons' style={{display: "none"}}>
                    <button className="button main-button home-content-first-button button option-button-margin">Criar</button>
                    <button className="button option-button option-button-margin">Listar</button>
                </div>
            </div>
        </div>
    )
}

export default HomeADMContent;