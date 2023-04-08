function boardGame(board, operation) {
    // TODO: 여기에 코드를 작성하세요.
    let orders = operation.split('')
    let action = {
        U:[-1,0],
        D:[1,0],
        L:[0,-1],
        R:[0,1]
}
    let result = 0
    let row = 0, col = 0

    for(let i =0;i<orders.length;i++){
        let move = action[orders[i]]
        row += move[0]
        col += move[1]

        if(row<0||row > board.length || col<0 ||col > board[0].length) return 'OUT'
        if(board[row][col]===1) result++
    }
    return result
};

const board1 = [
    [0, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 1, 0, 0],
    [0, 0, 0, 0]
]
const output1 = boardGame(board1, 'RRDLLD');
console.log(output1); // 4


const board2 = [
    [0, 0, 1],
    [1, 1, 1],
    [1, 0, 0]
]
const output2 = boardGame(board2, 'UUUDD');
console.log(output2); // 'OUT'

const board3 = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0]
]
const output3 = boardGame(board3, 'DDRRRUDUDUD');
console.log(output3); // 0