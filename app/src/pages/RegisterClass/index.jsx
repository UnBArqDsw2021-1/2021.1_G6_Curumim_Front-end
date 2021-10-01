import React from 'react';
import {Select} from "@material-ui/core";

import Header from '../../components/Header';

import './styles.css';

function RegisterClass() {
    return (
        <section id="adm-register">
            <Header />
            <div>  
                <strong id="adm-strong-register">Cadastrar Turma</strong>       
                <Select></Select>
            </div>
        </section>
        // <>
        //     <>
        //        
        //         <div id="adm-form-register">
        //             <strong id="adm-strong-register">Cadastrar Turma</strong>
        //         </div>
        //     <Select>

        //         </Select>
        // </>
    );
}

export default RegisterClass;