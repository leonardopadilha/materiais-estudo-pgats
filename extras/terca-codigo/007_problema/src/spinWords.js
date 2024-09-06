/*
Write a function that takes in a 
string of one or more words, and returns the same string,
 but with all words that have five or more letters reversed 
 (Just like the name of this Kata). Strings passed in will consist 
 of only letters and spaces. Spaces will be included only when more than 
 one word is present.
*/

function spinWords(frase) {
    const words = frase.split(" ")
    const reversedWords = []
    for (let w in words) {
        if (words[w].length < 5) {
            reversedWords.push(words[w])
        } else {
            reversedWords.push(words[w].split("").reverse().join(""))
        }
    }
    return reversedWords.join(" ")
}

module.exports = spinWords