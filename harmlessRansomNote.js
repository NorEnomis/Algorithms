function harmlessRansomNote(notes, magazineContent) {
  var magazineContentWords = magazineContent.split(' ')
  var wordsCount = {}
  magazineContentWords.forEach(word => {
    if (!wordsCount[word]) {
      wordsCount[word] = 0;
    }
    wordsCount[word]++;
  })
  var notesWords = notes.split(' ');
  var isNotePossible = true;
  notesWords.forEach(word => {
    if (wordsCount[word]) {
      wordsCount[word]--;
      if (wordsCount[word] < 0) {
        console.log('No more word: ' + word);
        return false;
      }
    }
    else {
      console.log('No word: ' + word);
      isNotePossible = false;
    }
  })
  return isNotePossible;
}

harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');
