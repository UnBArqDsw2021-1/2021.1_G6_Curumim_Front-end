import React, { useState } from 'react';

import Header from '../../components/Header';

import Thrash from "../../assets/images/thrash.png";

import './styles.css';

function RegisterClass() {
    const allStudents = [
        {
            name: 'Rodinei',
            id: 0
        },
        {
            name: 'Cesinha',
            id: 1,
        },
        {
            name: 'Róger',
            id: 2,
        },
        {
            name: 'Robertinha Matos Barroso Silva',
            id: 3,
        },
        {
            name: 'Daniela',
            id: 4,
        },
        {
            name: 'Roriz',
            id: 5,
        },
        {
            name: 'Danilo',
            id: 6,
        },
        {
            name: 'Rafael',
            id: 7,
        },
        {
            name: 'Jonas',
            id: 51,
        },
      ];

    const allTeachers = [
        {
          name: 'Josefa',
          id: 0
        },
        {
          name: 'Francisco',
          id: 1,
        },
        {
          name: 'José',
          id: 2,
        },
        {
          name: 'Débora',
          id: 3,
        },
        {
          name: 'Fátima',
          id: 4,
        }
    ];

    const [period, setPeriod] = useState('');
    const [grade, setGrade] = useState('');
    const [teacher, setTeacher] = useState('');
    const [addedStudents, setAddedStudents] = useState([]);

    const createdClass = {
        Period:period,
        Class: grade,
        Teacher: teacher,
        Students: addedStudents
    }

    const handleAddStudents = (e) => {
        if(addedStudents.filter(k => k.name === e.currentTarget.value).length <= 0){
            const updatedStudents = [
                ...addedStudents,
                ...allStudents.filter((x) => x.name == e.currentTarget.value)
            ]
            setAddedStudents(updatedStudents);
        }
        document.getElementById('students-input').value = '';
    }

    const handleRemoveStudents = (e) => {
        const id = (e.currentTarget.id).split("-", 3)[2];

        const updateStudents = [
            ...addedStudents.filter((x) => x.id != id),
        ]

        setAddedStudents(updateStudents);
    }

    return (
        <section className="adm-register">
            <Header />
            <div className="div-adm-register">  
                <div className="adm-register-title">Cadastrar Turma</div>
                <form className="adm-register-form">
                    <div className="div-register-class-selects">
                        <div className="div-select-period">
                            <label htmlFor="select-period">Período</label>
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
                            <label htmlFor="select-class">Turma</label>
                            <select
                            className="select-class"
                            value={grade}
                            onChange={e => setGrade(e.currentTarget.value)}
                            >
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
                                {allTeachers.map(teacher => (
                                    <option key={teacher.id} value={teacher.name}></option>
                                ))}
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
                                {allStudents.map(student => (
                                    <option id={`student-${student.id}`} value={student.name}></option>
                                ))}
                            </datalist>
                        </div>
                    </div>
                    <div className="students-added">
                        {addedStudents.length > 0 ? addedStudents.map(student => (
                            <div className="student-added">
                                <h5 id={`added-student-${student.name}`}>{student.name}</h5>
                                <img 
                                    id={`thrash-student-${student.id}`} 
                                    src={Thrash}
                                    alt="lixo" 
                                    onClick={e => handleRemoveStudents(e)}
                                />  
                            </div>        
                        )) : null}
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