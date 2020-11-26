import '../css/Game.css';
import React, {useState} from "react";
import Board from "./Board";
import { calculateWinner } from "../calculateWinner"
import SwitchOrderButton from "./SwitchOrderButton"

function Game() {

    const BOARD_SIZE = 9;
    
    const [ history, setHistory ] = useState([{
        squares: Array.from({
            length: BOARD_SIZE}, 
            e => Object.assign({ value: null, isHighlighted: false})),
        squarePosition: -1
    }]);
    const [ xIsNext, setXIsNext ] = useState(true);
    const [ stepNumber, setStepNumber ] = useState(0);
    const [ isAscendingHistory, setIsAscendingHistory ] = useState(true);

    function handleClick(i) {
        const oldHistory = history.slice(0, stepNumber + 1);
        const current = oldHistory[oldHistory.length - 1];
        const squares = [...current.squares];

        if (calculateWinner(squares) || squares[i].value) {
            return;
        }

        squares[i] = {
            ...squares[i],
            value: xIsNext ? 'X' : 'O'
        }
        setHistory(prevHistory => prevHistory.concat([{
            squares: squares,
            squarePosition: i
        }]));
        setStepNumber(oldHistory.length);
        setXIsNext(prevXIsNext => !prevXIsNext);
    }

    function jumpTo(step) {
        setStepNumber(step);
        setXIsNext((step % 2) === 0);
    }

    
    function toggleOrder() {
        setIsAscendingHistory(prevIsAscendingHistory => !prevIsAscendingHistory)
    }
    
    function renderMoves(history) {
        return history.map((step, move) => {
            const { squarePosition } = step;
            const row = Math.floor(squarePosition / 3);
            const col = squarePosition % 3;
            const desc = move ?
                `Go to move #${move}: row ${row}, column ${col}` :
                'Go to game start';
            return (
                <li className="history-move" key={move}>
                    <button onClick={() => jumpTo(move)}>{desc}</button>
                </li>
            );
        });
    }

    function createStatus(winner) {
        let status;
        if (winner) {
            status = 'Winner: ' + winner.value;
        } else if (stepNumber === BOARD_SIZE) {
            status = "This is a tie!"
        } else {
            status = 'Next player: ' + (xIsNext ? 'X' : 'O');
        }
        return status;
    }

    function highlightWinnerSquares(squares, winnerPositions) {
        let position = 0;
        return squares.map((square, i) => {
            if(position < winnerPositions.length 
                && i == winnerPositions[position]) {
                ++position;
                return {
                    ... square,
                    isHighlighted: true
                }
            }
            return square;
        })

    }

    const current = history[stepNumber];
    const winner = calculateWinner(current.squares);
    let status = createStatus(winner);

    const moves = renderMoves(history);

    const sortedMoves = isAscendingHistory 
        ? moves 
        : moves.reverse();

    const squares = winner 
        ? highlightWinnerSquares(current.squares, winner.positions) 
        : current.squares;

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={squares}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <div>
                    <h3>History</h3>
                    <SwitchOrderButton 
                        isAscending={isAscendingHistory} 
                        toggleOrder={() => toggleOrder()} 
                    />
                </div>
                <ol className="history">{sortedMoves}</ol>
            </div>
        </div>
    );
}

export default Game;