function reverseWords(sentence) {
  var words = sentence.split(' ');
  var sentenceReverse = [];
  words.forEach(word => {
    var wordReverse = '';
    for (var i = word.length - 1; i >= 0; i--) {
      wordReverse += word[i];
    }
    sentenceReverse.push(wordReverse);
  })
  return sentenceReverse.join(' ');
}

reverseWords('Coding JavaScript'); // 'gnidoC tpircSavaJ'