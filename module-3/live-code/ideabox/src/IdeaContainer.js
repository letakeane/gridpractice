import React from 'react';
import Card from './Card';

const IdeaContainer = ({ ideas, deleteIdea }) => {
  const ideaCards = ideas.map(idea => <Card {...idea} key={idea.id} deleteIdea={deleteIdea} />)
  const display = ideas.length ? ideaCards : 'Create some ideas'

  return(
    <div>
      {display}
    </div>
  )
}

export default IdeaContainer;
