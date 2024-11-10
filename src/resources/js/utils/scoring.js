export function calculateScore(correctYear, userGuess) {
    const diff = Math.abs(correctYear - userGuess);
    if (diff === 0) return 50; // Exact guess
    if (diff <= 5) return 50 - (diff * 10); // Tolerance of 5 years
    return 0; // Outside tolerance
}
