import React, { useState } from 'react';
import Board from './Board';
import { calculateWinner } from '../helpers';

const style = {
    width: '200px',
    margin: '20px auto',
};

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (i) => {
        if (winner || board[i]) return;
        
        setBoard([
            ...board.slice(0, i),
            xIsNext ? 'X' : 'O',
            ...board.slice(i + 1),
        ]);

        setXIsNext(!xIsNext);
    }
    
    const renderMoves = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    );

    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div style={style}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}</p>
                {renderMoves()}
            </div>
        </>
    );
}

export default Game;