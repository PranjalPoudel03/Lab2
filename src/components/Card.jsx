import React, { useState } from 'react';

const Card = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card" onClick={() => setFlipped(!flipped)}>
      <p>{flipped ? answer : question}</p>
    </div>
  );
};

export default Card;
