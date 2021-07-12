import React from 'react'

const SquareMessage = ({winner,current}) => {
     // const message = winner ? `Winner is ${winner}` : ` Next Player is ${current.isXNext ? 'X':'O'} `;
     const noMovesLeft=current.board.every((el)=>el!==null);
     console.log(noMovesLeft);
    return (
        <div className="square-message">
           {winner && (<>
           Winner is <span className={winner== 'X'? 'text-green':'text-orange'}>{winner}</span>
           </>)}
           {!winner && !noMovesLeft && (<>
            Next Player is <span className={current.isXNext ? 'text-green':'text-orange'}>{current.isXNext ? 'X':'O'} {''}</span>
        </>
           )  }
           {!winner && noMovesLeft && (
               <>
               <span className="text-green">X</span>-
               <span className="text-orange">O</span> TIED
               </>
           )}
        </div>
    )
}

export default SquareMessage
