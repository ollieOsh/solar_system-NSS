var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

console.log("regular: ",planets);

/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

planets.forEach(function(item){
	el.innerHTML += `<p>${item}</p>`;
})
// Use the map method to create a new array where the first letter of each planet is capitalized
var capitalized = planets.map(function(item){
	return item.charAt(0).toUpperCase() + item.substr(1);
})
console.log("capitalized: ", capitalized);
// Use the filter method to create a new array that contains planets with the letter 'e'
var filter = capitalized.filter(function(item){
	return item.indexOf('e') !== -1;
})
console.log("planets with an 'e': ", filter);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

console.log(words.reduce(function(a, b){
	return a + " " + b;
}))