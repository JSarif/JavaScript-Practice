let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a dazzling 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';
let longWord = 'breathtaking';

// sets count at 0
let count = 0;

// Iterates through each word of the story and changes count by +1 so it moves to next word
storyWords.forEach(word => {
  count++;
});

console.log(count);

// Iterates through story and if the word doesn't match unnecessaryWord it will return that word and filter out the unnecessaryWord
storyWords = storyWords.filter(word => {
  if (word !== unnecessaryWord) {
    return word;
  };
});

// Iterates through story and if word matches misspelledWord will return new string otherwise if it doesn't match it will return word
storyWords = storyWords.map(word => {
  return word === misspelledWord ? 'beautiful' : word;
});

// Sets variable as index number of the word that matches badWord
let badWordIndex = storyWords.findIndex(word => {
    return word === badWord;
});

// Accesses index 78 and re-assigns the string to 'really' 
storyWords[78] = 'really';

// Iterates through and returns true if the returned word lengths are the same or less than 10 characters
let lengthCheck = storyWords.every(word => {
  return word.length <= 10;
});

// Iterates through each word and console logs the word if it is more than 10 characters
storyWords.forEach(word => {
  word.length > 10 && console.log(word);
});

console.log(lengthCheck);

console.log(storyWords.join(' '));

console.log(misspelledWord.length)