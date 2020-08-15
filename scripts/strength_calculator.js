
function getLetterStrength(letter) {
    let prob = PASSWORD_LET_PROBS[letter]
    let strength = Math.log(1.0 / prob) / Math.log(2.0)
    return strength
}

function getPasswordStrength(password) {
    let total = 0.0;
    for(let letter of password) {
        total += getLetterStrength(letter);
    }
    return total.toFixed(3)
}