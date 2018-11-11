function caesarCipher(sentence, number) {
  number = number % 26
  var sentenceInLowerCase = sentence.toLowerCase();
  var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var sentenceUpdated = '';
  for (var i = 0; i < sentenceInLowerCase.length; i++) {
    var character = sentenceInLowerCase[i];
    if (alphabet.indexOf(character) === -1) {
      sentenceUpdated += character;
    }
    else {
      var characterIndex = alphabet.indexOf(character);
      var newCharacterIndex = characterIndex + number;
      if (newCharacterIndex > 25) {
        newCharacterIndex -= 26;
      }
      if (newCharacterIndex < 0) {
        newCharacterIndex += 26;
      }
      if (sentence[i] === sentence[i].toUpperCase()) {
        sentenceUpdated += alphabet[newCharacterIndex].toUpperCase();
      }
      else {
        sentenceUpdated += alphabet[newCharacterIndex];
      }
    }
  }
  return sentenceUpdated;
}

caesarCipher('Zoo Keeper', 2); // Bqq Mggrgt'
caesarCipher('Big Car', -16); // 'Lsq Mkb'
caesarCipher('Javascript', -900); // 'Tkfkcmbszd'

function caesarCipherReverse(sentence, number) {
  return caesarCipher(sentence, 26 - number);
}

caesarCipherReverse('Bqq Mggrgt', 2);
caesarCipherReverse('Lsq Mkb', -16);
caesarCipherReverse('Tkfkcmbszd', -900);
