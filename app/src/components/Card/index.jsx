import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Brick from "../../assets/images/brick.png";
import Calendar from "../../assets/images/calendar.png";
import RedFlag from "../../assets/images/red-flag.png";

import './styles.css';

function GetIcon(props){
	if(props.type === "activity")
		return <img alt="" src={ Brick }/>;
	else if(props.type === "event")
		return <img alt="" src={ RedFlag }/>;
	else
		return <img alt="" src={ Calendar }/>;
}

export default function card(props) {
	let link;
	if(props.type === "activity")
		link = "detalhe-atividade/" + props.id;
	else if(props.type === "event")
		link = "detalhe-evento/" + props.id;
	else
		link = "detalhe-agenda/" + props.id;

    return (
		<Card>
	        <CardContent>
	            <Typography variant={"h6"}>
	                <Link to={ link }>{ props.activityName }</Link>
	            </Typography>
	            <Typography variant={"caption"}>
	                { props.date }<br/>
	            </Typography>
	            <Typography variant={"caption"}>
	                { props.description }<br/>

					<GetIcon type={ props.type } />   
	            </Typography>
	            <button className="buttonDetail">Detalhes</button>
	        </CardContent>
	    </Card>
    );
}