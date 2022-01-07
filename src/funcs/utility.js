function createGrid(gridAmount) {
    const container = document.querySelector(".container");
    for (let i = 0; i < gridAmount; i++) {
        const row = document.createElement('div');
        container.appendChild(row);
        for (let j = 0; j < gridAmount; j++) {
            const square = document.createElement('div');
            square.setAttribute('style', 'background-color: white;');
            square.classList.add('square');
            square.style.width = `${900 / gridAmount}px`;
            square.style.height = `${900 / gridAmount}px`;
            square.id = i.toString() + j.toString();
            row.appendChild(square);
        }
    }
}

function setBG() {
    console.log("Setting bg");
    document.body.style.backgroundColor = "white";
}

module.exports = { createGrid, setBG };