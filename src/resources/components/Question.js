import React, { useState } from 'react';

function Question({ movie, onSubmit }) {
    const [guess, setGuess] = useState('');
    const currentYear = new Date().getFullYear();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(guess);
        setGuess('');
    };

    return (
        <div className="question-container">
            <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} style={{ width: '200px' }} />
            <h2>When was "{movie.title}" released?</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    min="1900"
                    max={currentYear}
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    placeholder="Enter release year"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Question;
