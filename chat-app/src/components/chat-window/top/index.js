import React,{memo} from 'react'
import { useCurrentRoom } from '../../../context/current-room.context'

const Top = () => {

        const name=useCurrentRoom(v=>v.name) // selecting particular component to rerender

    return (
        <div>
            {name}
        </div>
    )
}

export default memo(Top);
