const gameBoard = (sz) => {
    let arr = [];
    for (let i = 0; i < sz; i++) {
        arr[i] = [];
        for (let j = 0; j < sz; j++) {
            arr[i].push('P');
        }
    }
    return {
        board: arr,
    }
 }

 module.exports = gameBoard;