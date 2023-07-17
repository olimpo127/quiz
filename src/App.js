import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

const Quiz = () => {
  const questions = [
    {
      question: 'Who was the first person, among these people, to defeat Monkey D. Luffy?',
      options: ['Portgas D. Ace', 'Crocodile', 'Smoker', 'Rob Lucci'],
      answer: 0 // Index of the correct option
    },
    {
      question: 'Which Impel Down floor was frozen?',
      options: ['3', '5', '4', '2'],
      answer: 1
    },
    // ... Add more questions
    {
      question: 'Question 1',
      options: ['Op', 'Option 2', 'Option 3', 'Option 4'],
      answer: 0 // Index of the correct option
    },
    {
      question: 'Question 1',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      answer: 0 // Index of the correct option
    },
    {
      question: 'Question 1',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      answer: 0 // Index of the correct option
    },
    {
      question: 'Question 1',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      answer: 0 // Index of the correct option
    },
    {
      question: 'Question 1',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      answer: 0 // Index of the correct option
    },
    {
      question: 'Question 1',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      answer: 0 // Index of the correct option
    },
    {
      question: 'Question 1',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      answer: 0 // Index of the correct option
    },
    {
      question: 'Question 1',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
      answer: 0 // Index of the correct option
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(null));
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
                className={`question-feedback ${userAnswers[index] === question.answer ? 'correct' : 'incorrect'}`}
              >
                <p>{question.question}</p>
                {question.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className={`answer-feedback ${userAnswers[index] === optionIndex ? 'selected' : ''}`}
                  >
                    {option}
                    {userAnswers[index] === optionIndex && userAnswers[index] !== question.answer && (
                      <span className="answer-feedback-icon">✗</span>
                    )}
                    {userAnswers[index] !== optionIndex && question.answer === optionIndex && (
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
              <h1>Question {currentQuestion + 1}/{questions.length}</h1>
            </div>
            <div className="question-text">
              <h3>{questions[currentQuestion].question}</h3>
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`answer-option ${userAnswers[currentQuestion] === index ? 'selected' : ''}`}
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
                  className={`numbered-button ${index === currentQuestion ? 'active' : ''}`}
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
            <button className="submit-button" onClick={handleSubmitClick}>
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
