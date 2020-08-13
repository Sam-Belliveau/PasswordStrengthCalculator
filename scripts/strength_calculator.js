
function getLetterStrength(letter) {
    let prob = PASSWORD_LET_PROBS[letter]
    let strength = Math.log1p(1.0 / prob)
    return strength
}

function getPasswordStrength(password) {
    let total = 0.0;
    for(let letter of password) {
        total += getLetterStrength(letter);
    }
    return total.toFixed(3)
}