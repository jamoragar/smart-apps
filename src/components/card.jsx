import React from 'react'
import './Card.css'

const getCardClassName = ({ featured, tone }) => {
    const classes = ['Card'];

    if (featured) {
        classes.push('CardFeatured');
    }

    if (tone) {
        classes.push(`CardTone${tone.charAt(0).toUpperCase()}${tone.slice(1)}`);
    }

    return classes.join(' ');
};

const Card = props => (
    <article className={getCardClassName(props)}>
        <img src={props.image} alt={props.imageAlt} />
        <span>{props.eyebrow}</span>
        <h3>{props.title}</h3>
        <p>{props.text}</p>
    </article>
)

export default Card
