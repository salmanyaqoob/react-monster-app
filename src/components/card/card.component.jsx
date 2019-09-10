import React from 'react';

import './card.style.css';

export const Card = props => {
    const imageURL = `https://robohash.org/${props.monster.id}?set=set2&size=180x180`;
    return (
        <div className="card-container">
            <img src={imageURL} alt={props.monster.name} />
            <h4>{props.monster.name}</h4>
            <p>{props.monster.email}</p>
        </div>
    );
}