const gameBoard = require("../gameboard");
const ship = require("../ship");

test("Populate grid", () => {
    expect(
        gameBoard(3).board).toStrictEqual(
        [
            ['P','P','P'],
            ['P','P','P'],
            ['P','P','P']
        ]
    )
});

test("Initialize 2 ships", () => {
    let x = ship(2,0,0,'R');
    let y = ship(2,1,1,'D');
    let board = gameBoard(3);
    board.placeShip(x);
    board.placeShip(y);
    expect(
        board.board
    ).toStrictEqual(
        [
            ['O','O','P'],
            ['P','O','P'],
            ['P','O','P']
        ]
    );
});