let questionsHTML = [
  {
      'question': 'Wer hat HTML erfunden?',
      'answer_1': 'Linus Torvalds',
      'answer_2': 'Steve Wozniak',
      'answer_3': 'Tim Berners-Lee',
      'answer_4': 'Bill Gates',
      'right_answer': 'answer_3'
  },
  {
      'question': 'Was ist das Tag für fette Schrift?',
      'answer_1': `a`,
      'answer_2': `b`,
      'answer_3': `c`,
      'answer_4': `d`,
      'right_answer': 'answer_2'
  },
  {
      'question': 'Welcher Dateiname wird für die Startseite verwendet?',
      'answer_1': `mainpage.html`,
      'answer_2': `index.html`,
      'answer_3': `main.index`,
      'answer_4': `main.html`,
      'right_answer': 'answer_2'
  },
  {
      'question': 'Mit welchem Tag fügt man Bilder ein?',
      'answer_1': `img src=""`,
      'answer_2': `img link=""`,
      'answer_3': `img url=""`,
      'answer_4': `img href=""`,
      'right_answer': 'answer_1'
  },
  {
      'question': 'Was ist ein HTML Begriff?',
      'answer_1': 'Jahr',
      'answer_2': 'Monat',
      'answer_3': 'Woche',
      'answer_4': 'Tag',
      'right_answer': 'answer_4'
  }
];

let questionsCSS = [
  {
      'question': 'Wie entfernt man einen Unterstrich?',
      'answer_1': 'display: none;',
      'answer_2': 'text-decoration: none;',
      'answer_3': 'text-decoration: underline;',
      'answer_4': 'transparency: 100%;',
      'right_answer': 'answer_2'
  },
  {
      'question': 'Für was steht die Abkürzung CSS?',
      'answer_1': 'Color Style Sheets',
      'answer_2': 'Cascading Style Sheets',
      'answer_3': 'Create Style Sheets',
      'answer_4': 'Communicative Style Sheets',
      'right_answer': 'answer_2'
  },
  {
      'question': 'Welche Eigenschaft ändert die Schriftgröße?',
      'answer_1': 'font-size',
      'answer_2': 'text-size',
      'answer_3': 'font-height',
      'answer_4': 'text-height',
      'right_answer': 'answer_1'
  }, 
  {
      'question': 'Wie ändert man die Hintergrundfarbe?',
      'answer_1': 'bg-color',
      'answer_2': 'canvas-color',
      'answer_3': 'change-background',
      'answer_4': 'background-color',
      'right_answer': 'answer_4'
  }, 
  {
      'question': 'Welche Eigenschaft ändert die Textfarbe?',
      'answer_1': 'text-color',
      'answer_2': 'color',
      'answer_3': 'font-color',
      'answer_4': 'color-rgb',
      'right_answer': 'answer_2'
  },
  {
      'question': 'Welche Eigenschaft ändert die Schriftart?',
      'answer_1': 'font-style',
      'answer_2': 'font-family',
      'answer_3': 'text-style',
      'answer_4': 'text-family',
      'right_answer': 'answer_2'
  },
  {
      'question': 'Welche Option ist ein korrekter CSS-Klassenname?',
      'answer_1': '#example',
      'answer_2': 'example[]',
      'answer_3': 'example()',
      'answer_4': '.example',
      'right_answer': 'answer_4'
  }   
];

let questionsJS = [
  {
      'question': 'Welches Tag wird zum einbinden von Javascript verwendet?',
      'answer_1': 'javascript',
      'answer_2': 'script',
      'answer_3': 'code',
      'answer_4': 'js',
      'right_answer': 'answer_2'
  },
  {
      'question': 'Wie öffnet man im Browser ein "alert-window"?',
      'answer_1': 'alert()',
      'answer_2': 'alert-box()',
      'answer_3': 'alert.window()',
      'answer_4': 'alert.prompt()',
      'right_answer': 'answer_1'
  },
  {
      'question': 'Wie deklariert man eine Funktion?',
      'answer_1': 'newFunction = [];',
      'answer_2': 'newFunction();',
      'answer_3': 'function newFunction()',
      'answer_4': 'declare:newFunction()',
      'right_answer': 'answer_3'
  }, 
  {
      'question': 'Wie ruft man eine Funktion auf?',
      'answer_1': 'newFunction();',
      'answer_2': 'execute newFunction();',
      'answer_3': 'newFunction(execute);',
      'answer_4': 'execute(newFunction())',
      'right_answer': 'answer_1'
  }, 
  {
      'question': 'Wie sieht ein korrektes if-Statement aus?',
      'answer_1': 'if i = 5',
      'answer_2': 'if [i = 5]',
      'answer_3': 'if i == 5',
      'answer_4': 'if (i == 5)',
      'right_answer': 'answer_4'
  },
  {
      'question': 'Wie deklariert man einen Array?',
      'answer_1': 'myArray = 1, 2, 3;',
      'answer_2': 'myArray = new{1, 2, 3};',
      'answer_3': 'myArray = [1, 2, 3];',
      'answer_4': 'myArray = newArray of 1, 2, 3;',
      'right_answer': 'answer_3'
  } 
];

