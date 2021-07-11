import React from 'react'

const SquareMessage = ({winner,current}) => {
     // const message = winner ? `Winner is ${winner}` : ` Next Player is ${current.isXNext ? 'X':'O'} `;
     const noMovesLeft=current.board.every((el)=>el!==null);
     console.log(noMovesLeft);
    return (
        <div>
           {winner &&  `Winner is ${winner} `}
           {!winner && !noMovesLeft && `Next Player is ${current.isXNext ? 'X ':'O'}`  }
           {!winner && noMovesLeft && `X-O tied`}
        </div>
    )
}

export default SquareMessage
