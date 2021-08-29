import React from 'react'
import { auth } from '../../misc/firebase'

const ProviderBlock = () => {
    return (
        console.log(auth.currentUser)
        <div>
            hello
        </div>
    )
}

export default ProviderBlock
