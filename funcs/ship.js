const ship = (length, row, col, dir) => {
    let arr = [];
    let hp = length;
    while(length--) {
        if (dir === 'R') {
            let box = [row, col++, 'O'];
            arr.push(box);
        }
        else if (dir === 'D') {
            let box = [row++, col, 'O'];
            arr.push(box);
        }
    }
    return {
        coords: arr,
        hp: hp,
        hit: function(x, y) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][0] === x && arr[i][1] === y) {
                    arr[i][2] = 'X';
                    hp--;
                }
            }
        },
        isSunk: function() {
            return hp === 0;
        }
    };
};

module.exports = ship;