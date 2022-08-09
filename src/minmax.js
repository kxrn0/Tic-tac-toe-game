export function empty_spots(board) {
    return board
    .map((cell, index) => cell === null ? index : null)
    .filter(cell => cell !== null);
}

export function get_winner(state) {
    const combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let combi of combinations) {
        if (combi.every(index => state[index] == 'x'))
            return 'x';
        else if (combi.every(index => state[index] == 'o'))
            return 'o';
    }
    return null;
}

export function minmax(currentBoard, player, human, computer) {
    const emptySpots = empty_spots(currentBoard);
    const winner = get_winner(currentBoard);
    const moves = [];
    const cond = player == computer ? (x, y) => x > y : (x, y) => x < y;
    let bestoScore, bestoMove;

    if (winner == human)
        return { score: -10 };
    else if (winner == computer)
        return { score: 10 };
    else if (!emptySpots.length)
        return { score: 0 };

    for (let i = 0; i < emptySpots.length; i++) {
        const move = {};
        let result;

        move.index = emptySpots[i];
        currentBoard[emptySpots[i]] = player;    
        
        if (player == computer)
            result = minmax(currentBoard, human, human, computer);
        else
            result = minmax(currentBoard, computer, human, computer);

        move.score = result.score;
        currentBoard[emptySpots[i]] = null;
        moves.push(move);
    }

    bestoScore = player == computer ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;

    for (let i = 0; i < moves.length; i++)
        if (cond(moves[i].score, bestoScore)) {
            bestoScore = moves[i].score
            bestoMove = i;
        }
    return moves[bestoMove];
}