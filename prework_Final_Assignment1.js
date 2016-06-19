
// Creating a variable called cards that will hold the elements of array
var cards = ['queen', 'queen', 'king', 'king'];

  /*
  Creating a variable that holds the output of cardsInPlay
  function as it gets executed
  */
var cardsInPlay = [];

/*
 Using variable 'borad' and id 'game-board' created in HTML file
 to locate and access 'board' with id 'game-board'
*/
var board = document.getElementById('game-board');

//Creating a function to develop board to use it
function createBoard() {

/*
Creating 'div' element for 'cardElement' variable inside
'createBoard()' function & looping through 'div' element:

  Step1:Create divs for cardElement
  Step2:Add class 'card' that has been created in HTML file & then
        used in CSS file for styling
  Step3:Setting an attribute 'data-card.'
        'data-card'is the argument that sets
        non-styled-data('king', 'queen' etc.)
  Step4:Loop through each element in 'cards' array
        and store values from 'data-card' attribute
 */
for (var i=0; i<cards.length; i++) {
    var cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);

 /*
 cardElement adopts a method 'addEventListener'
 addEventListener has two arguments:(click, isTwoCards)
 */
 cardElement.addEventListener('click', isTwoCards);

 /*
Appending output from 'createElement' function that
holds output from variable 'div' as a parameterto the 'board' element
 */
    board.appendChild(cardElement);
    board.appendChild(cardElement);

  }

}

/*
Extratct Data 1:

  Creating and using function 'isTwoCards()' to validate
  the expected and actual results:
    [Note: We've created a variable named cardsInPlay
    that stores value in an empty array]

    Step1:Using 'push' method to add the output values stored in
    empty array(actual value)
    Step2:Using 'this.getAttribute' method to extract data that
    results from the method-output when the function is called (
    'getAttribute' has an argument named 'data-card', which extracts
    non-image data). 'this' makes the program to understand that
    the gobal 'getAttribute()' === local 'getAttribute()'
    Step3:Using console.log to display data in the console output
*/
function isTwoCards() {

  cardsInPlay.push(this.getAttribute('data-card'));

  console.log(this.getAttribute('data-card'));


/*
Extract Data 2:
    With the console output now we can
    After extracting the values we are attaching the data to the
    relevant element in source file
*/
  if (this.getAttribute('data-card') === 'king') {
    this.innerHTML = "<img src='https://drive.google.com/file/d/0B2_J-1zoxJQiZjh3bi1seFBBczQ/view?usp=sharing'>";
  }

   else {

    this.innerHTML = "<img src='https://drive.google.com/file/d/0B2_J-1zoxJQiNE0xOWxWaWp6Rjg/view?usp=sharing'>";

  }

/*Validating Numebr of cards 1:
    Is there 2 cards in boards to play?
*/
  if (cardsInPlay.length === 2) {

/*Validating Cards 2:
    Is passed cards matches each other?
*/
    isMatch(cardsInPlay);

//Empty the board for next turn
    cardsInPlay = [];

  }
}

/*Output:

    If both cards are the same, show "You found a match!"
    Else, show "Sorry, try again."
*/
function isMatch(cards) {

  // alert winning message

  if (cards[0] === cards[1]) {

    alert("You found a match!");

  }

  else {

    alert("Sorry, try again.");

  }

}

createBoard();
