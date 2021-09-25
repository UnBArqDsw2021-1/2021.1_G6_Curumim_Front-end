import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import './styles.css';

export default function card(props) {
	let link;
	if(props.type == "activity")
		link = "detalhe-atividade/" + props.id;
	else if(props.type == "event")
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
	                { props.date }
	            </Typography>
	            <Typography variant={"caption"}>
	                { props.description }<br/>

	                {/* SUBSTITUIR TIPO PELO ICONE */}
	                { props.type }
	            </Typography>
	            <Button>Detalhes</Button>
	        </CardContent>
	    </Card>
    );
}