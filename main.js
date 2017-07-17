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

$('.resetButton').click(function() {
  window.location.reload();
});

$gameStart.one("click", function(){

  $('.game-start').fadeOut('slow');

  let $storyButton = $('#story');
  $storyButton.one("click", function(){
    $('#story').fadeOut(2000)
  });

  let theWords = ["DEATH", "REIGN", "FLAY", "MANGY", "SLAUGHTER", "HERETIC", "MURDER", "AVENGE", "JUSTIFY",
  "DISASTER", "DUNGEON", "PESTILENCE"];

  let word = theWords[Math.floor(Math.random() * theWords.length)];

  let splitter = word.split('');

  let winCon = 0;

  let loseCon = 0;

  console.log(splitter);

  let $wordDiv = $('<div class = "letters"></div>').appendTo('.container');

  for(let i = 0; i < splitter.length; i++){
      let $wordVar = $('<div class= "underline">').appendTo('.letters');
    $('<span>',{
      class: `${splitter[i]}`,
      text: `${splitter[i]}`
    }).appendTo($wordVar);
  }

let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



let $lettterButtons = $('<div class= "lettterbuttons">').appendTo('.container')

for(let i = 0; i < letters.length; i++) {

  letters.Map = 0;

  let $lettersDiv = $(`<button class = ${letters[i]}>`).text(letters[i]);

  $lettersDiv.appendTo('.lettterbuttons');
};

  $('.lettterbuttons button').click( function(){

    $(this).css({
      backgroundColor: "#42bb93",
      color: "white"});

    for(let j = 0; j < splitter.length; j++) {
      let $splitWord = $(this).text();

      if ($(this).text() === splitter[j]){
        winCon++;
        letters.Map += 1;
        console.log(letters.Map);
         // console.log(loseCon);
        // console.log('sweet');
        console.log($(this).text());
        $('.underline').find(`.${$splitWord}`).css("visibility", "visible");
          //
        // for(let j=0; j<splitter.length; j++){
        //   if (letters[i] != splitter[j]){
        //     loseCon++;
        //   }
        // }

             if(winCon == splitter.length){
                 console.log('you Win!');
                 $('#win').css("display", "block")
                  }
    }
    }

   if(letters.Map < 1) {
        loseCon++;
        letters.Map -= 1;
          console.log(loseCon);
          console.log(letters.Map);
          // letters.Changes = 0;
          if (loseCon == 1) {
            $('.hung').css("opacity", ".05");
          }

          if (loseCon == 2) {
            $('.hung').css("opacity", ".1");
          }

          if (loseCon == 3) {
            $('.hung').css("opacity", ".3");
          }

          if (loseCon == 4) {
            $('.hung').css("opacity", ".5");
          }

          if(loseCon == 5){
                 $('#lose').css("display", "block");

               };
            // if( (splitter.length % loseCon) == 5 ){
            //
            //   console.log('opacity');
            // }
// loseCon == splitter.length*5*-1)

        console.log('sux');

      }
      letters.Map = 0;

  })


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
