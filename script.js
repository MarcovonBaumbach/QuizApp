let pageCounter;
let question;
let currentDeck;
let points;
let param1;
let param2;
let param3;
let SUCCESS_AUDIO = new Audio('audio/success.mp3');
let FAIL_AUDIO = new Audio('audio/fail.mp3');
let FINISH_AUDIO = new Audio('audio/finish.mp3');


//Loading question-deck by selection in menu
function init(questionDeck) {
    document.getElementById('card-body').innerHTML = questionCoverHTML(questionDeck);
    pageCounter = 0;
    points = 0;
    progressBar();
}

//determine which Array of Questions should be displayed
function questionValidator(id) {
  if (id == 'HTML') {
    question = questionsHTML; 
  }
  if (id == 'CSS') {
    question = questionsCSS; 
  }
  if (id == 'Javascript') {
    question = questionsJS; 
  }
  if (id == 'JAVA') {
    question = questionsJAVA; 
  }
  currentDeck = id;
  showCurrentQuestion();
}

//checking if right answer is selected and playing audio and changing answer button colors
function answer(param) {
  buttonDisabled();
  if(param == question[pageCounter].right_answer){
    document.getElementById(param).classList.add('bg-green');
    document.getElementById('letter-' + param).classList.add('bg-green-letter');
    SUCCESS_AUDIO.play();
    points++;
  } else {
    document.getElementById(param).classList.add('bg-red');
    document.getElementById('letter-' + param).classList.add('bg-red-letter');
    document.getElementById(question[pageCounter].right_answer).classList.add('bg-green');
    document.getElementById('letter-' + question[pageCounter].right_answer).classList.add('bg-green-letter');
    FAIL_AUDIO.play();
  }
  //enabling Button to proceed to next question
  document.getElementById('next-button').disabled = false;
}

//calling the next page
function nextPage() {
  pageCounter++;
  progressBar();
  if(pageCounter < question.length) {
    showCurrentQuestion()
  } else {
    endCardHTML();
    FINISH_AUDIO.play();
  }
}

//disabling answer buttons after an answer has been selected
function buttonDisabled() {
  for(let i = 1; i < 5; i++){
  document.getElementById('answer_'+i).onclick = null;
  }
}

//Change menu font color to white wenn selected
function selectMENU(par1, par2, par3) {

  param1 = par1;
  param2 = par2;
  param3 = par3;
  
  document.getElementById(par1).classList.add('flex-menu-hover');
  document.getElementById(par2).classList.add('flex-menu-hover');
  document.getElementById(par3).classList.add('flex-menu-hover');
}

//Change menu font color to default when other menu is selected
function leaveMENU() {
  document.getElementById(param1).classList.remove('flex-menu-hover');
  document.getElementById(param2).classList.remove('flex-menu-hover');
  document.getElementById(param3).classList.remove('flex-menu-hover');
}

//resetting progress bar if on question deck cover, and moving it forward after each question
function progressBar() {
  if (pageCounter == 0){
    document.getElementById('progress-bar').style = `width: 0%`;
  } else {
    let percent = pageCounter/question.length;
    percent = Math.round(percent * 100);
    document.getElementById('progress-bar').style = `width: ${percent}%`;
  }
}
