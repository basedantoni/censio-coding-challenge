/* Remove punctuation and extra white spaces
and converts each string to lower case */
const removePunctuations = paragraph => {
  return paragraph.replace(/[^\w\d ']/g, '')
          .split(' ')
          .reduce((accum, word) => word ? accum.concat(word.toLowerCase()) : accum, [])
}

/* Write a function that takes a paragraph of text and tells 
you what the most popular word is */
const popWord = paragraph => {
  let words = removePunctuations(paragraph);

  // Assign word as value and increment each time it occurs
  let wordDict = {}
  words.map(word => {
    if(!wordDict[word]) {
      wordDict[word] = 1;
    } else {
      wordDict[word] += 1
    }
  });

  let popularWord;
  let count = 0;
  for(let i = 0; i < words.length; i++) {
    if(wordDict[words[i]] > count) {
      count = wordDict[words[i]];
      popularWord = words[i];
    }
  }

  return popularWord
}

// Write a function that takes a string and returns in in reverse order
const reverse = string => {
  let reversed = [];
  string.split('')
    .map(word => reversed.unshift(word));

  return reversed.join('');
}

/* Write a function that takes a paragraph and returns
the largest word in the string */
const longestWord = paragraph => {
  let words = removePunctuations(paragraph)
  let longest = '';
  let longestLength = 0;

  for(let i = 0; i < words.length; i++) {
    if(words[i].length > longestLength) {
      longest = words[i];
      longestLength = words[i].length;
    }
  }

  return longest;
}