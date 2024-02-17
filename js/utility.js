// step: 01
function hideElementById(elementId){ 
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}
// step: 01
function showElementById(elementId){
  const element=document.getElementById(elementId);
  element.classList.remove('hidden')
}
// step: 05
function getARandomNumber(){
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.split('');
  
  const randomNumber= Math.random()*25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];

  return alphabet;
}

//keyboard background color set and remove

function setBackgroundColor(elementId){
const selectElement = document.getElementById(elementId);
selectElement.classList.add('bg-orange-400');
}
function removeBackgroundColor(elementId){
const selectElement = document.getElementById(elementId);
selectElement.classList.remove('bg-orange-400');
}


// common function for taking score element

function getTextElementValueById(elementId){
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}


function setTextElementById(elementId,value){
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementId){
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}