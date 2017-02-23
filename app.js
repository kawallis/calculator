
var ac = document.getElementById('ac');
var squared = document.getElementById('squared');
var percent = document.getElementById('percent');
var divide = document.getElementById('divide');
var times = document.getElementById('times');
var minus = document.getElementById('minus');
var add = document.getElementById('add');
var equals = document.getElementById('equals');
var decimal = document.getElementById('decimal');
var number = document.getElementsByClassName('number');
var screen = document.getElementById('screen');
var arr = [];

var calculator = {
  result: []

};

// makes a click Handler for every number
for (var i = 0; i < number.length; i++) {
  number[i].addEventListener('click', numberHandler);
}

function numberHandler (event) {
  var num = event.target.textContent;
  arr.push(num);
  screen.textContent = arr.join('');
}

//equal buttons and eval
equals.addEventListener('click', equalsHandler);
function equalsHandler (event) {
  calculator.result.push(arr.join(''));
  var tots = calculator.result.join('');
  screen.textContent = eval(tots);
  calculator.result = [eval(tots)];
  arr = [eval(tots)];
}
// adds the addition feature
add.addEventListener('click', additionHandler);

function additionHandler (event) {
  calculator.result.push(arr.join(''));
  arr = [];
  screen.textContent = add.textContent;
  calculator.result.push(add.textContent);
}

//AC button code
ac.addEventListener('click', acHandler);
function acHandler (event) {
  arr = [];
  calculator.result = [];
  screen.textContent = '';
}