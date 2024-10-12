import React from 'react';
// import './StartPage.css'; // Optional: Add styles for the start page

const StartPage = ({ onStart }) => {
    return (
        <div className="start-page">
            <h1>Welcome to the Movie Year Quiz</h1>
            <p>
                Test your movie knowledge! Guess the release year of the movie.
                You can score up to 50 points per question, with a tolerance range of 5 years.
            </p>
            <button className="start-button" onClick={onStart}>
                Start Quiz
            </button>
        </div>
    );
};

export default StartPage;
