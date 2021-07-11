import React,{useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import SquareMessage from "./components/SquareMessage";
import {calculateWinner} from "./helper"

import "./styles/root.scss"
const NewGame=[{board:Array(9).fill(null),isXNext:true}];
const App=()=>{
  const [history,setHistory]=useState(NewGame);
  const [currentMove,SetCurrentMove]=useState(0);
  
  const current=history[currentMove];
    // const [isXNext,setisXNext]=useState(false);
    const { winner , winningSquares }=calculateWinner(current.board);
    console.log(winner);
    console.log(winningSquares);
    
    // console.log(current.board);
    console.log(history);
    
    const handleSquareClick=(position)=>{
        // console.log(position);
        if(current.board[position] || winner){
            return;
        }
        setHistory( (prev)=>{
          const last=prev[prev.length-1];
            const newBoard=last.board.map((square,pos)=>{
                if(pos==position){
                    return last.isXNext ? 'X':'O';
                }
                return square;
            })
            return prev.concat({board:newBoard,isXNext:!last.isXNext})
        })
        SetCurrentMove(prev=>prev+1);
        // setisXNext(prev=>!prev);
        
    }
    const moveTo=(move)=>{
      SetCurrentMove(move);
    }
    const onNewGame=()=>{
      setHistory(NewGame);
      SetCurrentMove(0);
    }
  return(
  < >
  <div className="app">
    <h1>X-O GAME !</h1>
    <SquareMessage winner={winner} current={current} />
    <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares={winningSquares} />
    <button type="button" onClick={onNewGame}>Start New Game</button>
    <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    </div>
    
  </>);
};

export default App;
