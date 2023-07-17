import React, { useState } from "react";
import "./App.css"; // Import the CSS file for styling

const Quiz = () => {
  const questions = [
    {
      question: "Who was the first president of the United States?",
      options: [
        "Thomas Jefferson",
        "George Washington",
        "Abraham Lincoln",
        "John Adams",
      ],
      answer: 1,
    },
    {
      question: "Which country was the first to reach the moon?",
      options: ["United States", "Russia", "China", "India"],
      answer: 0,
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Pablo Picasso",
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Michelangelo",
      ],
      answer: 2,
    },
    {
      question: "When did World War II end?",
      options: ["1939", "1945", "1942", "1950"],
      answer: 1,
    },
    {
      question: "Which civilization built the Machu Picchu citadel?",
      options: ["Maya", "Inca", "Aztec", "Egyptian"],
      answer: 1,
    },
    {
      question: "Who is credited with discovering gravity?",
      options: [
        "Albert Einstein",
        "Isaac Newton",
        "Galileo Galilei",
        "Charles Darwin",
      ],
      answer: 1,
    },
    {
      question: "In which year did the Berlin Wall fall?",
      options: ["1989", "1961", "1975", "1991"],
      answer: 0,
    },
    {
      question: 'Who wrote the play "Romeo and Juliet"?',
      options: [
        "William Shakespeare",
        "Jane Austen",
        "Mark Twain",
        "George Orwell",
      ],
      answer: 0,
    },
    {
      question: "Which explorer is known for discovering America?",
      options: [
        "Christopher Columbus",
        "Vasco da Gama",
        "Ferdinand Magellan",
        "James Cook",
      ],
      answer: 0,
    },
    {
      question: "When was the Magna Carta signed?",
      options: ["1215", "1492", "1776", "1804"],
      answer: 0,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerOptionClick = (answerIndex) => {
    if (!submitted) {
      const updatedAnswers = [...userAnswers];
      updatedAnswers[currentQuestion] = answerIndex;
      setUserAnswers(updatedAnswers);
    }
  };

  const handlePreviousClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleNumberClick = (questionIndex) => {
    setCurrentQuestion(questionIndex);
  };

  const handleSubmitClick = () => {
    let totalScore = 0;
    userAnswers.forEach((answer, index) => {
      if (answer === questions[index].answer) {
        totalScore++;
      }
    });
    setScore(totalScore);
    setShowScore(true);
    setSubmitted(true);
  };

  const handleResetClick = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setUserAnswers(Array(questions.length).fill(null));
    setSubmitted(false);
  };

  return (
    <div className="quiz">
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
          <div className="answers-feedback">
            {questions.map((question, index) => (
              <div
                key={index}
                className={`question-feedback ${
                  userAnswers[index] === question.answer
                    ? "correct"
                    : "incorrect"
                }`}
              >
                <p>{question.question}</p>
                {question.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className={`answer-feedback ${
                      userAnswers[index] === optionIndex ? "selected" : ""
                    }`}
                  >
                    {option}
                    {userAnswers[index] === optionIndex &&
                      userAnswers[index] !== question.answer && (
                        <span className="answer-feedback-icon">✗</span>
                      )}
                    {userAnswers[index] !== optionIndex &&
                      question.answer === optionIndex && (
                        <span className="answer-feedback-icon">✓</span>
                      )}
                  </div>
                ))}
              </div>
            ))}
          </div>
          <button className="reset-button" onClick={handleResetClick}>
            Reset
          </button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <h1>
                Question {currentQuestion + 1}/{questions.length}
              </h1>
            </div>
            <div className="question-text">
              <h3>{questions[currentQuestion].question}</h3>
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`answer-option ${
                  userAnswers[currentQuestion] === index ? "selected" : ""
                }`}
                onClick={() => handleAnswerOptionClick(index)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="navigation-section">
            <button
              className="navigation-button"
              onClick={handlePreviousClick}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>

            <div className="numbered-buttons">
              {questions.map((_, index) => (
                <button
                  key={index}
                  className={`numbered-button ${
                    index === currentQuestion ? "active" : ""
                  }`}
                  onClick={() => handleNumberClick(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            <button
              className="navigation-button"
              onClick={handleNextClick}
              disabled={currentQuestion === questions.length - 1}
            >
              Next
            </button>
          </div>
          <div className="submit-button">
            <button onClick={handleSubmitClick}>Submit</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
