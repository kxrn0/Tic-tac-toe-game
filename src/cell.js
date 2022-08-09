import { empty_spots, minmax } from "./minmax.js"

export function pick_random_cell(board, cells) {
    const indices = empty_spots(board);
    const index = indices[~~(Math.random() * indices.length)];

    return cells.find(cell => cell.dataset.index == index);
}

export function pick_best_cell(board, cells, player1) {
    const player = player1.symbol == 'x' ? 'o' : 'x';
    const human = player1.symbol == 'x' ? 'x' : 'o';
    const computer = player1.symbol == 'x' ? 'o' : 'x'; 
    const move = minmax(board, player, human, computer);

    return cells.find(cell => cell.dataset.index == move.index);
}

export function clean_board(cells) {
    cells.forEach(cell => cell.className = "pad");
}

export function change_hover_state(cells, xTurn) {
    cells.forEach(cell => {
        if (!empty(cell)) {
            cell.classList.remove("o-hover");
            cell.classList.remove("x-hover");
        }
        else {
            cell.classList.add(xTurn ? "x-hover" : "o-hover");
            cell.classList.remove(xTurn ? "o-hover" : "x-hover");
        }
    });
}

export function empty(cell) {
    return !cell.classList.contains('x') && !cell.classList.contains('o');
}