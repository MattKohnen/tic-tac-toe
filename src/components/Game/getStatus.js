import getWinner from './getWinner';

const getStatus = (current, xIsNext) => {
    const winner = getWinner(current.squares);
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
