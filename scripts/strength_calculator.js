
function getLetterStrength(letter) {
    let prob = PASSWORD_LET_PROBS[letter]
    return Math.log1p(1.0 / prob)
}

function getPasswordStrength(password) {
    let total = 0.0;
    for(let letter of password) {
        total += getLetterStrength(letter);
    }
}