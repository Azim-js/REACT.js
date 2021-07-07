import React from 'react'

const Square = ({value}) => {
    // using{destructing method}
    // console.log(props);
    return (
       <button type="button" className="square" onClick={()=>{
           console.log(value);
    }
       }>{value}</button>
    )
}

export default Square
