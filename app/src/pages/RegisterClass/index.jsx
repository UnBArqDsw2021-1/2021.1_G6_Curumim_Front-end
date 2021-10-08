import React, { useState } from 'react';

import Header from '../../components/Header';

import './styles.css';

function RegisterClass() {
    const [period, setPeriod] = useState('');
    const [grade, setGrade] = useState('');
    const [teacher, setTeacher] = useState('');
    const [students, setStudents] = useState([]);

    const createdClass = {
        Period:period,
        Class: grade,
        Teacher: teacher,
        Students: students
    }

    const handleAddStudents = (e) => {
        setStudents(students.concat(e.currentTarget.value));
        document.getElementById('students-input').value = '';
    }

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
                            value={period}
                            onChange={e => setPeriod(e.currentTarget.value)}
                            >
                                <option value="" disabled></option>
                                <option value="Diurno">Diurno</option>
                                <option value="Noturno">Noturno</option>
                            </select>
                        </div>
                        <div className="div-select-class">
                            <label for="select-class">Turma</label>
                            <select
                            className="select-class"
                            value={grade}
                            onChange={e => setGrade(e.currentTarget.value)}
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
                            <input 
                                type="text" 
                                list="teachers" 
                                placeholder="Nome do professor" 
                                value={teacher}
                                onChange={e => setTeacher(e.currentTarget.value)}
                            />
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
                            <input 
                                id="students-input"
                                type="text" 
                                list="students" 
                                placeholder="Nome do aluno"
                                onChange={e => handleAddStudents(e)}
                            />
                            <datalist id="students">
                                <option value="Rodinei"/>
                                <option value="Cesinha"/>
                                <option value="Robertinha"/>
                            </datalist>
                        </div>
                        <div className="added-student"></div>
                    </div>
                    <div className="students-added">
                        
                    </div>
                </form>
                <div className="adm-register-buttons">
                    <button className="adm-cancel-register">Cancelar</button>
                    <button className="adm-register-button" onClick={() => console.log(createdClass)}>Cadastrar</button>
                </div>
            </div>
        </section>
    );
}

export default RegisterClass;