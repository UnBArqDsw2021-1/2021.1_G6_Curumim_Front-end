import React from 'react';
import './styles.css';

const PostCard = ({description, fk_idChild, fk_idProfessional, id, title, updatedAt}) => {
    let data
    if (updatedAt) {
        data = updatedAt
    }
    return (
        <div className='post-card'>
            <div>
                {title}
                <span>{data}</span>
            </div>
            <p>{description}</p>
            <button className="button main-button option-button-margin">Criar Atividade</button>
        </div>
    );
}

export default PostCard;