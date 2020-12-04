var randomTexts = 
["ЗДРАВСТВУЙТЕ", 
"МАГАДАН", 
"HELP", 
"ЕДУ В МАГАДАН", 
"ДЕД МОРОЗ", 
"НОВЫЙ ГОД"];

function randomInteger(max)
{
return Math.floor(Math.random() * Math.floor(max));
}

function generate(buttonGenerate, buttonClear, block)
{
buttonGenerate.disabled = true;

var randomText = randomInteger(randomTexts.length);
var randomTheme = randomInteger(6);

block.className += " display_" +randomTheme;

var text = document.createElement("span");
text.innerHTML = randomTexts[randomText];
block.appendChild(text);

buttonClear.disabled = false;
}

function clear(buttonGenerate, buttonClear, block)
{
buttonClear.disabled = true;

block.className = "display";

while(block.firstChild){
block.removeChild(block.lastChild);
}

buttonGenerate.disabled = false;
}

window.onload = function() {
var buttonGenerate = document.getElementById("generate");
var buttonClear = document.getElementById("clear");
var displayBlock = document.getElementsByClassName("display")[0];
buttonGenerate.addEventListener("click", () => generate(buttonGenerate, buttonClear, displayBlock));
buttonClear.addEventListener("click", () => clear(buttonGenerate, buttonClear, displayBlock));
}