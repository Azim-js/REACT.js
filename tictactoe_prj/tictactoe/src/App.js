import React,{useState} from "react";
import Board from "./components/Board";
import {calculateWinner} from "./helper"
import "./styles/root.scss"

const App=()=>{
  const [board,setBoard]=useState(Array(9).fill(null));
    const [isXNext,setisXNext]=useState(false);
    const winner=calculateWinner(board);
    console.log(winner);
    console.log(board);
    const message = winner ? `Winner is ${winner}` : ` Next Player is ${isXNext ? 'X':'O'} `;
    const handleSquareClick=(position)=>{
        // console.log(position);
        if(board[position] || winner){
            return;
        }
        setBoard( (prev)=>{
            return prev.map((square,pos)=>{
                if(pos==position){
                    return isXNext ? 'X':'O';
                }
                return square;
            })
        })
        setisXNext(prev=>!prev);
    }
  return(
  < >
  <div className="app">
    <h1>X-O GAME !</h1>
    <h2>{message}</h2>
    <Board board={board} handleSquareClick={handleSquareClick}/>
    </div>
    
  </>);
};

export default App;
