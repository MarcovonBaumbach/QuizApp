let questionsHTML = [
    {
        'question': 'Wer hat HTML erfunden?',
        'answer_1': 'Linus Torvalds',
        'answer_2': 'Steve Wozniak',
        'answer_3': 'Tim Berners-Lee',
        'answer_4': 'Bill Gates',
        'right_answer': 3
    },
    {
        'question': 'Was ist das Tag für fette Schrift?',
        'answer_1': `a`,
        'answer_2': `b`,
        'answer_3': `c`,
        'answer_4': `d`,
        'right_answer': 2
    },
    {
        'question': 'Welcher Dateiname wird für die Startseite verwendet?',
        'answer_1': `mainpage.html`,
        'answer_2': `index.html`,
        'answer_3': `main.index`,
        'answer_4': `main.html`,
        'right_answer': 2
    },
    {
        'question': 'Mit welchem Tag fügt man Bilder ein?',
        'answer_1': `img src=""`,
        'answer_2': `img link=""`,
        'answer_3': `img url=""`,
        'answer_4': `img href=""`,
        'right_answer': 1
    },
    {
        'question': 'Was ist ein HTML Begriff?',
        'answer_1': 'Jahr',
        'answer_2': 'Monat',
        'answer_3': 'Woche',
        'answer_4': 'Tag',
        'right_answer': 4
    }
];

let questionsCSS = [
    {
        'question': 'Wie entfernt man einen Unterstrich?',
        'answer_1': 'display: none;',
        'answer_2': 'text-decoration: none;',
        'answer_3': 'text-decoration: underline;',
        'answer_4': 'transparency: 100%;',
        'right_answer': 3
    }
];

let currentQuestion = 0;


function init() {
    document.getElementById('card-body').innerHTML = htmlQuestionHTML();

}

function htmlQuestionHTML() {
    return `
        <div class="card-body text-center background-img top-padding">
          <h2 class="card-title">Welcome To <br> The Awesome HTML Quiz</h2>
          <p class="card-text font-size-text">Ready for the challenge?</p>
          <button class="btn btn-primary button-position" onclick="showCurrentQuestion()" type="submit">START NOW <img src="img/White arrow right.png"></button>
        </div>
    `;
}

function showCurrentQuestion() {
    document.getElementById('card-body').innerHTML = `
    <div class="card-body text-center background-question-container">
            <h4 class="card-title">${questionsHTML[currentQuestion].question}</h4>
            <div id="answer_1" class="card mb-2">
              <div class="card-flex ">
                <div class="letter-div"><b>A</b></div>
                ${questionsHTML[currentQuestion].answer_1}
              </div>
            </div>
            <div id="answer_2" class="card mb-2">
              <div class="card-flex ">
                <div class="letter-div"><b>B</b></div>
                ${questionsHTML[currentQuestion].answer_2}
              </div>
            </div>
            <div id="answer_3" class="card mb-2">
              <div class="card-flex ">
                <div class="letter-div"><b>C</b></div>
                ${questionsHTML[currentQuestion].answer_3}
              </div>
            </div>
            <div id="answer_4" class="card mb-2">
              <div class="card-flex ">
                <div class="letter-div"><b>D</b></div>
                ${questionsHTML[currentQuestion].answer_4}
              </div>
            </div>
            <div class="flex-display">
              <span>Frage ${currentQuestion + 1} von ${questionsHTML.length} </span>
              <button class="btn btn-primary" onclick="showCurrentQuestion()" type="submit">Nächste Frage</button>
            </div>
        </div>
    `;
    currentQuestion++;
}