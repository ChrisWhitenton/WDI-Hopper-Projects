
//define words to choose from
var words = ['Snitch', 'Harry', 'Howler'];
//chooses random word from the array words
var randomWord = words[Math.floor(Math.random()* words.length)];

//empty array to store the guesses
var answerArray = [];
//global variables
var string;

$(function functionName() {


//fill the answer array with underscores using a function
var startOfGame = function() {
  for (var i=0; i < word.length; i++)
    answerArray[i] = '_';

};

  string = answerArray.join(' ');
  $('answer').innerHTML = string;

})
