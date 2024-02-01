const questions = [
  {
    question: "What is a traditional Sinhala dish?",
    answers: ["Kottu", "Kiribath", "Roti", "String Hoppers"],
    correctAnswer: "Kiribath"
  },
  {
    question: "Which Tamil festival is celebrated in Sri Lanka?",
    answers: ["Vesak", "Pongal", "Esala Perahera", "Poson"],
    correctAnswer: "Pongal"
  },
  {
    question: "What is the traditional Muslim dessert in Sri Lanka?",
    answers: ["Watalappam", "Kavum", "Dodol", "Bibikkan"],
    correctAnswer: "Watalappam"
  },
   {
    question: "What is a traditional Sinhala sweet?",
    answers: ["Kokis", "Kavum", "Aasmi", "Aluwa"],
    correctAnswer: "Kavum"
  },
  {
    question: "Which Sinhala festival involves the lighting of oil lamps?",
    answers: ["Avurudu", "Vesak", "Poson", "Esala Perahera"],
    correctAnswer: "Vesak"
  },
  {
    question: "What is the main ingredient in Sinhala 'Kiri bath'?",
    answers: ["Milk", "Coconut milk", "Yogurt", "Ghee"],
    correctAnswer: "Coconut milk"
  },
  {
    question: "In Sinhala culture, what is 'Thovil'?",
    answers: ["New Year celebration", "Traditional dance", "Exorcism ritual", "Religious ceremony"],
    correctAnswer: "Exorcism ritual"
  },
  {
    question: "Which Tamil dish is a popular breakfast item in Sri Lanka?",
    answers: ["Idiyappam", "Appam", "Pittu", "Puttu"],
    correctAnswer: "Idiyappam"
  },
  {
    question: "What is the Tamil harvest festival celebrated in January?",
    answers: ["Deepavali", "Pongal", "Thai Pongal", "Chithirai Thiruvizha"],
    correctAnswer: "Thai Pongal"
  },
  {
    question: "Which Tamil dance form is characterized by fast footwork?",
    answers: ["Bharatanatyam", "Kathak", "Kuchipudi", "Odissi"],
    correctAnswer: "Bharatanatyam"
  },
  {
    question: "What is the traditional Tamil New Year called?",
    answers: ["Chithirai Puthandu", "Thai Puthandu", "Deepavali", "Navaratri"],
    correctAnswer: "Chithirai Puthandu"
  },
  {
    question: "Which famous Tamil literary work is attributed to the poet Kambar?",
    answers: ["Silappatikaram", "Thirukkural", "Manimekalai", "Kamba Ramayanam"],
    correctAnswer: "Kamba Ramayanam"
  },
  {
    question: "What is the traditional Muslim attire for women in Sri Lanka?",
    answers: ["Sari", "Thaub", "Hijab", "Kandura"],
    correctAnswer: "Hijab"
  },
  {
    question: "Which Muslim festival marks the end of Ramadan?",
    answers: ["Eid al-Fitr", "Eid al-Adha", "Mawlid", "Lailat al Miraj"],
    correctAnswer: "Eid al-Fitr"
  },
  {
    question: "What is the traditional Muslim wedding ceremony called?",
    answers: ["Nikah", "Walima", "Mehndi", "Henna"],
    correctAnswer: "Nikah"
  },
  {
    question: "Which Muslim dish is popular during the holy month of Ramadan?",
    answers: ["Biryani", "Haleem", "Korma", "Samosa"],
    correctAnswer: "Haleem"
  },
  {
    question: "What is the Islamic call to prayer called?",
    answers: ["Azan", "Iqama", "Salat", "Sadaqah"],
    correctAnswer: "Azan"
  },
  {
    question: "Which Malay dish is a festive delicacy?",
    answers: ["Rendang", "Satay", "Lemang", "Nasi Goreng"],
    correctAnswer: "Lemang"
  },
  {
    question: "What is the traditional Malay dance often performed during celebrations?",
    answers: ["Zapin", "Joget", "Inai", "Dikir Barat"],
    correctAnswer: "Joget"
  },
  {
    question: "Which Malay festival marks the end of Ramadan?",
    answers: ["Hari Raya Aidilfitri", "Hari Raya Aidiladha", "Awal Muharram", "Wesak"],
    correctAnswer: "Hari Raya Aidilfitri"
  },
  {
    question: "What is the traditional Malay attire for men?",
    answers: ["Baju Melayu", "Kebaya", "Songkok", "Sampin"],
    correctAnswer: "Baju Melayu"
  },
  {
    question: "Which instrument is commonly used in Malay traditional music?",
    answers: ["Gendang", "Angklung", "Rebana", "Sape"],
    correctAnswer: "Rebana"
  },
  // Add more questions based on Malay culture
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const answersContainer = document.getElementById("answers-container");
const nextButton = document.getElementById("next-btn");
const restartButton = document.getElementById("restart-btn");
const newGameButton = document.getElementById("new-game-btn");

function startQuiz() {
  restartButton.addEventListener("click", restartQuiz);
  newGameButton.addEventListener("click", startNewGame);
  nextButton.addEventListener("click", nextQuestion);
  runGame();
}

function runGame() {
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    showFinalScore();
    startNewGame();
  }
}

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.innerHTML = `<p>${currentQuestion.question}</p>`;

  answersContainer.innerHTML = "";
  currentQuestion.answers.forEach((answer) => {
    const answerElement = document.createElement("button");
    answerElement.innerText = answer;
    answerElement.addEventListener("click", () => checkAnswer(answer));
    answersContainer.appendChild(answerElement);
  });

  nextButton.style.display = "none";
}

function checkAnswer(userAnswer) {
  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = userAnswer === currentQuestion.correctAnswer;

  if (isCorrect) {
    score += 10;
  }

  displayResult(isCorrect, currentQuestion.correctAnswer);
}

function displayResult(isCorrect, correctAnswer) {
  const selectedButton = event.target;
  selectedButton.disabled = true;

  const resultContainer = document.createElement("div");

  if (isCorrect) {
    selectedButton.classList.add("correct");
    resultContainer.innerHTML = `<p class='result-box correct-answer-box'>Correct! The answer is: <strong>${correctAnswer}</strong></p>`;
  } else {
    selectedButton.classList.add("incorrect");
    resultContainer.innerHTML = `<p class='result-box incorrect-answer-box'>Incorrect! The correct answer is: <strong>${correctAnswer}</strong></p>`;
  }

  answersContainer.appendChild(resultContainer);
  nextButton.style.display = "block";
}


function nextQuestion() {
  currentQuestionIndex++;
  runGame();
}

function showFinalScore() {
  questionContainer.innerHTML = `<p><i class="fas fa-crown"></i>Your final score is: ${score}/100</p>`;
  answersContainer.innerHTML = "";
  restartButton.style.display = "block";
  newGameButton.style.display = "block";
  nextButton.style.display = "none";
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  runGame();
  restartButton.style.display = "none";
}

function startNewGame() {
  currentQuestionIndex = 0;
  score = 0;
  runGame();
  restartButton.style.display = "none";
  newGameButton.style.display = "none";
}

startQuiz();
