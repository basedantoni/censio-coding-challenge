let paragraph = `
  I think one of the hardest things in the world for people to do is to love themselves. If
  you loved yourself you would take better care of yourself, and respect the things around
  you because you respect yourself. Even the condition of your home whether clean or
  dirty can reveal how much you love yourself. Just don't expect someone else to give
  what you neglect to give yourself which is love. That's why relationships don't work out
  so well most times.
`;

let string = 'The wanderlust is ever so abundant inside.'

const popWord = paragraph => {

}

// Reverse but needs to fix punctuation and capital letters
const reverse = string => {
  let reversed = [];
  string.split(' ')
    .map(word => reversed.unshift(word));

  return reversed.join(' ');
}

const foo = string => {

}

const longestWord = paragraph => {
  
}

console.log(reverse(string))