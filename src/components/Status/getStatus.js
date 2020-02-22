import getWinner from '../Game/getWinner';

const getStatus = (squares, xIsNext) => {
    const winner = getWinner(squares);
    let status = {
        label: null,
        player: null,
    };
    if(winner) {
        status.label = 'Winner';
        status.player = winner;
    } else {
        status.label = 'Next player';
        status.player = (xIsNext ? 'X' : 'O');
    }
    return status;
};

export default getStatus;
