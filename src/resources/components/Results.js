function Results({ answers }) {
    const totalScore = answers.reduce((acc, answer) => acc + answer.score, 0);

    return (
        <div className="results-container">
            <h2>Your Results</h2>
            <ul>
                {answers.map((answer, index) => (
                    <li key={index}>
                        "{answer.title}" (Correct Year: {answer.release_date.split('-')[0]}, Your Guess: {answer.userGuess}) - Score: {answer.score}
                    </li>
                ))}
            </ul>
            <h3>Total Score: {totalScore}</h3>
        </div>
    );
}

export default Results;
