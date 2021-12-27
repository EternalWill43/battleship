const ship = (length, x1, y1, dir) => {
    let arr = [];
    let hp = length;
    while(length--) {
        if (dir === 'D') {
            let box = [x1, y1++, 'O'];
            arr.push(box);
        }
        if (dir === 'R') {
            let box = [x1++, y1, 'O'];
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