import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialog";

import propTypes from 'prop-types';

export default function Card(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickCard = () => {
        setOpen(true);
    };

    return (
        <>
        <FormDialog
            key={props.id}
            open={open} 
            setOpen={setOpen}
            id={props.id}
            name={props.name}
            cost={props.cost}
            category={props.category}
            listCard={props.listCard}
            setListCard={props.setListCard}
        />
        <div className="card--container" onClick={() => {handleClickCard()}}>
            <h1 className="card--title">{props.name}</h1>
            <p className="card--category">{props.category}</p>
            <p className="card--cost">{props.cost}</p>
        </div>
        </>
    );
};

Card.propTypes = {
    data: propTypes.shape({}),
}.isRequired;