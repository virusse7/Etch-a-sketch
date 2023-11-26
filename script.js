function askForSquares() {
    const button = document.querySelector(".button");

    button.addEventListener("click", () => {
        const answer = prompt("Please eneter number of squares per side for the new grid.");
        const parsedAnswer = parseInt(answer);
        if (parsedAnswer < 100) {
            deleteSquare();
            createSquare(parsedAnswer);
        } else {
            alert("Please provide smaller number");
        }
    })
}

function deleteSquare() {
    const container = document.querySelector(".container");
    container.innerHTML = "";
}

function createSquare() {
    const container = document.querySelector(".container");

    for (let i = 0; i < 256; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.classList.add("hover");
        });
    }
}

function init() {
    askForSquares();
    createSquare();
}

init();
