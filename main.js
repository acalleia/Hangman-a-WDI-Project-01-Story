$(function () {



console.log('script.js loaded successfully');

  let theWords = ["death", "rainbow", "flay", "heart", "love", "maim", "murder", "anemia", "daniel"];

  let word = theWords[Math.floor(Math.random() * theWords.length)];

  let splitter = word.split('');

  console.log(splitter);

  let $wordDiv = $('<div class = "letters"></div>').appendTo('body');

  for(let i = 0; i < splitter.length; i++){
    $(`<span>${splitter[i]}</span>`).appendTo('.letters');
  }

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for(let i = 0; i < letters.length; i++) {
  let $lettersDiv = $(`<button class = ${letters[i]}>`).text(letters[i]);
  $lettersDiv.appendTo('body');
  $lettersDiv.click(function(){
    for(let j = 0; j < splitter.length; j++) {
    if (letters[i] == splitter[j]){
        console.log('sweet');
      } else{
        console.log('sux');
      }
    }
  })
  console.log(letters[i]);
}





});
//create a user input for username on localStorage
//for name and highscrore
