//step: 8

function handleKeyBoardButtonPress(event){

  //get player pressed
  const playerPress = event.key;
  

  //get computer pressed
  const currrentAlphabetElement =  document.getElementById('current-alphabet');
  const currentAlphabet = currrentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  //check is it match or not
  if(playerPress === expectedAlphabet){

    const currentScore= getTextElementValueById('current-score');
    const updatedScore = currentScore+1;
    setTextElementById('current-score',updatedScore);
    //remove background color 
    removeBackgroundColor(expectedAlphabet);
    contineuGame();

   /*  const currentScoreElement = document.getElementById('current-score');
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
 
    //increase the score
    const newScore = currentScore+1;
    // update score
    currentScoreElement.innerText=newScore;
    */
    // start a new round
    
  }else{
    const currentLife= getTextElementValueById('current-life');
    const updatedLife = currentLife-1;
    setTextElementById('current-life',updatedLife);

    if(updatedLife === 0){
      gameOver(); 
    }

    /* const currentScoreElement = document.getElementById('current-life');
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    const newScore = currentScore-1;
    currentScoreElement.innerText=newScore; */

  }

 }
 document.addEventListener('keyup',handleKeyBoardButtonPress);


// step: 06

function contineuGame(){

  //get the alphabet 
  const alphabet = getARandomNumber();

  //set the alphabet in html 
  const currentAlphabet = document.getElementById('current-alphabet');
  currentAlphabet.innerText = alphabet;

  //set background color of random key , get data from utility.js file
  setBackgroundColor(alphabet);
}


function play(){
  // step: 03
  hideElementById('homeScreen'); 
  hideElementById('finalScore'); 
// step: 04
  showElementById('playGround');
 

// set the score for play again
setTextElementById('current-life',5);
setTextElementById('current-score',0);
contineuGame();
}


// step: 09 Go to final page
function gameOver(){
       hideElementById('playGround') ;
      showElementById('finalScore');

      //
      const lastScore =  getTextElementValueById('current-score');
      setTextElementById('last-score',lastScore);
      /* const lastScoreElement = document.getElementById('last-score');
      lastScoreElement.innerText=lastScore; */

     

      const currentAlphabet = getElementTextById('current-alphabet');
      removeBackgroundColor(currentAlphabet);
}

