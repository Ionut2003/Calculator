let canvasS = document.getElementById("canvas");
let input= document.getElementById("inputCanvas");
let textSize = document.querySelector(".text");
let number = parseFloat(input.innerHTML);
let nr = 0;
let resultMemory = 0;
let result = 0;
let res = null;
let operatorName = '';
let listOfOperators = [];
let clearButton = document.getElementById("clear");
let pointButton = document.getElementById("point");
let operators = document.querySelectorAll(".operators");
let buttons = document.querySelectorAll(".b");
let number2 = 0;
let listOfNumbers = '';
buttons.forEach(button => button.addEventListener('click', e => {
	nr = 0;
for(let i of input.innerHTML){
	nr += 1;
	if(i === '+' || i === '-' || i === 'x' || i === '/') nr -= 1;
}
if(nr >= 13){
	
	buttons.forEach(button => button.removeEventListener('click'));
}
else{
 input.innerHTML += button.innerHTML;
 

}
}));

clearButton.addEventListener('click', f => {
	textSize.style.fontSize = "25px";
	while(input.firstChild){
		input.removeChild(input.firstChild);
	}
	listOfNumbers = '';
	number2 = 0;
});
pointButton.addEventListener('click', e => {
	let x = 0;
	for(let i of input.innerHTML) {
		x += 1;
	}
	console.log(x);
	for(let i of input.innerHTML){
		 if(i === '.' || input.innerHTML[0] === '') {
		 	ointButton.removeEventListener('click');
		 }
	}
		input.innerHTML += '.';
});
operators.forEach(operator => operator.addEventListener('click', e => {
if(operator === operators[0]){
	if(theFunction(input.innerHTML)){
		input.innerHTML = input.innerHTML.slice(1);
	}
	listOfNumbers += `${Math.abs(parseFloat(input.innerHTML))}+`;
	input.innerHTML = operator.innerHTML;
}
else if(operator === operators[1]){
	if(theFunction(input.innerHTML)){
		input.innerHTML = input.innerHTML.slice(1);
	}
	listOfNumbers += `${Math.abs(parseFloat(input.innerHTML))}-`;
	input.innerHTML = '-';

}
else if(operator === operators[2]){
	if(theFunction(input.innerHTML)){
		input.innerHTML = input.innerHTML.slice(1);
	}
	listOfNumbers += `${Math.abs(parseFloat(input.innerHTML))} * `;
	input.innerHTML = 'x';


}
else if(operator === operators[3]){
	if(theFunction(input.innerHTML)){
		input.innerHTML = input.innerHTML.slice(1);
	}
	listOfNumbers += `${Math.abs(parseFloat(input.innerHTML))}/`;

	input.innerHTML = '/';

}
else if(operator === operators[4]){
	input.innerHTML = input.innerHTML.slice(1);
	result = eval(`${listOfNumbers}${Math.abs(parseFloat(input.innerHTML))}`);

	resultMemory = result.toString();

	for(let i of resultMemory){
	nr += 1;
	}
	if(nr > 16) textSize.style.fontSize = "13px";
	nr = 0;
input.innerHTML = result;
	}}));
function theFunction(text){
	for(i of text){
		if(i === 'x' || i === '/') return true;
	}
	return false;
}
