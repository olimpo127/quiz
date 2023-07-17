import "./App.css";
import React, { useState } from "react";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);

  const [displayAlternatives1, setDisplayAlternatives1] = useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">One Piece QUIZ</h1>
        <h5 className="question">
          <strong>{questionNumber}. </strong>
          Who is the first person to defeat Monkey D. Luffy?
        </h5>
        <div className="alternatives">
          <p>A. Rob Lucci</p>
          <p>B. Portgas D. Ace</p>
          <p>C. Crocodile</p>
          <p>D. Smoker</p>
        </div>
      </header>
    </div>
  );
}

export default App;
