import "./imports.js";
import { update_results, handle_screen, get_who_won, assign_symbols } from "./interface.js";
import { clean_board, change_hover_state, pick_random_cell, pick_best_cell, empty } from "./cell.js";
import { get_winner } from "./minmax.js";

const newGameScreen = document.querySelector(".new-game-screen");
const newGameCPU = newGameScreen.querySelector(".new-game-cpu");
const newGamePlayer = newGameScreen.querySelector(".new-game-player");
const choices = [...newGameScreen.querySelectorAll(".options input[type='radio']")];

const gameOverScreen = document.querySelector(".game-over-screen");
const gameOverScreenContent = gameOverScreen.querySelector(".screen-content");
const whoWon = gameOverScreen.querySelector(".who-won");
const winnerImage = gameOverScreen.querySelector(".winner-results img");
const quit = gameOverScreen.querySelector(".cancel-button");
const nextRound = gameOverScreen.querySelector(".continue-button");
const roundMessage = gameOverScreen.querySelector(".winner-results h2");
const winnerOImage = "./icon-o.svg";
const winnerXImage = "./icon-x.svg";

const boardScreen = document.querySelector(".game-board-screen");
const cells = [...boardScreen.querySelectorAll(".pad")];
const xResults  = boardScreen.querySelector(".player-x-results");
const oResults = boardScreen.querySelector(".player-o-results");
const tiesResults = boardScreen.querySelector(".results .ties");
const reset = boardScreen.querySelector(".reset");
const turnImage = boardScreen.querySelector(".turn img");
const block = boardScreen.querySelector(".blocker");
const xTurnImage = "./icon-x-black.svg";
const oTurnImage = "./icon-o-black.svg";

const resetScreen = document.querySelector(".restart-screen");
const cancelButton = resetScreen.querySelector(".cancel-button");
const continueButton = resetScreen.querySelector(".continue-button");

const levelScreen = document.querySelector(".level-screen");
const easy = levelScreen.querySelector(".easy");
const medium = levelScreen.querySelector(".medium");
const hard = levelScreen.querySelector(".hard");

let player1, player2, ties, xTurn, ai, boardState, timeours, level;

newGameCPU.addEventListener("click", () => {
    ai = true;
    handle_screen(false, newGameScreen);
});

newGamePlayer.addEventListener("click", () => {
    ai = false;
    init();
    handle_screen(false, newGameScreen);
    handle_screen(false, levelScreen);
});

reset.addEventListener("click", () => {
    handle_screen(true, resetScreen);
});

cancelButton.addEventListener("click", () => handle_screen(false, resetScreen));

continueButton.addEventListener("click", () => {
    reset_board();
    handle_screen(false, resetScreen);
});

easy.addEventListener("click", () => {
    init();
    handle_screen(false, levelScreen);
    level = "easy";
});

medium.addEventListener("click", () => {
    init();
    handle_screen(false, levelScreen);
    level = "medium";
});

hard.addEventListener("click", () => {
    init();
    handle_screen(false, levelScreen);
    level = "hard";
});

quit.addEventListener("click", () => {
    init();
    handle_screen(false, gameOverScreen);
    handle_screen(true, levelScreen);
    handle_screen(true, newGameScreen);
});

nextRound.addEventListener("click", () => {
    handle_screen(false, gameOverScreen);
    reset_board();
});

cells.forEach(cell => cell.addEventListener("click", () => {
    if (!empty(cell))
        return;

    cell.classList.add(xTurn ? 'x' : 'o');
    boardState[cell.dataset.index] = xTurn ? 'x' : 'o';
    xTurn = !xTurn;
    change_hover_state(cells, xTurn);
    turnImage.src = xTurn ? xTurnImage : oTurnImage;
    rindou();
    check_for_game_over();
}));

function init() {
    const xLabel = xResults.querySelector(".player-label");
    const oLabel = oResults.querySelector(".player-label");

    player1 = { wins: 0 };
    player2 = { wins: 0 };
    ties = 0;
    boardState = new Array(9).fill(null);
    xTurn = true;
    assign_symbols(player1, player2, choices);
    if (ai) {
        xLabel.innerText = `X (${player1.symbol == 'x' ? "YOU" : "CPU"})`;
        oLabel.innerText = `O (${player1.symbol == 'x' ? "CPU" : "YOU"})`;
    }
    else {
        xLabel.innerText = `X (${player1.symbol == 'x' ? "P1" : "P2"})`;
        oLabel.innerText = `O (${player1.symbol == 'x' ? "P2" : "P1"})`;
    }
    update_results(player1, player2, ties, xResults, oResults, tiesResults);
    clean_board(cells);
    change_hover_state(cells, xTurn);
    rindou();
}

function reset_board() {    
    xTurn = true;
    clean_board(cells);
    change_hover_state(cells, xTurn);
    boardState = new Array(9).fill(null);
    turnImage.src = xTurn ? xTurnImage : oTurnImage;
    rindou();
}

function rindou() {
    if (!ai)
        return;

    if (player1.symbol == 'x' && xTurn || player1.symbol == 'o' && !xTurn)
        return;

    block.classList.remove("inactive-block");
    block.classList.add("active-block");
    timeours = setTimeout(() => {
        let cell;

        if (level == "easy")
            cell = pick_random_cell(boardState, cells);
        else if (level == "medium") {
            if (Math.random() < .75)
                cell = pick_random_cell(boardState, cells);
            else
                cell = pick_best_cell(boardState, cells, player1);
        }
        else 
            cell = pick_best_cell(boardState, cells, player1);

        cell.click();
        block.classList.remove("active-block");
        block.classList.add("inactive-block");
    }, ~~(Math.random() * 700 + 500));
}

function check_for_game_over() {
    const winner = get_winner(boardState);
    const cellsLeft = cells.filter(cell => empty(cell)).length;
 
    if (winner || !cellsLeft) {
        clearTimeout(timeours);
        block.classList.remove("active-block");
        block.classList.add("inactive-block");

        whoWon.innerText = get_who_won(winner, player1, ai);
        handle_screen(true, gameOverScreen);
        roundMessage.innerText = "TAKES THE ROUND";
 
        if (player1.symbol == winner)
            player1.wins++;
        else if (player2.symbol == winner)
            player2.wins++;
        else
            ties++;
        
        update_results(player1, player2, ties, xResults, oResults, tiesResults);

        if (winner == 'x') {
            gameOverScreenContent.classList.remove("o-winner-result");
            gameOverScreenContent.classList.remove("no-winner-result");
            gameOverScreenContent.classList.add("x-winner-result");
            winnerImage.src = winnerXImage;
        }
        else if (winner == 'o') {
            gameOverScreenContent.classList.remove("x-winner-result");
            gameOverScreenContent.classList.remove("no-winner-result");
            gameOverScreenContent.classList.add("o-winner-result");
            winnerImage.src = winnerOImage;
        }
        else {
            gameOverScreenContent.classList.remove("x-winner-result");
            gameOverScreenContent.classList.remove("o-winner-result");
            gameOverScreenContent.classList.add("no-winner-result");
            roundMessage.innerText = "ROUND TIED";
        }
    }
}