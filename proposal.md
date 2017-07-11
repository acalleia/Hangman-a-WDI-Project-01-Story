 Alexander Calleia July 11, 2017

# Hangman: A Dark Day Proposal

## What is Hangman: A Dark Day?

I would like to create a classic hangman game. The player will input letters to try and spell out a hidden word but they must guess the letters carefully or they will lose. I wanted to make the game because it's game rules are well defined. I hope to finish the game logic early to allow myself time to really develop the motifs of the 'Dark Day' theme.  

## Wireframe

## <img src="images/IMG_3537.JPG">

## Initial thoughts on game structure

I expect to encounter some difficulties creating a variable of arrays or divs to show up when a random word is picked from my word library. I also may run in to trouble animating everything I want to.

## Phases of Completion

Phase 0 - Game Setup
    
    Create library of words and make a way to pull a word from it randomly and subsequently broken into an array of letters. 

    make container div holding image of hanged man.

    make divs that 'cover' hanged man.

    Have array of letters be represented as hidden p tags inside of divs that have border bottom to imitate underlined letters.

    Create 26 divs for each letter with a toggle function event listener on click to check the array of letters for a match.

Phase 1- Game Logic
    
    Once a letter is matched it should:
        reveal the hidden p tag;
        remove the underlined div;
        
        change the letter div itself:
            remove event listener;
            look 'spent'; 

    If the letter does not match:
        remove a 'cover' div;

        change the letter div itself:
            remove event listener;
            look 'spent';

Phase 2- Win Conditions
    If word is revealed:
        display win image;
        prompt to play again;

    If is hanged man is revealed:
        zoom in on hanged man;
        prompt to play again;

Phase 3- Bonus

    Create intro animations;
    animate fire;
    animate tree;
    make ALL the pictures;



## Links and Resources

CSS the book any book 
