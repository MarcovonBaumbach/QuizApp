
//---------question-decks----------

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
  