import React from 'react';

const Card = ({ title, body, id, deleteIdea }) => {
  return(
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => deleteIdea(id)}>Delete</button>
    </div>
  )
}

export default Card;
