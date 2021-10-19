import React from 'react';
import './styles.css';

const PostCard = ({description, fk_idChild, fk_idProfessional, id, title, updatedAt}) => {
    let postData
    if (updatedAt) {
        let data = new Date(updatedAt);
        postData = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear(); 
    }
    return (
        <div className='post-card'>
            <div>
                <span className='post-card-title'>{title}</span>
                <span className='post-card-sub-title'>{postData}</span>
            </div>
            <p>{description}</p>
            <button className="button main-button option-button-margin">Detalhes</button>
        </div>
    );
}

export default PostCard;