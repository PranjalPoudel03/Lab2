import { useState } from 'react';
import Card from './Card';
import cards from './cards';

const CardContainer = () => {
const [index, setIndex] = useState(0);
const [streak, setStreak] = useState(0);
const [longestStreak, setLongestStreak] = useState(0);
const [shuffledCards, setShuffledCards] = useState(cards); // working copy of card order
  
const shuffleCards = () => {
const shuffled = [...cards]; // clone original
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  setShuffledCards(shuffled);
  setIndex(0);       // start from beginning
  resetInput();      // clear input and feedback
};

const showNext = () => {
  if (index < shuffledCards.length - 1) {
    setIndex(index + 1);
    resetInput();
  }
};

const showPrev = () => {
  if (index > 0) {
    setIndex(index - 1);
    resetInput();
  }
};

const resetInput = () => {
  setuserInput("");
  setFeedback("");
};

const [userInput, setuserInput] = useState("");
const [feedback, setFeedback] = useState("");
/*
const handleSubmit = (e) => {
  e.preventDefault();

  // Normalize both strings: lowercase, trim, and collapse spaces
  const normalize = str => str.trim().toLowerCase().replace(/\s+/g, ' ');

  const correctAnswer = normalize(cards[index].answer);
  const guess = normalize(userInput);

  if (guess === correctAnswer) {
    const newStreak = streak + 1;
    setStreak(newStreak);
    if (newStreak > longestStreak) {
      setLongestStreak(newStreak);
    }
    setFeedback("✅ Correct!");
  } else {
    setStreak(0);
    setFeedback("❌ Incorrect. Try again!");
  }
};

*/

const handleSubmit = (e) => {
  e.preventDefault();

  const correct = shuffledCards[index].answer.trim().toLowerCase();
  const guess = userInput.trim().toLowerCase();

  if (Number(correct) === Number(guess) || guess === correct) {
    const newStreak = streak + 1;
    setStreak(newStreak);
    if (newStreak > longestStreak) {
      setLongestStreak(newStreak);
    }
    setFeedback("✅ Correct!");
  } else {
    setStreak(0);
    setFeedback("❌ Incorrect. Try again!");
  }
};


  return (
    <div className="card-container">
      <h2>The Ultimate Science Quiz!</h2>
      <p>How good is your Grade 8 science knowledge? Click the card to see the answer.</p>
      <p><strong>Number of cards:</strong> {cards.length}</p>

      <Card
        question={shuffledCards[index].question}
        answer={shuffledCards[index].answer}
      />
      <p><strong>Streak:</strong> {streak} 🔥</p>
      <p><strong>Longest Streak:</strong> {longestStreak} 🏆</p>

      <div>
        <h4>Guess the Answer: </h4>
        <form onSubmit={handleSubmit}>
          <input type = "text"
            value={userInput}
            onChange={(e) => setuserInput(e.target.value)}
            placeholder="Type your answer"
          />
          <input className = "okok" type = "submit" value="Submit Guess"/>
        
        </form>
        {feedback && <p style={{ fontWeight: "bold", marginTop: "10px" }}>{feedback}</p>}
      </div>  

      <div className="nav-buttons">
        <button onClick={showPrev}>Previous👈 </button>
        <button onClick={showNext}>Next👉</button>
        <button onClick={shuffleCards}>Shuffle</button>
      </div>
    </div>
  );
};

export default CardContainer;
