//when the page loads the timer function begins
window.onload = function () {
    timer();
}
/*****************************************************
* Title: What is the Window onload event in JavaScript?
* Author: Shehroz Azam
* Site owner/sponsor: linuxhint.com
* Date: 2021
* Code version: edited november 28th, 2023 at 20:22
* Availability: https://linuxhint.com/window-onload-event-in-javascript/ (Accessed 28th November 2023)
* Modified: yes
*****************************************************/
//End of [non-original or refactored] code

//timer function counts down from 5 and then makes the quiz page visible and the intro page invisible
function timer(){
    let sec = 5;
    //no argument function based on the setinterval which will do the things inside the function once the timer runs out 
    let timer = setInterval(function(){
        document.getElementById('countdown').innerHTML=sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
            //making the intro page invisible
            document.getElementById("introSection").style.display = "none";
            //link to the quiz page on the intro page
            window.location.href = "quiz.html";

            

        }
    }, 1000);
}


