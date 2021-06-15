import React from 'react'
import './cardlist.css'
import Card from '../Card/Card'
function CardList({users}) {
    return (
        <div className="card-list">
        {users.map((user, i) => (
            <Card key={i} user={user}/>
          ))}
      </div>
    )
}

export default CardList
