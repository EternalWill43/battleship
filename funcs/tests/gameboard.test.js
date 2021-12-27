const gameBoard = require("../gameboard");

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