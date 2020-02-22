import getCoordinates from './getCoordinates';

it('gets proper coordinates', () => {
    // Arrange
    const squares = ['X', null, null, null, null, null, null, null, null];

    // Act
    const result = getCoordinates(squares, 0);
    const expected = {col: 1, row: 1};

    // Assert
    expect(result).toEqual(expected);
});

it('gets proper coordinates', () => {
    // Arrange
    const squares = [null, null, null, null, 'O', null, null, null, null];

    // Act
    const result = getCoordinates(squares, 4);
    const expected = {col: 2, row: 2};

    // Assert
    expect(result).toEqual(expected);
});

it('gets proper coordinates', () => {
    // Arrange
    const squares = [null, null, null, null, null, null, null, null, 'X'];

    // Act
    const result = getCoordinates(squares, 8);
    const expected = {col: 3, row: 3};

    // Assert
    expect(result).toEqual(expected);
});
