const gameBoard = require("../gameboard.js");
const ship = require("../ship.js");

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

test("Getting total HP", () => {
    let x = ship(2,0,0,'R');
    let board = gameBoard(3);
    board.placeShip(x);
    expect(
        board.getHP()
    ).toBe(2);
});

test("Two ships get HP", () => {
   let x = ship(2, 0, 0, 'R');
   let y = ship(3, 1, 1, 'D');
   let board = gameBoard(5);
   board.placeShip(x);
   board.placeShip(y);
   expect(
       board.getHP()
   ).toBe(5);
});

test("Receiving attack miss", () => {
    let x = ship(2, 0, 0, 'R');
    let y = ship(3, 1, 1, 'D');
    let board = gameBoard(5);
    board.placeShip(x);
    board.placeShip(y);
    expect(
        board.receiveAttack(2,2)
    ).toBe(false);
});

test("Receiving attack hit", () => {
    let x = ship(2, 0, 0, 'R');
    let y = ship(3, 1, 1, 'D');
    let board = gameBoard(5);
    board.placeShip(x);
    board.placeShip(y);
    expect(
        board.receiveAttack(2,1)
    ).toBe(true);
});