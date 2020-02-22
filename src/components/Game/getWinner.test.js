import getWinner from './getWinner';

it('gets proper winner', () => {
    // Arrange
    const squares = ['X', null, null, 'X', 'O', null, 'X', 'O', null];

    // Act
    const result = getWinner(squares);
    const expected = 'X';

    // Assert
    expect(result).toEqual(expected);
});

it('gets proper winner', () => {
    // Arrange
    const squares = ['X', 'O', null, 'X', 'O', null, null, 'O', 'X'];

    // Act
    const result = getWinner(squares);
    const expected = 'O';

    // Assert
    expect(result).toEqual(expected);
});
