let selected = localStorage.getItem("selectedAnswers"); // getting the selected answers from the user
let question = localStorage.getItem("questions"); // getting the questions that are being displayed
let correct = localStorage.getItem("correctAnswers"); // getting the correct answers
let score = localStorage.getItem("Score"); // getting the score of the user

let select = JSON.parse(selected); // parse the string from selected into select
let ques = JSON.parse(question); // parse the string from question into ques
let corr = JSON.parse(correct); // parse the string from correct into corr
let totScore = JSON.parse(score); // parse the string from score into totScore

// Check if all data is correctly parsed and available
if (!select || !ques || !corr || totScore === null) {
    console.error("No data in local storage");
} else {
    // Display the total score
    let scoreSection = document.getElementById("grade");
    scoreSection.innerHTML = "your total score is: " + totScore + "%";

    let summaryHTML = '';

    for (let i = 0; i < ques.length; i++) {
        summaryHTML += `
            <div class="question-block">
                <h3>Question ${i + 1}: ${ques[i].Question}</h3>
                <p><strong>Correct Answer:</strong> ${corr[i]}</p>
                <p><strong>Your Answer:</strong> ${select[i]}</p>
            </div>
        `;
    }

    // Set the innerHTML of the summary section
    let summarySection = document.getElementById("summary");
    summarySection.innerHTML = summaryHTML;
}



