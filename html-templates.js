

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
              <button id="next-button" class="btn btn-primary" onclick="nextPage()" type="submit" disabled>NEXT PAGE!</button>
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
        <button class="btn btn-primary end-button" onclick="init('${currentDeck}')" type="submit">REPLAY</button>
      </div>     
      <img class="trophy" src="img/trophy.png">
  `;
  }
  