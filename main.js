var players = [];
var scorePlayer1 = 0;
var scorePlayer2 = 0;
var maxScore = 3;
var markers = ["X", "O"];
var whoseTurn = 0;
var cells = document.getElementsByClassName("cell");

function selectWinnerCells(c1, c2, c3) {
    c1.style.background = "#E91E63";
    c2.style.background = "#E91E63";
    c3.style.background = "#E91E63";
    players[whoseTurn].innerHTML = c1.innerHTML + " Won";
}
function reset() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
        cells[i].style = '';
        cells[i].setAttribute('onclick', 'play(this)');
    }
}

function deActivatedCeil() {
    for (var i = 0; i < cells.length; i++) {
        cells[i].setAttribute('onclick', '');
    }
}


// this function check who will take a point and who will win the game from 3 points
function whoWin() {
    if (whoseTurn === 1) {
        scorePlayer1 = scorePlayer1 + 1;
        document.getElementById("Player1Score").innerText = scorePlayer1;
        whoseTurn = 0;
        document.getElementById("header").innerText = `${players[whoseTurn]} Won`;
        if (scorePlayer1 === maxScore) {
            document.getElementById("header").innerText = `${players[whoseTurn]}'  win the game`;
            setTimeout(2000);
            var confirm = window.confirm(`${players[whoseTurn]}'s win the game`);
            if (confirm) {
                location.reload();
            } else {
                console.log('Canceled');
            }
        }
        whoseTurn = 1;
    }
    else {
        scorePlayer2 = scorePlayer2 + 1;
        document.getElementById("Player2Score").innerText = scorePlayer2;
        whoseTurn = 1;
        document.getElementById("header").innerText = `${players[whoseTurn]} Won`;
        if (scorePlayer2 === maxScore) {
            document.getElementById("header").innerText = `${players[whoseTurn]}  win the game`;
            var confirm = window.confirm(`${players[whoseTurn]}'s win the game`);
            if (confirm) {
                location.reload();
            }
            else {
                console.log('Canceled');
            }
        }
        whoseTurn = 0;
    }
}

// this function check all possible ways to win

function win() {

    // declaring Cells/Divs and catch it to make comparison between them

    var cell1 = document.getElementById("1"),
        cell2 = document.getElementById("2"),
        cell3 = document.getElementById("3"),
        cell4 = document.getElementById("4"),
        cell5 = document.getElementById("5"),
        cell6 = document.getElementById("6"),
        cell7 = document.getElementById("7"),
        cell8 = document.getElementById("8"),
        cell9 = document.getElementById("9");

    // declaring all the cells [1,2,3] [4,5,6] [7,8,9] [1,4,7] [2,5,8] [3,6,9] [1,5,9] [3,5,7]
    // all possible winning conditions
    if (cell1.innerHTML !== "" && cell1.innerHTML === cell2.innerHTML && cell1.innerHTML === cell3.innerHTML) {
        selectWinnerCells(cell1, cell2, cell3);
        whoWin();
        deActivatedCeil();
    }
    else if (cell4.innerHTML !== "" && cell4.innerHTML === cell5.innerHTML && cell4.innerHTML === cell6.innerHTML) {
        selectWinnerCells(cell4, cell5, cell6);
        whoWin();
        deActivatedCeil();
    }
    else if (cell7.innerHTML !== "" && cell7.innerHTML === cell8.innerHTML && cell7.innerHTML === cell9.innerHTML) {
        selectWinnerCells(cell7, cell8, cell9);
        whoWin();
        deActivatedCeil();
    }
    else if (cell1.innerHTML !== "" && cell1.innerHTML === cell4.innerHTML && cell1.innerHTML === cell7.innerHTML) {
        selectWinnerCells(cell1, cell4, cell7);
        whoWin();
        deActivatedCeil();
    }
    else if (cell2.innerHTML !== "" && cell2.innerHTML === cell5.innerHTML && cell2.innerHTML === cell8.innerHTML) {
        selectWinnerCells(cell2, cell5, cell8);
        whoWin();
        deActivatedCeil();
    }
    else if (cell3.innerHTML !== "" && cell3.innerHTML === cell6.innerHTML && cell3.innerHTML === cell9.innerHTML) {
        selectWinnerCells(cell3, cell6, cell9);
        whoWin();
        deActivatedCeil();
    }
    else if (cell1.innerHTML !== "" && cell1.innerHTML === cell5.innerHTML && cell1.innerHTML === cell9.innerHTML) {
        selectWinnerCells(cell1, cell5, cell9);
        whoWin();
        deActivatedCeil();
    }
    else if (cell3.innerHTML !== "" && cell3.innerHTML === cell5.innerHTML && cell3.innerHTML === cell7.innerHTML) {
        selectWinnerCells(cell3, cell5, cell7);
        whoWin();
        deActivatedCeil();
    }

}

//this playing function draw "X" or "O" on the Cells/Divs

function play(div) {
    div.onclick = "";
    div.innerHTML = `<span style="color:white"> ${markers[whoseTurn]} </span>`;
    toggle();
    win();

}


// function for put the players name and check the turn of every player
function toggle() {
    // declearing variables take the value from textboxs
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    // defining that elemets of the array
    players[0] = player1;
    players[1] = player2;

    if (player1 == "" || player2 == "") {
        alert("please fill the inputs")
        location.reload();
    }
    else {
        if (whoseTurn == 0) {
            whoseTurn = 1;
        }
        else
            whoseTurn = 0;
    }
    document.getElementById("header").innerText = `${players[whoseTurn]}'s Turn!`;

}

