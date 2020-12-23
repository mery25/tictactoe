import '../css/Game.css';
import React from "react";
import Board from "./Board";
import SwitchOrderButton from "./SwitchOrderButton"
import HistoryBar from './HistoryBar';

function GameComponent(props) {

    return (
         <div className="game">
            <div className="game-status">
            { props.nextPlayer && 
                <h2>Next player is  <span>{props.nextPlayer}</span></h2>
            }
            </div>
            <div className="game-panel">
                <div className="game-board">
                    <Board
                        squares={props.squares}
                        onClick={props.onClick}
                    />
                </div>
                <HistoryBar 
                    toggleSidebar={props.toggleSidebar}
                    toggleOrder={props.toggleOrder}
                    historyInfo={props.historyInfo}
                    jumpTo={props.jumpTo}
                />
            </div>
        </div> 
    );
}

export default GameComponent;