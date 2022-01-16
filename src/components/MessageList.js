import React from 'react'

export const MessageList = ({ data }) => {
    return (
        <ul>
            {data.map(message => <li key={message}>{message}</li>)}
        </ul>
    )
}
