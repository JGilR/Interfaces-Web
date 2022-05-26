import React from 'react'

const Note = ({ title, body, date }) => {
    return (
        <li>
            <h4>{title}</h4>
            <p>{body}</p>
            <small>{date}</small>
        </li>
    )
}

export default Note
