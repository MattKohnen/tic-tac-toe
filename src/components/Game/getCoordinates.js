const getCoordinates = (squares, square) => {
    const coordinates = squares.map((item, index) => {
        let col, row;
        if (index % 3 === 0) {
            col = 1;
        } else if ((index - 1) % 3 === 0) {
            col = 2;
        } else if ((index - 2) % 3 === 0) {
            col = 3;
        }

        if (index >= 0 && index <= 2) {
            row = 1;
        } else if (index >= 3 && index <= 5) {
            row = 2;
        } else if (index >= 6 && index <= 8) {
            row = 3;
        }

        return {col: col, row: row};
    });

    return coordinates[square];
};

export default getCoordinates;
