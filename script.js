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

let pageCounter;
let question;

//Loading question-deck by selection in menu
function init(questionDeck) {
    document.getElementById('card-body').innerHTML = questionCoverHTML(questionDeck);
    pageCounter = 0;
}

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

//determine which Array of Questions should be displayed
function questionValidator(id) {
  if (id == 'HTML') {
    question = questionsHTML; 
  }
  if (id == 'CSS') {
    question = questionsCSS; 
  }
  if (id == 'JS') {
    question = questionsJS; 
  }
  if (id == 'JAVA') {
    question = questionsJAVA; 
  }
  showCurrentQuestion();
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
              <span>Frage ${pageCounter + 1} von ${question.length} </span>
              <button id="next-button" class="btn btn-primary" onclick="nextPage()" type="submit" disabled>Nächste Frage</button>
            </div>
        </div>
    `;
}

//checking if right answer is selected
function answer(param) {
  if(param == question[pageCounter].right_answer){
    document.getElementById(param).classList.add('bg-green');
    document.getElementById('letter-' + param).classList.add('bg-green-letter');
  } else {
    document.getElementById(param).classList.add('bg-red');
    document.getElementById('letter-' + param).classList.add('bg-red-letter');
    document.getElementById(question[pageCounter].right_answer).classList.add('bg-green');
    document.getElementById('letter-' + question[pageCounter].right_answer).classList.add('bg-green-letter');
  }
  document.getElementById('next-button').disabled = false;
}

//calling the next page
function nextPage() {
  pageCounter++;
  if(pageCounter < question.length) {
    showCurrentQuestion()
  }
}