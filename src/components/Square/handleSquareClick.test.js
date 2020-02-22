import * as mockState from '../Game/mockState';
import handleSquareClick from "./handleSquareClick";
import mockHistory from '../History/mockHistory';

afterEach(() => {
    // Reset mock state
    mockState.resetHistory();
    mockState.resetStepNumber();
    mockState.resetXIsNext();
});

it('modifies state correctly', () => {
    // Arrange
    // Check initial mock state
    expect(mockState.history).toEqual(mockHistory.initialState);
    expect(mockState.stepNumber).toEqual(0);
    expect(mockState.xIsNext).toEqual(true);

    // Act
    handleSquareClick(mockState, 0);

    // Assert
    expect(mockState.history).toEqual(mockHistory.oneMove);
    expect(mockState.stepNumber).toEqual(1);
    expect(mockState.xIsNext).toEqual(false);
});

it('modifies state correctly', () => {
    // Arrange
    // Set mock state
    mockState.setHistory(mockHistory.threeMoves);
    mockState.setStepNumber(3);
    mockState.setXIsNext(false);

    // Act
    handleSquareClick(mockState, 7);

    // Assert
    expect(mockState.history).toEqual(mockHistory.fourMoves);
    expect(mockState.stepNumber).toEqual(4);
    expect(mockState.xIsNext).toEqual(true);
});

it('modifies state correctly', () => {
    // Arrange
    // Set mock state
    mockState.setHistory(mockHistory.xIsWinner);
    mockState.setStepNumber(5);
    mockState.setXIsNext(false);

    // Act
    handleSquareClick(mockState, 6);

    // Assert
    expect(mockState.history).toEqual(mockHistory.xIsWinner);
    expect(mockState.stepNumber).toEqual(5);
    expect(mockState.xIsNext).toEqual(false);
});
