import React, {useState} from 'react';
import Button from "../elements/Button";
import cinemaImage from "../../../assets/img/cinema-image.webp";

function Question({movie, onSubmit}) {
    const [guess, setGuess] = useState('');
    const currentYear = new Date().getFullYear();

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(guess);
        setGuess('');
    };

    return (
        <div className="round-layout in-game">

            {/*<div className="edge-right image-fill">*/}
            {/*    <div className="question--poster">*/}
            {/*        <img src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title}*/}
            {/*             style={{width: '200px'}}/>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="info vertical-center">
                <h2 className={`mb-sm`}>When was "{movie.title}" released?</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        className="mb-sm game-input"
                        type="number"
                        min="1900"
                        max={currentYear}
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                        placeholder={movie.release_date.split('-')[0]}
                    />

                    <div className="text-right">
                        <button className={`text-right`} type="submit">Guess</button>
                    </div>
                </form>
            </div>

            <div className="right-half">
                <div className="bg-image fill" style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`}}></div>
            </div>
        </div>


    );
}

export default Question;
