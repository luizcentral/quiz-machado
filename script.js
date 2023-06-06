var questions = [
    {
      question: "Qual � o t�tulo de um dos contos mais famosos de Machado de Assis?",
      options: {
        a: "A Bruxa",
        b: "O Desconhecido",
        c: "O Alienista",
        d: "Aventuras de um Menino"
      },
      answer: "c"
    },
    {
      question: "Machado de Assis foi o primeiro presidente de qual institui��o liter�ria?",
      options: {
        a: "Academia Brasileira de Letras",
        b: "Real Gabinete Portugu�s de Leitura",
        c: "Casa de Rui Barbosa",
        d: "Instituto Hist�rico e Geogr�fico Brasileiro"
      },
      answer: "a"
    },
    {
      question: "Qual � o nome do protagonista de 'Dom Casmurro'?",
      options: {
        a: "Br�s Cubas",
        b: "Bentinho",
        c: "Quincas Borba",
        d: "Capitu"
      },
      answer: "b"
    },
    {
      question: "Qual foi o �ltimo romance publicado por Machado de Assis?",
      options: {
        a: "Memorial de Aires",
        b: "Esa� e Jac�",
        c: "Dom Casmurro",
        d: "Quincas Borba"
      },
      answer: "b"
    },
    {
      question: "Em que ano Machado de Assis foi indicado ao Pr�mio Nobel de Literatura?",
      options: {
        a: "1902",
        b: "1904",
        c: "1906",
        d: "1908"
      },
      answer: "b"
    },
    {
      question: "Qual era o nome da m�e de Machado de Assis?",
      options: {
        a: "Maria Leopoldina Machado de Assis",
        b: "Maria Leopoldina de Oliveira Assis",
        c: "Maria Jos� Machado de Assis",
        d: "Maria Jos� de Oliveira Assis"
      },
      answer: "c"
    },
    {
      question: "Quantos romances completos Machado de Assis escreveu?",
      options: {
        a: "9",
        b: "10",
        c: "11",
        d: "12"
      },
      answer: "a"
    },
    {
      question: "Em qual movimento liter�rio Machado de Assis se destacou?",
      options: {
        a: "Romantismo",
        b: "Realismo",
        c: "Modernismo",
        d: "Barroco"
      },
      answer: "b"
    },
    {
      question: "Qual � o g�nero liter�rio pelo qual Machado de Assis � conhecido?",
      options: {
        a: "Poesia",
        b: "Teatro",
        c: "Romance",
        d: "Biografia"
      },
      answer: "c"
    },
    {
      question: "Machado de Assis � considerado um dos grandes escritores de qual nacionalidade?",
      options: {
        a: "Portuguesa",
        b: "Brasileira",
        c: "Inglesa",
        d: "Francesa"
      },
      answer: "b"
    }
  ];
  
  var currentQuestion = 0;
  var score = 0;
  
  function loadQuestion() {
    var questionElement = document.getElementById("question");
    var optionAElement = document.getElementById("option-a");
    var optionBElement = document.getElementById("option-b");
    var optionCElement = document.getElementById("option-c");
    var optionDElement = document.getElementById("option-d");
  
    var question = questions[currentQuestion];
  
    questionElement.textContent = question.question;
    optionAElement.textContent = "a) " + question.options.a;
    optionBElement.textContent = "b) " + question.options.b;
    optionCElement.textContent = "c) " + question.options.c;
    optionDElement.textContent = "d) " + question.options.d;
  }
  
  function submitAnswer(selectedOption) {
    var question = questions[currentQuestion];
  
    if (selectedOption === question.answer) {
      score++;
      var resultTextElement = document.getElementById("result-text");
      resultTextElement.textContent = "Resposta correta!";
    } else {
      var resultTextElement = document.getElementById("result-text");
      resultTextElement.textContent = "Resposta incorreta!";
    }
  
    var questionPage = document.getElementById("question-page");
    questionPage.style.display = "none";
  
    var resultPage = document.getElementById("result-page");
    resultPage.style.display = "block";
  }
  
  function nextQuestion() {
    var resultPage = document.getElementById("result-page");
    resultPage.style.display = "none";
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      var questionPage = document.getElementById("question-page");
      questionPage.style.display = "block";
      loadQuestion();
    } else {
      showFinalScore();
    }
  }
  
  function showFinalScore() {
    var quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "<div id='final-page'><h2>Quiz finalizado!</h2><p id='final-score'>Voc� acertou " + score + " de " + questions.length + " quest�es.</p></div>";
  }
  
  loadQuestion();
