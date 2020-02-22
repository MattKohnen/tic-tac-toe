const mockHistory = {
    initialState: [
        {
            squares: [null, null, null, null, null, null, null, null, null],
            moves: []
        }
    ],
    oneMove: [
        {
            squares: [null, null, null, null, null, null, null, null, null],
            moves: []
        },
        {
            squares: ['X', null, null, null, null, null, null, null, null],
            moves: ['Go to move at (1, 1)']
        }
    ],
    twoMoves: [
        {
            squares: [null, null, null, null, null, null, null, null, null],
            moves: []
        },
        {
            squares: ['X', null, null, null, null, null, null, null, null],
            moves: ['Go to move at (1, 1)']
        },
        {
            squares: ['X', null, null, null, 'O', null, null, null, null],
            moves: [
                'Go to move at (1, 1)',
                'Go to move at (2, 2)'
            ]
        }
    ],
    threeMoves: [
        {
            squares: [null, null, null, null, null, null, null, null, null],
            moves: []
        },
        {
            squares: ['X', null, null, null, null, null, null, null, null],
            moves: ['Go to move at (1, 1)']
        },
        {
            squares: ['X', null, null, null, 'O', null, null, null, null],
            moves: [
                'Go to move at (1, 1)',
                'Go to move at (2, 2)'
            ]
        },
        {
            squares: ['X', null, null, 'X', 'O', null, null, null, null],
            moves: [
                'Go to move at (1, 1)',
                'Go to move at (2, 2)',
                'Go to move at (1, 2)'
            ]
        }
    ],
    fourMoves: [
        {
            squares: [null, null, null, null, null, null, null, null, null],
            moves: []
        },
        {
            squares: ['X', null, null, null, null, null, null, null, null],
            moves: ['Go to move at (1, 1)']
        },
        {
            squares: ['X', null, null, null, 'O', null, null, null, null],
            moves: [
                'Go to move at (1, 1)',
                'Go to move at (2, 2)'
            ]
        },
        {
            squares: ['X', null, null, 'X', 'O', null, null, null, null],
            moves: [
                'Go to move at (1, 1)',
                'Go to move at (2, 2)',
                'Go to move at (1, 2)'
            ]
        },
        {
            squares: ['X', null, null, 'X', 'O', null, null, 'O', null],
            moves: [
                'Go to move at (1, 1)',
                'Go to move at (2, 2)',
                'Go to move at (1, 2)',
                'Go to move at (2, 3)'
            ]
        }
    ],
    xIsWinner: [
        {
            squares: [null, null, null, null, null, null, null, null, null],
            moves: []
        },
        {
            squares: ['X', null, null, null, null, null, null, null, null],
            moves: ['Go to move at (1, 1)']
        },
        {
            squares: ['X', null, null, null, 'O', null, null, null, null],
            moves: [
                'Go to move at (1, 1)',
                'Go to move at (2, 2)'
            ]
        },
        {
            squares: ['X', null, null, 'X', 'O', null, null, null, null],
            moves: [
                'Go to move at (1, 1)',
                'Go to move at (2, 2)',
                'Go to move at (1, 2)'
            ]
        },
        {
            squares: ['X', null, null, 'X', 'O', null, null, 'O', null],
            moves: [
                'Go to move at (1, 1)',
                'Go to move at (2, 2)',
                'Go to move at (1, 2)',
                'Go to move at (2, 3)'
            ]
        },
        {
            squares: ['X', null, null, 'X', 'O', null, 'X', 'O', null],
            moves: [
                'Go to move at (1, 1)',
                'Go to move at (2, 2)',
                'Go to move at (1, 2)',
                'Go to move at (2, 3)',
                'Go to move at (1, 3)'
            ]
        }
    ]
};

export default mockHistory;
