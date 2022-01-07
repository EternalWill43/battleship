const ship = require("./funcs/ship.js");
const gameBoard = require("./funcs/gameboard.js");
const player = require("./funcs/player.js");
const nav = require("./navbar");
const { createGrid, setBG }  = require("./funcs/utility.js");
require("./styles.css")
// --------- End imports -------------

// --------- Set layout -----------
let setter = false;
const bod = document.body;
const content = document.createElement("div");
content.classList.add("content");
bod.appendChild(nav);
bod.appendChild(content);
const container = document.createElement("div");
const setShip = document.createElement("button");
setShip.innerHTML = "Set Ship";
setShip.classList.add("btn");
content.appendChild(setShip);
bod.appendChild(container);
container.classList.add("container");
let daBoard = gameBoard(10);
createGrid(10);
// -------- End layout ---------

setShip.addEventListener("click", () => {
    setter = !setter;
});

let sqrs = document.querySelectorAll(".square");
sqrs.forEach(s => {
    s.addEventListener("click", () => {
        if (setter) {
            s.style.backgroundColor = "black";
        }
    });
});
