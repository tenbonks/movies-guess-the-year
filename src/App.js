import React, { useEffect, useState } from 'react';
import { getMovies, getMovieDetails } from './resources/api/moviesApi';
import Question from './resources/components/Question';
import Results from './resources/components/Results';
import StartPage from './resources/components/StartPage';  // Import the start page component
import { calculateScore } from './resources/utils/scoring';
import "./App.css"

function App() {
    const [currentRound, setCurrentRound] = useState(0);
    const [movies, setMovies] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);
    const [quizFinished, setQuizFinished] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false);  // New state for quiz start

    // Fetch random movies when the quiz starts
    useEffect(() => {
        if (quizStarted) {

            const roundsPerGame = 5;

            const fetchMovies = async () => {
                const fetchedMovies = await getMovies();
                const detailedMovies = await Promise.all(fetchedMovies.slice(0, roundsPerGame).map(movie => getMovieDetails(movie.id)));
                setMovies(detailedMovies);
            };
            fetchMovies();
        }
    }, [quizStarted]);

    const handleGuess = (userGuess) => {
        const currentMovie = movies[currentRound];
        const score = calculateScore(currentMovie.release_date.split('-')[0], parseInt(userGuess));

        setUserAnswers([...userAnswers, { ...currentMovie, userGuess, score }]);

        if (currentRound < movies.length - 1) {
            setCurrentRound(currentRound + 1);
        } else {
            setQuizFinished(true);
        }
    };

    const handleStartQuiz = () => {
        setQuizStarted(true);  // Start the quiz when user clicks the "Start" button
    };

    return (
        <div className="app-container">
            {quizStarted ? (
                quizFinished ? (
                    <Results answers={userAnswers} />
                ) : movies.length > 0 ? (
                    <Question movie={movies[currentRound]} onSubmit={handleGuess} />
                ) : (
                    <p>Loading movies...</p>
                )
            ) : (
                <StartPage onStart={handleStartQuiz} />  // Show start page if quiz hasn't started
            )}
        </div>
    );
}

export default App;
