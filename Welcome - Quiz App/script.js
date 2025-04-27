let currentQuestionIndex = 0;
let score = 0;

const questions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "Which is the largest ocean?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: "Pacific Ocean"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
        correct: "Albert Einstein"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
        correct: "Mitochondria"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Oxygen", "Osmium", "Ozone", "Oganesson"],
        correct: "Oxygen"
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Mercury", "Venus", "Mars", "Earth"],
        correct: "Mercury"
    },
    {
        question: "What is the chemical formula for water?",
        options: ["H2O", "CO2", "O2", "H2O2"],
        correct: "H2O"
    },
    {
        question: "Who was the first man to step on the Moon?",
        options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "Michael Collins"],
        correct: "Neil Armstrong"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correct: "Mars"
    },
    {
        question: "What is the currency of Japan?",
        options: ["Won", "Yuan", "Yen", "Ringgit"],
        correct: "Yen"
    }
];

function loadQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById('question').textContent = questionData.question;

    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = '';  // Clear previous options

    questionData.options.forEach(option => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.onclick = () => checkAnswer(option, button);
        li.appendChild(button);
        optionsList.appendChild(li);
    });

    document.getElementById('next').style.display = 'none';  // Hide next button initially
}

function checkAnswer(selectedOption, button) {
    const correctAnswer = questions[currentQuestionIndex].correct;
    const options = document.querySelectorAll('.option-btn');

    // Disable all options after selection
    options.forEach(option => {
        option.disabled = true;
    });

    // Check if selected answer is correct
    if (selectedOption === correctAnswer) {
        button.style.backgroundColor = '#28a745'; // Green for correct answer
        score++;
    } else {
        button.style.backgroundColor = '#dc3545'; // Red for incorrect answer
    }

    // Highlight the correct answer in green if not already selected
    options.forEach(option => {
        if (option.textContent === correctAnswer && option !== button) {
            option.style.backgroundColor = '#28a745'; // Correct answer (green)
        }
    });

    document.getElementById('next').style.display = 'inline-block';  // Show next button
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('next').style.display = 'none';
    document.getElementById('final-score').style.display = 'block';
    document.getElementById('score').textContent = score;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('final-score').style.display = 'none';
    loadQuestion();
}

window.onload = function() {
    loadQuestion();  // Load the first question when the page loads
};
