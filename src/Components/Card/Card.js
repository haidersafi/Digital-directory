import React from 'react'
import './card.css'
function Card({user:{name,id,email}}) {
    return (
        <div className="card">
        <img alt="black" src={`https://avatars.dicebear.com/api/avataaars/${name}.svg`}/>
        <h3>{name}</h3>
        <h5>{email}</h5>
        </div>
    )
}

export default Card
