"use strict";
console.log(score);
announce();
var score = 50;
function announce() { console.log("Game started"); }
let status = "ready";
startGame();
function startGame() {
    console.log(status);
}

console.log("Fixed:");
var fixedScore = 50;
console.log(fixedScore);
let fixedStatus = "ready";
fixedStartGame();
function fixedStartGame() {
    console.log(fixedStatus);
}
console.log("Arrow version:");
const arrowAnnounce = () => console.log("Game started with arrow");
const arrowStartGame = () => console.log(fixedStatus);
arrowAnnounce();
