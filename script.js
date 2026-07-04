let userScore = 0;
let compScore = 0;

//select all the choices
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

//add click event to every choice
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)
    });
});

//function to generate computer's choice
const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randiIdx = Math.floor(Math.random() * 3);
    return options[randiIdx];
};

//function to play the game
const playGame = (userChoice) => {
    console.log("user choice:-", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice:-", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWin(userWin, userChoice, compChoice);
    }
};

const showWin = (userWin, userChoice, compChoice) => {
    if (userWin===true) {
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win!");
        msg.innerText=`You win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose!");
        msg.innerText=`You lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const drawGame = () => {
    msg.innerText="Game was draw. Play again!";
    msg.style.backgroundColor="#081b31";
};

