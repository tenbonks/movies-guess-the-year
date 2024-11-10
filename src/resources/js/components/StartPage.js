import React from 'react';
import cinemaImage from '../../../assets/img/cinema-image.webp'
// import './StartPage.css'; // Optional: Add styles for the start page

const StartPage = ({ onStart }) => {
    return (
        <div className="round-layout">
            <div className="info vertical-center">
                <h1>Welcome to the Movie Year Quiz</h1>
                <p>
                    Test your movie knowledge! Guess the release year of the movie.
                    You can score up to 50 points per question, with a tolerance range of 5 years.
                </p>
                <button className="start-button" onClick={onStart}>
                    Start Quiz
                </button>
            </div>

            <div className="right-half">
                <div className="bg-image fill" style={{backgroundImage : `url(${cinemaImage})`}}></div>
            </div>
        </div>
    );
};

export default StartPage;
