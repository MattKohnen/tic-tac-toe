const handleHistoryItemClick = (setStepNumber, setXIsNext, step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
};

export default handleHistoryItemClick;
