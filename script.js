window.onload = function() {
        initialize();
}

function initialize() {

//Create Keyboard
var keyboardList = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["Z", "X", "C", "V", "B", "N", "M"]];

for (let i = 0; i < keyboardList.length; i++) {
        let currentRow = keyboardList[i];
        let keyboardRow = document.createElement("div");
        keyboardRow.classList.add("keyboard-row");

        for (let x = 0; x < currentRow.length; x++) {
                let keyTile = document.createElement("div");
                let key = currentRow[x];
                keyTile.innerText = key;
                keyTile.id = "Key" + key;
                keyboardRow.appendChild(keyTile);
                keyTile.classList.add("key-tile");

                keyTile.addEventListener("click", processKey);
        }
     document.body.appendChild(keyboardRow);
}
        document.addEventListener("keyup", (e) => {
                processInput(e);
        });

//Create Answer
var answersList = ["SUSHI", "PIZZA", "HAMBURGER", "ICE-CREAM", "SPAGHETTI", "TACOS", "QUESADILLA"];

var randomAnswer = answersList[Math.floor(Math.random() * answersList.length)];

var letterRow = document.createElement("div");
document.body.appendChild(letterRow);
letterRow.classList.add("answerRow");

for (let i = 0; i < randomAnswer.length; i++) {
        let currentLetter = randomAnswer[i];
        let letterBox = document.createElement("div");
        
        letterBox.classList.add("letter-box");
        
        letterRow.appendChild(letterBox);

        console.log(currentLetter);
}
}

function processKey() {
        let e = {"code": this.id};
        processInput(e);
}

function processInput(e) {

        let currentL = "KeyA";

        if ("KeyA" <= e.code && e.code <= "KeyZ") {
                document.getElementById("currentL").style.display = "block";
        }
}