import React, { Component }  from 'react';
const ActionButton = (props) => {
    return(
        <>
        {
            (props.onView) ? <i className="fa-solid fa-eye pointer me-2 text-info" onClick={props.onView}></i> : ''
        }

        {
           (props.onEdit) ? <i className="fa-solid fa-eye pointer me-2 text-info" onClick={props.onEdit}></i> : '' 
        }
            <i className="fa-solid fa-trash pointer text-danger" onClick={props.onDelete}></i>
        </>
    )
}

export default ActionButton;