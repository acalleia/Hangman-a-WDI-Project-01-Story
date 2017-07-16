$(function () {

console.log('script.js loaded successfully');

let $gameStart = $('.game')

$('.startButton').hover(function(){
  $('.startButton').attr(
    'src',"images/Start-Green.png"
  )},
  function(){
    $('.startButton').attr(
    'src', 'images/Start-Button.png'
  );
})


$gameStart.one("click", function(){

  $('.game-start').fadeOut('slow');


  let theWords = ["DEATH", "REIGN", "FLAY", "MANGY", "SLAUGHTER", "HERETIC", "MURDER AGAIN", "AVENGE", "JUSTIFY", "DISASTER",
  "DUNGEON", "PESTILENCE"];

  let word = theWords[Math.floor(Math.random() * theWords.length)];

  let splitter = word.split('');

  let winCon = 0;

  let loseCon = 0;

  console.log(splitter);

  let $wordDiv = $('<div class = "letters"></div>').appendTo('body');

  for(let i = 0; i < splitter.length; i++){
      let $wordVar = $('<div class= "underline">').appendTo('.letters');
    $('<span>',{
      class: `${splitter[i]}`,
      text: `${splitter[i]}`
    }).appendTo($wordVar);
  }

let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

for(let i = 0; i < letters.length; i++) {
  let $lettersDiv = $(`<button class = ${letters[i]}>`).text(letters[i]);
  $lettersDiv.appendTo('body');
  $lettersDiv.one("click", function(){
    $lettersDiv.css({
      backgroundColor: "#42bb93",
      color: "black"});
    for(let j = 0; j < splitter.length; j++) {
      let $splitWord = $(this).text();
    if (letters[i] == splitter[j]){
        winCon++;
          loseCon++;
          console.log(loseCon);
        console.log('sweet');
        console.log($(this).text());
        $('.underline').find(`.${$splitWord}`).css("visibility", "visible");

        for(let j=0; j<splitter.length; j++){
          if (letters[i] != splitter[j]){
            loseCon++;
          }
        }

             if(winCon == splitter.length){
                 console.log('you Win!');
                 $('#win').css("display", "block")
                  }
    } else{
        loseCon--;

              if(loseCon == splitter.length*5*-1){
                 $('#lose').css("display", "block")
               }
        console.log('sux');
        console.log(loseCon);
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
