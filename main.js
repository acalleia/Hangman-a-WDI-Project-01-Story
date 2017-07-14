$(function () {

console.log('script.js loaded successfully');

let $gameStart = $('.game')

$gameStart.one("click", function(){

  $('.game-start').fadeOut('slow');

  let theWords = ["death", "rainbow", "flay", "heart", "love", "maim", "murder", "anemia", "daniel"];

  let word = theWords[Math.floor(Math.random() * theWords.length)];

  let splitter = word.split('');

  let winCon = 0;

  let loseCon = 0;

  console.log(splitter);

  let $wordDiv = $('<div class = "letters"></div>').appendTo('body');

  for(let i = 0; i < splitter.length; i++){
    $(`<span class  = ${splitter[i]}>${splitter[i]}</span>`).appendTo('.letters');
  }

let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
"m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for(let i = 0; i < letters.length; i++) {
  let $lettersDiv = $(`<button class = "click-me" id = ${letters[i]}>`).text(letters[i]);
  $lettersDiv.appendTo('body');
  $lettersDiv.click(function(){
    for(let j = 0; j < splitter.length; j++) {
      let $splitWord = $(this).text();
    if (letters[i] == splitter[j]){
        winCon++;
        console.log('sweet');
        console.log($(this).text());
        $('.letters').find(`.${$splitWord}`).css("color", "white");

             if(winCon == splitter.length){
                 console.log('you Win!');
                 $('#win').css("display", "block")
                  }
    } else{
        loseCon++;
        if(loseCon == splitter.length*5){
          $('#lose').css("display", "block")
        }
        console.log('sux');
      }
    }
  })
}

});



 //if($(".letters span.selected").css("color", "white") == $(".letters span").css("color", "white")){
 //      console.log('you win bitch');
 //        } else {
 //        console.log('keep trying');
 //       }


});
//create a user input for username on localStorage
//for name and highscrore
//create a prototype to conctrol boolean values
