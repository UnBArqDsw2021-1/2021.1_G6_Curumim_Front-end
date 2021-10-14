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
            	<header className="App-header-lista-turma">
					<h2 className="title">Turmas</h2>
					<ul className="classList">
						{ this.state.classes.map(item => <li>Turma {item}</li>) }
					</ul>
				</header>
			</Fragment>
        );
    }
}

export default ClassList;
