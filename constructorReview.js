//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

function Animal(species, name, legs, color, foodArr) {
  this.species = species;
  this.name = name;
  this.legs = legs;
  this.color = color;
  this.foodArr = foodArr;
}


//Now create a maker person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

function personMaker(name, age, height, gender) {
  return {name: name, age: age, height: height, gender: gender}
}

//Create a animal array and a person array.

var animals  = [];
var persons = [];


//Create two instances of Animal and push those into your animal array

animals.push(new Animal('Bird', 'Eagle', 2, 'black', ['bugs', 'rodents', 'hawks', 'jelly']));
animals.push(new Animal('Owl', 'Barn Owl', 2, 'white', ['bugs', 'rodents']));

//Create two instances of person and push those into your person array.

persons.push(personMaker('Jay', 20, '6\'2', 'male'), personMaker('Ali', 30, '5\'3', 'female'));

//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

Animal.prototype.eat = function() {
  var whatToEat = Math.floor(Math.random() * this.foodArr.length);
  alert(this.name + " ate " + this.foodArr[whatToEat]);
}

//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?

  no because if I add something to the person maker function, I would have to add it to the function itself then re assign the persons to the persons array again so that it would include my change.

/*
  1) What happens when yoßu use the 'new' keyword to call a Constructor function?
  2) What's a good way to describe the keyword 'this'
  3) Can a normal function which creates an object and then returns that object use the prototype?
  4) What happens if you forget to use 'new' when calling a constructor?
*/
1. the 'new' keyword will store the prototypes of the constructor to a variable
2. this is a pronoun that will represent every object that is being uses by the constructor
3. No
4. It will not work unless you make a new agnostic constructor