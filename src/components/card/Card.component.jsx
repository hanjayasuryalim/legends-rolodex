import React from "react";
import PropType from 'prop-types';

import './Card.style.css';
export const Card = (props) => {
    return <div className="card">
        <img src={`https://robohash.org/${props.legend.id}?set=set2&size=180x180`} alt="legend"/>
        <h3>{props.legend.name}</h3>
        <h4>{props.legend.email}</h4>
    </div>
}

Card.propTypes = {
    legend:PropType.object
}