let questionsJAVA = [
  {
      'question': 'Welcher Datentyp wird für Textvariablen benutzt?',
      'answer_1': 'string',
      'answer_2': 'txt',
      'answer_3': 'Text',
      'answer_4': 'String',
      'right_answer': 'answer_4'
  },
  {
    'question': 'Wie bestimmt man die länge eines Strings?',
    'answer_1': 'length()',
    'answer_2': 'getLength()',
    'answer_3': 'objSize()',
    'answer_4': 'size()',
    'right_answer': 'answer_1'
  },
  {
    'question': 'Wie ändert man einen String in Großbuchstaben?',
    'answer_1': 'upperCase()',
    'answer_2': 'toUpperCase()',
    'answer_3': 'fontSize()',
    'answer_4': 'toFontSize()',
    'right_answer': 'answer_2'
  },
  {
    'question': 'Wie kreiert man ein neues Objekt einer Klasse?',
    'answer_1': 'myClass myObject = new myClass()',
    'answer_2': 'myObject = new myClass()',
    'answer_3': 'myClass = new myObject()',
    'answer_4': 'myObject = new object of myClass()',
    'right_answer': 'answer_1'
  },
  {
    'question': 'Wie gibt man einen Wert innerhalb einer Methode zurück?',
    'answer_1': 'result',
    'answer_2': 'get',
    'answer_3': 'set',
    'answer_4': 'return',
    'right_answer': 'answer_4'
  }
];

let pageCounter;
let question;
let currentDeck;
let points;
let param1;
let param2;
let param3;

//Loading question-deck by selection in menu
function init(questionDeck) {
    document.getElementById('card-body').innerHTML = questionCoverHTML(questionDeck);
    pageCounter = 0;
    points = 0;
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

//checking if right answer is selected and changing answer button colors
function answer(param) {
  buttonDisabled();
  if(param == question[pageCounter].right_answer){
    document.getElementById(param).classList.add('bg-green');
    document.getElementById('letter-' + param).classList.add('bg-green-letter');
    points++;
  } else {
    document.getElementById(param).classList.add('bg-red');
    document.getElementById('letter-' + param).classList.add('bg-red-letter');
    document.getElementById(question[pageCounter].right_answer).classList.add('bg-green');
    document.getElementById('letter-' + question[pageCounter].right_answer).classList.add('bg-green-letter');
  }
  //enabling Button to proceed to next question
  document.getElementById('next-button').disabled = false;
}

//calling the next page
function nextPage() {
  pageCounter++;
  if(pageCounter < question.length) {
    showCurrentQuestion()
  } else endCardHTML();
}

//disabling answer buttons after an answer has been selected
function buttonDisabled() {
  for(let i = 1; i < 5; i++){
  document.getElementById('answer_'+i).onclick = null;
  }
}


//----------------HTML--TEMPLATES-----------------------------------------------------------------

//return frontcover HTML of question-deck
function questionCoverHTML(questionDeck) {
  return `
      <div class="card-body text-center background-img top-padding">
        <h2 class="card-title">Welcome To <br> The Awesome ${questionDeck} Quiz</h2>
        <p class="card-text font-size-text">Ready for the challenge?</p>
        <button class="btn btn-primary button-position" onclick="questionValidator('${questionDeck}')" type="submit">START NOW <img src="img/White arrow right.png"></button>
      </div>
  `;
}

//generating HTML of individual questions
function showCurrentQuestion() {
  document.getElementById('card-body').innerHTML = `
  <div class="card-body text-center background-question-container">
          <h4 class="card-title">${question[pageCounter].question}</h4>
          <div id="answer_1" class="card card-style mb-2" onclick="answer('answer_1')">
            <div class="card-flex ">
              <div id="letter-answer_1" class="letter-div"><b>A</b></div>
              ${question[pageCounter].answer_1}
            </div>
          </div>
          <div id="answer_2" class="card card-style mb-2" onclick="answer('answer_2')">
            <div class="card-flex ">
              <div id="letter-answer_2" class="letter-div"><b>B</b></div>
              ${question[pageCounter].answer_2}
            </div>
          </div>
          <div id="answer_3" class="card card-style mb-2" onclick="answer('answer_3')">
            <div class="card-flex ">
              <div id="letter-answer_3" class="letter-div"><b>C</b></div>
              ${question[pageCounter].answer_3}
            </div>
          </div>
          <div id="answer_4" class="card card-style mb-2" onclick="answer('answer_4')">
            <div class="card-flex ">
              <div id="letter-answer_4" class="letter-div"><b>D</b></div>
              ${question[pageCounter].answer_4}
            </div>
          </div>
          <div class="flex-display">
            <span>Frage <b>${pageCounter + 1}</b> von <b>${question.length}</b> </span>
            <button id="next-button" class="btn btn-primary" onclick="nextPage()" type="submit" disabled>Nächste Frage</button>
          </div>
      </div>
  `;
}

//generating result page HTML of question-deck
function endCardHTML() {
document.getElementById('card-body').innerHTML = `
    <div class="card-body text-center background-question-container">
      <img class="result-image" src="img/brain result.png">
      <h5 class="card-title"><b>COMPLETE<br>${currentDeck} QUIZ</b></h5>
      <h5 class="card-title color-orange">YOUR SCORE</h5>
      <h5 class="card-title">${points}/${question.length}</h5>
      <button class="btn btn-primary" onclick="init('${currentDeck}')" type="submit">REPLAY</button>
    </div>     
    <img class="trophy" src="img/trophy.png">
`;
}

//Change menu font color to white
function selectMENU(par1, par2, par3) {

  param1 = par1;
  param2 = par2;
  param3 = par3;
  
  document.getElementById(par1).classList.add('flex-menu-hover');
  document.getElementById(par2).classList.add('flex-menu-hover');
  document.getElementById(par3).classList.add('flex-menu-hover');
}

//Change menu font color to default
function leaveMENU() {
  document.getElementById(param1).classList.remove('flex-menu-hover');
  document.getElementById(param2).classList.remove('flex-menu-hover');
  document.getElementById(param3).classList.remove('flex-menu-hover');
}

