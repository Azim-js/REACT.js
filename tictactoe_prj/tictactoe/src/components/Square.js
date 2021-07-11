import React from 'react'

const Square = ({value,onClick,isWinningSquares}) => {
    // using{destructing method}
    // console.log(props);
    return (
       <button style={{
           fontWeight:isWinningSquares ? 'bold':'normal'
       }}
       type="button" className="square" onClick={onClick}>{value}</button>
    )
}

export default Square
