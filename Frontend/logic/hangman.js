window.onload = function () {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

var categories;         // Array of topics
var chosenCategory;     // Selected catagory
var getHint ;          // Word getHint
var word ;              // Selected word
var guess ;             // Geuss
var geusses = [ ];      // Stored geusses
var lives ;             // Lives
var counter ;           // Count correct geusses
var space;              // Number of spaces in word '-'


// Get elements
var showLives = document.getElementById("mylives");
var showCatagory = document.getElementById("scatagory");
var getHint = document.getElementById("hint");
var showClue = document.getElementById("clue");



// create alphabet ul
var buttons = function () {
myButtons = document.getElementById('buttons');
letters = document.createElement('ul');



for (var i = 0; i < alphabet.length; i++) {
letters.id = 'alphabet';
list = document.createElement('li');
list.id = 'letter';
list.innerHTML = alphabet[i];
check();
myButtons.appendChild(letters);
letters.appendChild(list);
}
}


// Select Catagory
var selectCat = function () {
if (chosenCategory === categories[0]) {
catagoryName.innerHTML = "The Chosen Category Electronics/Computers/Audio";
} else if (chosenCategory === categories[1]) {
catagoryName.innerHTML = "The Chosen Category Is Household";
} else if (chosenCategory === categories[2]) {
catagoryName.innerHTML = "The Chosen Category Is Jobs";
} else if (chosenCategory === categories[3]) {
  catagoryName.innerHTML = "The Chosen Category Is Objects";
}
}

// Create geusses ul
result = function () {
wordHolder = document.getElementById('hold');
correct = document.createElement('ul');

for (var i = 0; i < word.length; i++) {
correct.setAttribute('id', 'my-word');
guess = document.createElement('li');
guess.setAttribute('class', 'guess');
if (word[i] === "-") {
guess.innerHTML = "-";
space = 1;
} else {
guess.innerHTML = "_";
}

geusses.push(guess);
wordHolder.appendChild(correct);
correct.appendChild(guess);
}
}

// Show lives
comments = function () {
showLives.innerHTML = "You have " + lives + " lives";
if (lives < 1) {
showLives.innerHTML = "Game Over";
}
for (var i = 0; i < geusses.length; i++) {
if (counter + space === geusses.length) {
showLives.innerHTML = "You Win!";
}
}
}

// Animate man
var animate = function () {
var drawMe = lives ;
drawArray[drawMe]();
}


// Hangman
canvas =  function(){

myStickman = document.getElementById("stickman");
context = myStickman.getContext('2d');
context.beginPath();
context.strokeStyle = "#fff";
context.lineWidth = 2;
};

head = function(){
myStickman = document.getElementById("stickman");
context = myStickman.getContext('2d');
context.beginPath();
context.arc(60, 25, 10, 0, Math.PI*2, true);
context.stroke();
}

draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {

context.moveTo($pathFromx, $pathFromy);
context.lineTo($pathTox, $pathToy);
context.stroke(); 
}

frame1 = function() {
draw (0, 150, 150, 150);
};

frame2 = function() {
draw (10, 0, 10, 600);
};

frame3 = function() {
draw (0, 5, 70, 5);
};

frame4 = function() {
draw (60, 5, 60, 15);
};

torso = function() {
draw (60, 36, 60, 70);
};

rightArm = function() {
draw (60, 46, 100, 50);
};

leftArm = function() {
draw (60, 46, 20, 50);
};

rightLeg = function() {
draw (60, 70, 100, 100);
};

leftLeg = function() {
draw (60, 70, 20, 100);
};

drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


// OnClick Function
check = function () {
list.onclick = function () {
var geuss = (this.innerHTML);
this.setAttribute("class", "active");
this.onclick = null;
for (var i = 0; i < word.length; i++) {
if (word[i] === geuss) {
  geusses[i].innerHTML = geuss;
  counter += 1;
} 
}
var j = (word.indexOf(geuss));
if (j === -1) {
lives -= 1;
comments();
animate();
} else {
comments();
}
}
}


// Play
play = function () {
categories = [
["laptop", "printer", "smartphone", "mouse", "headphone", "loudspeaker", "television"],
["door", "carpet", "table", "boiler", "wardrobe"],
["mathematician", "zoologist", "referee", "teacher", "nurse"],
["shovel", "clipboard", "microscope", "wallet", "water-bottle"]
];

chosenCategory = categories[Math.floor(Math.random() * categories.length)];
word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
word = word.replace(/\s/g, "-");
console.log(word);
buttons();

geusses = [ ];
lives = 10;
counter = 0;
space = 0;
result();
comments();
selectCat();
canvas();
}

play();

// Hint

hint.onclick = function() {

hints = [
["A computer that is portable and suitable for use while travelling", "a machine for printing text or pictures, especially one linked to a computer", "A mobile phone that performs many of the functions of a computer, typically having a touchscreen interface, Internet access, and an operating system capable of running downloaded apps", "A small handheld device which is moved across a mat or flat surface to move the cursor on a computer screen", "A pair of earphones joined by a band placed over the head, for listening to audio signals such as music or speech", "An apparatus that converts electrical impulses into sound, typically as part of a public address system", "A device with a screen for receiving television signals"],
["A item place at the entrance of the house and the rooms", "A floor covering made from thick woven fabric", "a piece of furniture with a flat top and one or more legs, providing a level surface for eating, writing, or working at", "A fuel-burning apparatus or container for heating water", "A large, tall cupboard or recess in which clothes may be hung or stored"],
["An expert in or student of mathematics", "An expert in or student of the behaviour, physiology, classification, and distribution of animals", "An official who watches a game or match closely to ensure that the rules are adhered to and (in some sports) to arbitrate on matters arising from the play", "A person who teaches, especially in a school", "A person trained to care for the sick or infirm, especially in a hospital"],
["A tool resembling a spade with a broad blade and typically upturned sides, used for moving coal, earth, snow, or other material", "A small board with a spring clip at the top, used for holding papers and providing support for writing", "An optical instrument used for viewing very small objects, such as mineral samples or animal or plant cells, typically magnified several hundred times", "A water bottle is a container that is used to hold water, liquids or other beverages for consumption"]
];

var catagoryIndex = categories.indexOf(chosenCategory);
console.log(catagoryIndex)
var hintIndex = chosenCategory.indexOf(word);
console.log(hintIndex)
showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
};

// Reset

document.getElementById('reset').onclick = function() {
correct.parentNode.removeChild(correct);
letters.parentNode.removeChild(letters);
showClue.innerHTML = "";
context.clearRect(0, 0, 400, 400);
play();
}


}

