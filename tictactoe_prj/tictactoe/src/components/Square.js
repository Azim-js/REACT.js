import React from 'react'

const Square = ({value,onClick,isWinningSquares}) => {
    // using{destructing method}
    // console.log(props);
    return (
       <button style={{
           fontWeight:isWinningSquares ? 'bold':'normal'
       }}
       type="button" className={`square ${isWinningSquares ? 'winning': ' '} ${value === 'X' ? 'text-green':'text-orange'} `}onClick={onClick}>{value}</button>
    )
}

export default Square
