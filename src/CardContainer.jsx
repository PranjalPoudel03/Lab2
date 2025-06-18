import React, { useState } from 'react';
import Card from './Card';
import cards from './cards';

const CardContainer = () => {
  const [index, setIndex] = useState(0);

const showNext = () => {
  if (index < cards.length - 1) {
    setIndex(index + 1);
  }
};

const showPrev = () => {
  if (index > 0) {
    setIndex(index - 1);
  }
};


  return (
    <div className="card-container">
      <h2>The Ultimate Science Quiz!</h2>
      <p>How good is your Grade 8 science knowledge? Click the card to see the answer.</p>
      <p><strong>Number of cards:</strong> {cards.length}</p>

      <Card
        question={cards[index].question}
        answer={cards[index].answer}
      />

      <div className="nav-buttons">
        <button onClick={showPrev}>Previous👈 </button>
        <button onClick={showNext}>Next👉</button>
      </div>
    </div>
  );
};

export default CardContainer;
