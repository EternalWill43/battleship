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
        placeShip: function(oneShip) {
            for (let i = 0; i < oneShip.coords.length; i++) {
                let xpos = oneShip.coords[i][0];
                let ypos = oneShip.coords[i][1];
                arr[xpos][ypos] = 'O';
            }
        },
        getHP: function() {
            let total = 0;
            console.log(arr[0][0]);
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    if (arr[i][j] === 'O') total += 1;
                }
            }
            return total;
        }
    }
 }

 module.exports = gameBoard;