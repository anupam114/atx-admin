import React, { Component }  from 'react';
const ActionButton = (props) => {
    return(
        <>
        {
            (props.onView) ? <i className="fa-solid fa-eye pointer me-2 text-info" onClick={props.onView}></i> : ''
        }
            <i className="fa-solid fa-trash pointer text-danger" onClick={props.onDelete}></i>
            <i className="fa-solid fa-pen-to-square pointer ms-2 text-warning" onClick={props.onEdit}></i>
        </>
    )
}

export default ActionButton;