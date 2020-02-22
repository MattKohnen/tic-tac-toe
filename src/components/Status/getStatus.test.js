import getStatus from './getStatus';

it('gets proper status', () => {
    // Arrange
    const squares = [null, null, null, null, null, null, null, null, null];
    const xIsNext = true;

    // Act
    const result = getStatus(squares, xIsNext);
    const expected = {label: 'Next player', player: 'X'};

    // Assert
    expect(result).toEqual(expected);
});

it('gets proper status', () => {
    // Arrange
    const squares = ['X', null, null, null, null, null, null, null, null];
    const xIsNext = false;

    // Act
    const result = getStatus(squares, xIsNext);
    const expected = {label: 'Next player', player: 'O'};

    // Assert
    expect(result).toEqual(expected);
});

it('gets proper status', () => {
    // Arrange
    const squares = ['X', null, null, 'X', 'O', null, 'X', 'O', null];
    const xIsNext = false;

    // Act
    const result = getStatus(squares, xIsNext);
    const expected = {label: 'Winner', player: 'X'};

    // Assert
    expect(result).toEqual(expected);
});

it('gets proper status', () => {
    // Arrange
    const squares = ['X', 'O', null, 'X', 'O', null, null, 'O', 'X'];
    const xIsNext = true;

    // Act
    const result = getStatus(squares, xIsNext);
    const expected = {label: 'Winner', player: 'O'};

    // Assert
    expect(result).toEqual(expected);
});
