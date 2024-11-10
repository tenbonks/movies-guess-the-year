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
        <div className="container">

            <div className="content">
                <div>
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

            </div>


            <div className="edge-right image-fill">
                <div className="question--poster">
                    <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title}
                         style={{width: '200px'}}/>
                </div>
            </div>

        </div>
    );
}

export default Question;
