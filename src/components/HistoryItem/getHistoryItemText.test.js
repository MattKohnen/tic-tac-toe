import getHistoryItemText from './getHistoryItemText';

it('gets proper text', () => {
    // Arrange
    const coordinates = null;

    // Act
    const result = getHistoryItemText(coordinates);
    const expected = 'Go to game start';

    // Assert
    expect(result).toEqual(expected);
});

it('gets proper text', () => {
    // Arrange
    const coordinates = {col: 1, row: 1};

    // Act
    const result = getHistoryItemText(coordinates);
    const expected = 'Go to move at (1, 1)';

    // Assert
    expect(result).toEqual(expected);
});
