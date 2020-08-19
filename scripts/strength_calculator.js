
// Get bits of security based on probability of password
function getLetterBits(letter) {
    let prob = PASSWORD_LET_PROBS[letter]
    let strength = Math.log2(1.0 / prob)
    return strength
}

// Total the bits of security in password
function getPasswordRawBits(password) {
    let total = 0.0
    
    for(let letter of password) {
        total += getLetterBits(letter)
    }
    
    return total
}

// Shannons Entropy of a Password
function getPasswordEntropy(password) {
    let base = 0 // Amount of unique letters
    let length = 0 // amount of letters
    let freqCount = {} // how many times each letter appears

    // Count up the frequencies
    for(let letter of password) {
        length += 1
        if(letter in freqCount) {
            freqCount[letter] += 1
        } else {
            base += 1
            freqCount[letter] = 1
        }
    }

    // What percent of the password is unique
    let originality = base / length

    // If there is one letter, calculation
    // will return NaN, but 1 is what it should return
    if(base == 1) {
        return originality
    } else {
        let entropy = 0
        
        for(let letter in freqCount) {
            freq = freqCount[letter] / length
            entropy -= freq * (Math.log(freq) / Math.log(base))
        }
    

        return Math.sqrt(originality * entropy)
    }
}

// Entropy * Raw Bits will give you the strength of a password
function getPasswordBits(password) {
    return getPasswordRawBits(password) * getPasswordEntropy(password)
}