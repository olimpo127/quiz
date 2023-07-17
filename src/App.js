import "./App.css";
import React, { useState } from "react";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);

  const [displayAlternatives1, setDisplayAlternatives1] = useState(true);

  return (
    <div className="App">
      
        <h1 className="title">One Piece QUIZ</h1>
        <h5 className="question">
          <strong>{questionNumber}. </strong>
          Who is the first person to defeat Monkey D. Luffy?
        </h5>
        <div className="alternatives">
          <button>A. Rob Lucci</button>
          <button>B. Portgas D. Ace</button>
          <button>C. Crocodile</button>
          <button>D. Smoker</button>
        </div>
        <div className="questionSelection">
          <button>Previous</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>10</button>
          <button>Next</button>
        </div>
    </div>
  );
}

export default App;
