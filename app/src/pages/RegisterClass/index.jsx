import React from 'react';

import Header from '../../components/Header';

import './styles.css';

/* const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(''),
        minWidth: 200
    }
})) */

function RegisterClass() {
    //const classes = useStyles()

    /* const [Class, setClass] = React.useState('')

    const handleChangeClass = (event) => {
        setClass(event.target.value)
    }

    const [Period, setPeriod] = React.useState('')

    const handleChangePeriod = (event) => {
        setClass(event.target.value)
    } */

    return (
        <section className="adm-register">
            <Header />
            <div className="div-adm-register">  
                <div className="adm-register-title">Cadastrar Turma</div>
                <form className="adm-register-form">
                    <div className="div-register-class-selects">
                        <div className="div-select-period">
                            <label for="select-period">Período</label>
                            <select
                            className="select-period"
                            value=''
                            /* onChange={handleChangePeriod} */>
                                <option value="" disabled></option>
                                <option value="Diurno">Diurno</option>
                                <option value="Noturno">Noturno</option>
                            </select>
                        </div>
                        <div className="div-select-class">
                            <label for="select-class">Turma</label>
                            <select
                            className="select-class"
                            value=''
                            /* onChange={handleChangeClass} */>
                                <option value="" disabled></option>
                                <option value="1º Ano">1º Ano</option>
                                <option value="2º Ano">2º Ano</option>
                            </select>
                        </div>
                    </div>
                    <div className="add-teacher">
                        <strong>Inscrever Professor</strong><br/>
                        <div className="search-teacher">
                            <label>Pesquisar:</label>
                            <input type="text" list="teachers" placeholder="Nome do professor"/>
                            <datalist id="teachers">
                                <option value="Rodinei"/>
                                <option value="Rodrigo"/>
                            </datalist>
                        </div>
                        <div className="added-teacher"></div>
                    </div>
                    <div className="add-student">
                        <strong>Inscrever Aluno</strong><br/>
                        <div className="search-student">
                            <label>Pesquisar:</label>
                            <input type="text" list="students" placeholder="Nome do aluno"/>
                            <datalist id="students">
                                <option value="Rodinei"/>
                            </datalist>
                        </div>
                        <div className="added-student"></div>
                    </div>
                </form>
                <div className="adm-register-buttons">
                    <button className="adm-cancel-register">Cancelar</button>
                    <button className="adm-register-button">Cadastrar</button>
                </div>
            </div>
        </section>
    );
}

export default RegisterClass;