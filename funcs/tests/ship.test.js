const ship = require("../ship");

test("regular valid input", () => {
    expect(ship(2, 0,0, 'D').coords).toStrictEqual([[0,0,'O'],[1,0,'O']]);
});

test("horizontal ship placement", () => {
   expect(ship(3,1,1,'R').coords).toStrictEqual(
       [
           [1,1,'O'],
           [1,2,'O'],
           [1,3,'O']
       ]
   );
});

test("vertical ship placement", () => {
    expect(ship(3,0,1,'D').coords).toStrictEqual(
        [
            [0,1,'O'],
            [1,1,'O'],
            [2,1,'O']
        ]
    );
});

test("Hit function", () => {
    let testShip = ship(2,0,0,'D');
    testShip.hit(0,0);
    expect(
        testShip.coords
    ).toStrictEqual(
        [[0,0,'X'],[1,0,'O']]
    );
});

test("Sinking ship function", () => {
   let testShip = ship(2,0,0,'D');
   testShip.hit(0,0);
   testShip.hit(1,0);
   expect(
       testShip.isSunk()
   ).toBe(true);
});
