import React, { Component, Fragment } from 'react';
import './styles.css';

class ClassList extends Component {

	constructor() {
		super();
		this.state = {
			classes: ["A", "B", "C"]
		};
	}

    render() {
        return (
            <Fragment>
            	<div>NavBar</div>
            	<h2>Turmas</h2>
            	<ul>
            		{ this.state.classes.map(item => <li>Turma {item}</li>) }
            	</ul>
			</Fragment>
        );
    }
}

export default ClassList;
