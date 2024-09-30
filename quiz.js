let currentQuestionIndex = 0; // which question are you currently on
let questions = []; // storing the questions in the array
let correctANS = []; // storing the correct answer in the array
let selectedANS = []; // storing the selected answer in the array
let displayedQuestions = []; // storing the displayed questions in the array
let currentQuestion; // getting the current question that is displayed on the screen


// pushing the questions into the array
questions.push({
    Question: "What school do we go to?",
    options: ["MTU", "ATU", "CIT", "LIT"],
    correct: "MTU",
    help: " It ends in a U"
});

questions.push({
    Question: "What is the capital of Ireland",
    options: ["Dublin", "Tralee", "Cork", "Limerick"],
    correct: "Dublin",
    help: "Its where the Spire is"
});

questions.push({
    Question: "Who is the president of Ireland",
    options: ["Michael D. Higgins", "Sabina Coyne", "Leo Varadkar", "Mary Robinson"],
    correct: "Michael D. Higgins",
    help: "this person is also a poet"
});

questions.push({
    Question: "What year was Ireland founded",
    options: ["1937", "1899", "1921", "1915"],
    correct: "1921",
    help: "On this year Adolf Hitler became the Führer of the Nazi"
});

questions.push({
    Question: "What is Ireland's National dish",
    options: ["Mince pie", "Irish stew", "Ulster Fry", "Bacon and Cabbage"],
    correct: "Irish stew",
    help: "This meals ingredients mainly include potatoes and vegetables"
});

questions.push({
    Question: "Which currency is used in the Republic of Ireland?",
    options: ["Dollar", "Euro", "Pound", "Yen"],
    correct: "Euro",
    help: "it is used by majority of european countries"
});

questions.push({
    Question: "How many counties does ireland have?",
    options: ["22", "45", "32", "12"],
    correct: "32",
    help: "it has less counties than England"
});

questions.push({
    Question: "Which river flows through the centre of Dublin?",
    options: ["River Nile", "Ganji River", "The River Liffey", "the Poddle"],
    correct: "The River Liffey",
    help: "it ryhmes with giffy"
});

questions.push({
    Question: "Which song by Ed Sheeran mentions an Irish city?",
    options: ["Cork", "Malmo", "Mayo", "Galway"],
    correct: "Galway",
    help: "this place is home to The Burren"
});

questions.push({
    Question: "what is ireland's national animal?",
    options: ["Dog", "Whale", "Red deer", "Irish hare"],
    correct: "Irish hare",
    help: "this one is kinda obvious"
});

// randomizing the questions by swapping the order of the questions 
function randomquestion() {
    for (let i = 0; i < questions.length; i++) {
        let j = Math.floor(Math.random() * questions.length); // Randomize index j

        // Swap questions[i] with questions[j]
        let temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
    }
}

// displaying the questions in the span tag area next to the radio button in the html for the quiz 
function displayQuestion() {
    currentQuestion = questions[currentQuestionIndex]; // getting the current question that is being displayed 
    displayedQuestions.push(currentQuestion); // store the displayed question
    document.getElementById("question").innerText = currentQuestion.Question; // outputting the question in the question section in the quiz html
    document.getElementById("labelA").innerText = currentQuestion.options[0];
    document.getElementById("optionA").value = currentQuestion.options[0]; // set value for radio button
    document.getElementById("labelB").innerText = currentQuestion.options[1];
    document.getElementById("optionB").value = currentQuestion.options[1]; 
    document.getElementById("labelC").innerText = currentQuestion.options[2];
    document.getElementById("optionC").value = currentQuestion.options[2]; 
    document.getElementById("labelD").innerText = currentQuestion.options[3];
    document.getElementById("optionD").value = currentQuestion.options[3]; 
}

// no argument function to check when the next button has been clicked
document.getElementById("nextQuestionButton").addEventListener("click", function () {
    let Checked = document.querySelector('[name="answer"]:checked'); // checking what radio button has been clicked
    if (!Checked) {
        alert("Please select an answer.");
        return; // Stop further execution of the function
    }
    
    let selectedText = Checked.value;

    // Clear the selected radio button from the previous question to allow selection of a new radio button all when the next question button is clicked
    let radioButtons = document.getElementsByName('answer');
    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].checked = false;
    }
    
    

    correctANS.push(currentQuestion.correct); // pushes the correct answer into the array for correct answers 
    selectedANS.push(selectedText); // pushing the text from the selected answer into the selected answer array

    console.log("Selected Answers:", selectedANS);
    console.log("Correct Answers:", correctANS);

    // Check if there are more questions
    if (currentQuestionIndex < 4) {
        currentQuestionIndex++;
        displayQuestion(); // display the question if there are still more questions 
    } else {
        // when the questions are done, make the next button disappear and the finish button appear 
        document.getElementById("nextQuestionButton").style.display = "none";
        document.getElementById("finish").style.display = "block";

        // Store necessary data in localStorage
        localStorage.setItem("questions", JSON.stringify(displayedQuestions)); // stores the displayed questions
        localStorage.setItem("correctAnswers", JSON.stringify(correctANS)); // store correct answers
        localStorage.setItem("selectedAnswers", JSON.stringify(selectedANS)); // store selected answers
    }

    // Score calculation
    if (currentQuestionIndex === 4) {
        let score = 0;
        for (let i = 0; i < correctANS.length; i++) {
            if (selectedANS[i] === correctANS[i]) {
                score++;
            }
        }
        let percScore = (score / correctANS.length) * 100; // getting the percentage of the user's score 
        localStorage.setItem("Score", JSON.stringify(percScore)); // storing the user's score using local storage 
        localStorage.setItem("Answer", JSON.stringify(selectedANS)); // storing the user's answers using local storage 
        console.log("Score:", percScore);
    }

    progressBar();
    // calls the progress bar function every time the next button is clicked 
});

// displaying the progress bar with the correct numbers 
function progressBar() {
    let bar = document.getElementById("progressBar");
    bar.innerHTML = `${currentQuestionIndex + 1}` + `/` + `${5}`;
}

// Function to update the progress bar width


// putting the tips in for the user using mouseover and mouseout 
function Tips() {
    let tip = document.getElementById("Tip");
    tip.innerHTML = `${currentQuestion.help}`;
    document.getElementById("Tip").addEventListener("mouseout", function () {
        tip.innerHTML = "Tip";
    });
}

// using a no argument function to check if the finish button has been clicked then using window.open to open the summary window
document.getElementById("finish").addEventListener("click", function () {
    let summary = window.open("summary.html", "Summary", "width=450,height=650");
    summary;
})

randomquestion();
displayQuestion();
progressBar();


