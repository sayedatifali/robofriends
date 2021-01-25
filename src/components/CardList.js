import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
  
  const cardsArray = robots.map((user, i) => {

    // Uncomment to throw error and test ErrorBoundary
    // if (true) {
    //   throw new Error('NOOOOOOOO!');
    // }

    return (
      <Card
        key={i} 
        id={robots[i].id} 
        name={robots[i].name}
        username={robots[i].username}
        email={robots[i].email}
        />
    );
  })

  return (
    <div>
      {cardsArray}
    </div>
  );
}

export default CardList;