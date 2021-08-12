import React from 'react'
import { useParams } from 'react-router'

const Show = () => {
    const params=useParams();
    // eslint-disable-next-line
    console.log("params",params)
    return (
        <div>
            This is Show Page
        </div>
    )
}

export default Show
