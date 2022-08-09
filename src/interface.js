export function update_results(player1, player2, ties, xResults, oResults, tiesResults) {
    const xNumber = xResults.querySelector(".result-number");   
    const oNumber = oResults.querySelector(".result-number");    
    const tiesNumber = tiesResults.querySelector(".result-number");

    tiesNumber.innerText = ties;
    xNumber.innerText = player1.symbol == 'x' ? player1.wins : player2.wins;
    oNumber.innerText = player1.symbol == 'x' ? player2.wins : player1.wins;
}

export function handle_screen(show, screen) {
    screen.classList.add(show ? "shown" : "hidden");
    screen.classList.remove(show ? "hidden" : "shown");
}

export function get_who_won(winner, player1, ai) {
    if (ai) {
        if (winner == player1.symbol)
            return "YOU WON!";
        else
            return "OH NO, YOU LOST...";
    }
    else
        return `PLAYER ${winner == player1.symbol ? '1' : '2'} WINS!`;
}

export function assign_symbols(player1, player2, choices) {
    const label = choices.filter(choice => choice.checked)[0].dataset.label;

    if (label == 'x') {
        player1.symbol = 'x';
        player2.symbol = 'o';
    }
    else {
        player1.symbol = 'o';
        player2.symbol = 'x';
    }
}