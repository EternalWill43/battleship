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

test("Return max hp", () => {
   let shipA = ship(2,0,0);
   let shipB = ship(3,1,1);
   let board = gameBoard(4);
   board.placeShip(shipA);
   board.placeShip(shipB);
   expect(
       board.getHP()
   ).toBe(5);
});