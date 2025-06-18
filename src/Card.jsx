import React, { useState } from 'react';
import './App.css';

const Card = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card" onClick={() => setFlipped(!flipped)}>
      <p>{flipped ? answer : question}</p>
    </div>
  );
};

export default Card;
