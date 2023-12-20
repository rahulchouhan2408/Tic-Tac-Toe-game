console.log("Welcome to Tic Tac Toe");
let gameover = new Audio("gameover.mp3.wav");
let musicTurn = new Audio("turn.mp3.wav");
let turn = "X"
let isGameOver = false;
// function to change the turn
const changeTurn =()=>{
    return turn === "X"?"O": "X"
}

// function to check for a win 
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
        ]
        wins.forEach(e=>{
            if((boxtext[e[0]].innerText === boxtext[e[1]].innerText)&& (boxtext[e[2]].innerText === boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText !== "")){
                document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won"
                document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "256px"
                isGameOver = true;
                gameover.play();
            }
        })
}



//GameLogic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", ()=>{
        if(boxtext.innerText ==="" && !isGameOver){
            boxtext.innerText = turn;
            turn = changeTurn();
            musicTurn.play();
            checkWin();
            if(!isGameOver){
              document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    }
    })
})


// REset button

// Get the reset button element
let resetButton = document.getElementById("reset");

// Add click event listener to the reset button
resetButton.addEventListener("click", () => {
    // Get all the boxtext elements
    let boxtexts = document.getElementsByClassName("boxtext");

    // Loop through each boxtext element and clear the text
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    });

    // Reset the turn to "X"
    turn = "X";

    // Update the info text
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;

    // You might want to reset the gameover and musicTurn variables or any other game variables here
});
