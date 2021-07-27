import React from "react";
import PropTypes from 'prop-types';

import {Card} from "../card/Card.component";

import './CardList.style.css'
export const CardList = (props) => {
   return <div className="card-list">
      {props.legends.map(legend =>
        <Card key={legend.id} legend={legend}/>
      )}
   </div>
}

CardList.propTypes ={
   legends:PropTypes.array
};
