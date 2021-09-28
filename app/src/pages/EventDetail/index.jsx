import React, { Fragment } from 'react';
import './styles.css';

export default function EventDetail(props) {
    let state = {
        eventName: "Festa Junina",
        date: "05/08",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    };

    return (
        <Fragment>
            <div> NavBar </div>
            <header className="App-header-detail">
                <h2 className="eventName">
                    { state.eventName }</h2>
                <p className="data">Data { state.date }</p>
                <p className="text">{ state.description }</p>
            </header>
        </Fragment>
    );
}

