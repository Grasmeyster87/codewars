function getRealLength(string) {
    return [...string].length; // Fix me !
}

console.log(getRealLength("𝓪𝓫𝓬𝓭"))
module.exports = getRealLength;