
function getLetterBits(letter) {
    let prob = PASSWORD_LET_PROBS[letter]
    let strength = Math.log2(1.0 / prob)
    return strength
}

function getPasswordRawBits(password) {
    let total = 0.0
    
    for(let letter of password) {
        total += getLetterStrength(letter)
    }
    
    return total
}

function getPasswordEntropy(password) {
    let length = 0
    let freqCount = {}


    for(let letter of password) {
        length += 1
        if(letter in freqCount) {
            freqCount[letter] += 1
        } else {
            freqCount[letter] = 1
        }
    }

    entropy = 0
    for(let letter in freqCount) {
        freq = freqCount[letter] / length
        entropy += freq * Math.log2(freq)
    }

    return entropy
}

function getPasswordBits(password) {
    let total = 0.0
    
    for(let letter of password) {
        total += getLetterStrength(letter)
    }
    
    return total * getPasswordEntropy(password)
}