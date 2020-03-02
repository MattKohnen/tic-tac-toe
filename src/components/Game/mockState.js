const initialState = {
    history: [
        {
            squares: Array(9).fill(null),
            moves: [],
        }
    ],
    stepNumber: 0,
    xIsNext: true,
};

let history = initialState.history;
const setHistory = (_history) => history = _history;
const resetHistory = () => history = initialState.history;

let stepNumber = initialState.stepNumber;
const setStepNumber = (_stepNumber) => stepNumber = _stepNumber;
const resetStepNumber = () => stepNumber = initialState.stepNumber;

let xIsNext = initialState.xIsNext;
const setXIsNext = (_xIsNext) => xIsNext = _xIsNext;
const resetXIsNext = () => xIsNext = initialState.xIsNext;

export {
    history,
    setHistory,
    resetHistory,
    stepNumber,
    setStepNumber,
    resetStepNumber,
    xIsNext,
    setXIsNext,
    resetXIsNext,
};
