import React from 'react';
import './style/Resources.css';

export default function Resources() {
    const cardData = [
        { id: 1, title: 'C++ Basic to Advanced Concepts', buttons: ['View', 'Download'], content: 'Lorem ipsum...' },
        { id: 2, title: 'C++ Best 50 Problems', buttons: ['View', 'Download'], content: 'Lorem ipsum...' },
        { id: 3, title: 'Operating System', buttons: ['View', 'Download'], content: 'Lorem ipsum...' },
        { id: 4, title: 'JavaScript', buttons: ['View', 'Download'], content: 'Lorem ipsum...' },
        { id: 5, title: 'MongoDB', buttons: ['View', 'Download'], content: 'Lorem ipsum...' },
        { id: 6, title: 'ReactJs', buttons: ['View', 'Download'], content: 'Lorem ipsum...' },
     
      ];
      
  return (
    <div className="resources-container">
      {cardData.map((card) => (
        <div key={card.id} className="resource-card">
          <h2 className="card-title">{card.title}</h2>
          <p className="card-content">{card.content}</p>
          <div className="card-buttons">
            {card.buttons.map((button, index) => (
              <button key={index} className="card-button">
                {button}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
