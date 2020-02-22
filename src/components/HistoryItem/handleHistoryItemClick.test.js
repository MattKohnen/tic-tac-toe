import {
    stepNumber,
    setStepNumber,
    xIsNext,
    setXIsNext,
} from '../Game/mockState';
import handleHistoryItemClick from './handleHistoryItemClick';

it('jumps to proper step', () => {
    // Arrange
    // Check initial mock state
    expect(stepNumber).toEqual(0);
    expect(xIsNext).toEqual(true);

    // Act
    // Set mock state
    handleHistoryItemClick(setStepNumber, setXIsNext, 1);

    // Assert
    expect(stepNumber).toEqual(1);
    expect(xIsNext).toEqual(false);
});

it('jumps to proper step', () => {
    // Arrange
    // Check initial mock state
    expect(stepNumber).toEqual(1);
    expect(xIsNext).toEqual(false);

    // Act
    // Set mock state
    handleHistoryItemClick(setStepNumber, setXIsNext, 6);

    // Assert
    expect(stepNumber).toEqual(6);
    expect(xIsNext).toEqual(true);
});
