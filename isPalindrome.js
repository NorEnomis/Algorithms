function isWordPalindrome(word) {
  return word.toLowerCase() === word.toLowerCase().split('').reverse().join('');
}

isWordPalindrome('Kayak')

function isSentencePalindrome(sentence) {
  sentence = sentence.toLowerCase();
  var characters = sentence.split('')
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')
  var sentenceWithOnlyValidCharaters = []
  characters.forEach(character => {
    if (validCharacters.indexOf(character) !== -1) {
      sentenceWithOnlyValidCharaters.push(character);
    }
  })  
  return sentenceWithOnlyValidCharaters.join('') === sentenceWithOnlyValidCharaters.reverse().join('');
}

isSentencePalindrome("Madam, I'm Adam")
