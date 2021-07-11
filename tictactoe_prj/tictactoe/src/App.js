import React,{useState} from "react";
import Board from "./components/Board";
import {calculateWinner} from "./helper"
import "./styles/root.scss"

const App=()=>{
  const [history,setHistory]=useState([{board:Array(9).fill(null),isXNext:true}]);
  const [currentMove,SetCurrentMove]=useState(0);
  
  const current=history[currentMove];
    // const [isXNext,setisXNext]=useState(false);
    const winner=calculateWinner(current.board);
    console.log(winner);
    // console.log(current.board);
    console.log(history);
    const message = winner ? `Winner is ${winner}` : ` Next Player is ${current.isXNext ? 'X':'O'} `;
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
  return(
  < >
  <div className="app">
    <h1>X-O GAME !</h1>
    <h2>{message}</h2>
    <Board board={current.board} handleSquareClick={handleSquareClick}/>
    </div>
    
  </>);
};

export default App;
