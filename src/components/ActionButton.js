import React, { Component }  from 'react';
const ActionButton = (props) => {
    return(
        <>
        {
            (props.onView) ? <sapn data-title="View Data"><i className="fa-solid fa-eye pointer me-2 text-info"  onClick={props.onView}></i></sapn> : ''
        }

        {
           (props.onEdit) ? <span data-title="Edit Data"><i className="fa-solid fa-pen-to-square pointer me-2 text-warning" onClick={props.onEdit}></i></span> : '' 
        }
            <span data-title="Delete Data" className='mx-3'><i className=" fa-solid fa-trash pointer text-danger" onClick={props.onDelete}></i></span>
        </>
    )
}

export default ActionButton;