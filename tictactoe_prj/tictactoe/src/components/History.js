import React from 'react'

const History = ({history,moveTo,currentMove}) => {
    return (
        <div>
            <ul>
                {
                    history.map((_,move)=>{
                        return <li key={move}>
                            {/* inline style prop */}
                            <button style={{
                                fontWeight:move===currentMove ? 'bold':'normal'
                            }} type="button" onClick={()=>moveTo(move)}>{move===0 ? `Go to move #${move}`: `Go to move #${move}`}</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default History
