import React from 'react';
import { useHistory } from 'react-router';
import './styles.css';


const PostCard = ({description, fk_idChild, fk_idProfessional, id, title, updatedAt}) => {
    let postData
    if (updatedAt) {
        console.log(typeof(updatedAt))
        let data = new Date(updatedAt);
        console.log(data)
        postData = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
    }

    let history = useHistory();

    return (
        <div className='post-card'>
            <div>
                <span className='post-card-title'>{title}</span>
                <span className='post-card-sub-title'>{postData}</span>
            </div>
            <p>{description}</p>
            <button className="button main-button option-button-margin" onClick={() => {history.push({
                pathname: '/detalhe-atividade/${id}',
                state: { id: id }
            })}}>Detalhes</button>
        </div>
    );
}

export default PostCard;