function Player(name, guess, score) {
    this.name = name;
    this.guess = guess;
    this.score = score;
}

var player1 = new Player();
player1.score = 0;
var player2 = new Player();
player2.score = 0;
var player3 = new Player();
player3.score = 0;
var player4 = new Player();
player4.score = 0;

var dealerScore = 0;
function Dealer() {
    var dealerNum = Math.floor(Math.random() * 11);
    if (dealerNum === 0) {
        dealerNum++;
    }

    document.getElementById("dealer").innerHTML = dealerNum;

    player1.guess = document.getElementById("p1Numguess").value;
    document.getElementById("player1").innerHTML = player1.guess;

    player2.guess = document.getElementById("p2Numguess").value;
    document.getElementById("player2").innerHTML = player2.guess;

    player3.guess = document.getElementById("p3Numguess").value;
    document.getElementById("player3").innerHTML = player3.guess;

    player4.guess = document.getElementById("p4Numguess").value;
    document.getElementById("player4").innerHTML = player4.guess;

    switch (true) {
        case player1.guess == dealerNum:
            document.getElementById("winner").innerHTML = "<b>" + player1.name + " Won!" + "</b>";
            player1.score++;
            break;
        case player2.guess == dealerNum:
            document.getElementById("winner").innerHTML = "<b>" + player2.name + " Won!" + "</b>";
            player2.score++;
            break;
        case player3.guess == dealerNum:
            document.getElementById("winner").innerHTML = "<b>" + player3.name + " Won!" + "</b>";
            player3.score++;
            break;
        case player4.guess == dealerNum:
            document.getElementById("winner").innerHTML = "<b>" + player4.name + " Won!" + "</b>";
            player4.score++;
            break;
        default:
            document.getElementById("winner").innerHTML = "<b>The Dealer Won!" + "</b>";
            dealerScore++;
            break;
    }
    document.getElementById("p1Score").innerHTML = player1.score;
    document.getElementById("p2Score").innerHTML = player2.score;
    document.getElementById("p3Score").innerHTML = player3.score;
    document.getElementById("p4Score").innerHTML = player4.score;
    document.getElementById("dealerScore").innerHTML = dealerScore;
}

function PlayerNames() {
    player1.name = document.getElementById("player1Input").value;
    document.getElementById("player1Name").innerHTML = "<b>" + player1.name + "</b>";

    player2.name = document.getElementById("player2Input").value;
    document.getElementById("player2Name").innerHTML = "<b>" + player2.name + "</b>";

    player3.name = document.getElementById("player3Input").value;
    document.getElementById("player3Name").innerHTML = "<b>" + player3.name + "</b>";

    player4.name = document.getElementById("player4Input").value;
    document.getElementById("player4Name").innerHTML = "<b>" + player4.name + "</b>";
}

function P1(){
    document.getElementById("p2").style.visibility="hidden";
    document.getElementById("player2Input").style.visibility="hidden";
    document.getElementById("p3").style.visibility="hidden";
    document.getElementById("player3Input").style.visibility="hidden";
    document.getElementById("p4").style.visibility="hidden";
    document.getElementById("player4Input").style.visibility="hidden";
}
function P2(){
    document.getElementById("p2").style.visibility="visible";
    document.getElementById("player2Input").style.visibility="visible";
    document.getElementById("p3").style.visibility="hidden";
    document.getElementById("player3Input").style.visibility="hidden";
    document.getElementById("p4").style.visibility="hidden";
    document.getElementById("player4Input").style.visibility="hidden";
}
function P3(){
    document.getElementById("p2").style.visibility="visible";
    document.getElementById("player2Input").style.visibility="visible";
    document.getElementById("p3").style.visibility="visible";
    document.getElementById("player3Input").style.visibility="visible";
    document.getElementById("p4").style.visibility="hidden";
    document.getElementById("player4Input").style.visibility="hidden";
}
function P4(){
    document.getElementById("p2").style.visibility="visible";
    document.getElementById("player2Input").style.visibility="visible";
    document.getElementById("p3").style.visibility="visible";
    document.getElementById("player3Input").style.visibility="visible";
    document.getElementById("p4").style.visibility="visible";
    document.getElementById("player4Input").style.visibility="visible";
}

