import React,{memo} from 'react'
import { ButtonToolbar, Icon } from 'rsuite'
import { Link } from 'react-router-dom'
import { useCurrentRoom } from '../../../context/current-room.context'
import { useMediaQuery } from '../../../misc/custom-hooks'
import RoomInfoBtnModal from './RoomInfoBtnModal'

const Top = () => {

        const name=useCurrentRoom(v=>v.name) // selecting particular component to rerender
        const isMobile = useMediaQuery('(max-width: 992px)')

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h4>
                    <Icon componentClass={Link} to="/" icon="arrow-circle-left" size="2x" className={isMobile ? 'd-inline-block p-0 mr-2 text-blue link-unstyled': 'd-none' } />
                    <span className="text-disappear">{name}</span>
                </h4>
                <ButtonToolbar className="white-space:nowrap">todo</ButtonToolbar>
            </div>
            <div className="d-flex justify-content-between align-tems-center">
                <span>todo</span>
                <RoomInfoBtnModal />
            </div>
        </div>
    )
}

export default memo(Top);
