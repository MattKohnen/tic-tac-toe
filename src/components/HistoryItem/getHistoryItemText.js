const getHistoryItemText = (coordinates) => {
    return coordinates ?
        'Go to move at (' + coordinates.col + ', ' + coordinates.row + ')' :
        'Go to game start';
};

export default getHistoryItemText;
