var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

function last(array) {
	return array[array.length - 1];
}



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

for (var i = 0; i < evenArray.length; i++) {
	var check = evenArray[i] % 2;
	if (check != 0) {
		evenArray.splice(i, 1);
		i--;
	}
}

or 

for (var i = evenArray.length; i >= 0; i--) {
	var check = evenArray[i] % 2;
	if (check != 0) {
		evenArray.splice(i, 1);
	}
}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var checkNumber = function(func, array) {
	var randomNumber = getRandomArbitrary();
	var verify = false;
	for (var i = 0; i < array.length; i++) {
		if (randomNumber === array[i]) {
			verify = true;
		}
	}
	alert(verify);
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

second = first.slice(0);
second.push(6, 7);

alert(first) //[1,2,3,4,5];
alert(second) //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

HELP (Is there an easier way to do this?)

function longest(str) {
	var counter = 0;
	var longestWord = "";
	for (var i = 0; i < str.length; i++) {
		if (str[i] === " ") {
			var word = str.slice(counter, i)
			counter = ++i;
			if (word.length > longestWord.length)
			longestWord = word;
		}
	}
	return longestWord;
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

function capitalize(str) {
	var newStr = "";
	for (var i = 0; i < str.length; i++) {
		if (str[i] === " ") {
			var letter = str.slice(i + 1, i + 2);
			letter = letter.toUpperCase();
			newStr = newStr + " " + letter;
			i++;	
		}
		else {
			var letter = str.slice(i, i + 1);
			newStr = newStr + letter;
		}
	}
	return newStr;
}

myPoem = capitalize(myPoem);


function capitalize(str) {


}

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

function vowelCounter(str) {
	var counter = 0;
	for (var i = 0; i < str.length; i++){
		switch (str[i]) {
			case "e":
				counter++
				break;
			case "i":
				counter++
				break;
			case "a":
				counter++
				break;
			case "o":
				counter++
				break;
			case "u":
				counter++
				break;				
		}	
	}
	console.log(counter);
}
