import React from 'react';
import cinemaImage from '../../../assets/img/cinema-image.webp'
import Button from "../elements/Button";
import NewtonsLoader from "../elements/NewtonsLoader";
// import './StartPage.css'; // Optional: Add styles for the start page

const StartPage = ({ onStart }) => {
    return (
        <div className="round-layout">
            <div className="info vertical-center">
                <h1>Welcome to the Movie Year Quiz</h1>
                <p className="pr-lg-lg pr-xl-xl">
                    Test your movie knowledge! Guess the release year of the movie.
                    You can score up to 50 points per question, with a tolerance range of 5 years.
                </p>

                <Button additionalClasses="large" onClick={onStart}>
                    Start Quiz
                </Button>
            </div>

            <div className="right-half">
                <div className="bg-image fill" style={{backgroundImage : `url(${cinemaImage})`}}></div>
            </div>
        </div>
    );
};

export default StartPage;
