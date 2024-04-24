import { useState } from "react";
import Cards from "../Cards/Cards";
import "./Grid.css";
import isWinner from '../../helpers/checkWinner.js';

function Grid({numberOfCards}){
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true);
  const [winner, setWinner] = useState(null);

  function play(index){
    if (turn == true) {
      board[index] = "O";
    } else {
      board[index] = "X";
    }
    const win = isWinner(board, turn ? "O" : "X");
    if(win){
      setWinner(win)
    }

    setBoard([...board]);
    setTurn(!turn);
  }

  function reset() {
    setBoard(Array(numberOfCards).fill(""));
    setTurn(true);
    setWinner(null);
  }
  return (
    <div className="grid-wrapper">
      {
        winner && (
          <>
            <h1 className="turn-highlight">Winner is {winner}</h1>
            <button className="reset" onClick={reset}>Reset Game</button>
          </>
        )
      }
      <h1 className="turn-highlight">Current turn: {(turn) ? "O" : 'X'}</h1>
      <div className="grid">
        {board.map((el, idx) => <Cards gameEnd={winner ? true : false} key= {idx} onPlay={play} player={el} index={idx} />)}
      </div>
    </div>
  )
}

export default Grid;